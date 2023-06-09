import Head from 'next/head';
import { useQuerySubscription } from 'react-datocms';
import styles from '../styles/Home.module.scss';
import DatoProduct from '../components/Product/DatoProduct.jsx';
import { request } from '../lib/datocms';
import { responsiveImageFragment } from '../lib/fragments';
import Image from "next/image";
import { Roboto } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';

import Nav from '../components/Nav.jsx';
import Benefits from '../components/Benefits.jsx';
import Button from '../components/Button.jsx';
import Faq from '../components/Faq.jsx'
import Footer from '../components/Footer.jsx'
 
// If loading a variable font, you don't need to specify the font weight
const roboto = Roboto({ 
  weight: '700',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})

export async function getStaticProps({ preview }) {
  const graphqlRequest = {
    query: `
    {
      products: allProducts {
        id
        name
        image {
          alt
          title
          responsiveImage(imgixParams: {fm: jpg, fit: crop }) {
            ...responsiveImageFragment
          }
        }
        description
        slug
        price
      }
      faq {
        faqBlock {
          faqTitle
          faqContent
        }
      }
    }
    ${responsiveImageFragment}
    `,
    includeDrafts: preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_PUBLIC_DATOCMS_READONLY_API_KEY,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
    },
  };
}

export default function Home({ subscription }) {
  const {
    data: { products, faq },
  } = useQuerySubscription(subscription);

  return (
    <>
      <Head>
        <title>Next.js and SnipCart Ecommerce</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css"
        />
        <script
          src="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js"
          async
        />
      </Head>
      <Nav></Nav>
      <main className={robotoMono.className}>
        <section className={styles.hero}>
          <div className={styles.container_full}>
            <div className={styles.hero_left}>
              <h1 className={roboto.className}>For mushroom <br></br>lovers, <span className={styles.hero_highlight}>by <br></br>mushroom lovers</span></h1>
              <p>Here at Myco&apos;s, we provide the highest quality mushrooms fit for consumption. Locally grown, hand picked, and delicately inspected so you can enjoy mushrooms the way they were meant to be.</p>
              <Button href="/shop" size={'large'}>Shop Now</Button>
            </div>
            <div className={styles.hero_right}>
              <Image src='/heroshitake.png' alt={'mushrooms in a field'} fill/>
            </div>
          </div>
        </section>
        <Benefits />
        <section className={styles.product}>
          <div className={styles.container}>
            <header className={styles.product_header}>
              <h2 className={`${styles.product_headline} ${roboto.className}`}>Best Sellers</h2>
              {/* <Button color="secondary" href="/shop" arrow="true">See More</Button> */}
            </header>
            <div className={styles.grid}>
              {products.map((product, i) => (
                <DatoProduct {...product} key={i} />
              ))}
            </div>
          </div>
        </section>
        <div></div>
        <Faq faq={faq} />
      </main>
      <Footer />

      <div
        id="snipcart"
        data-api-key={
          process.env.NEXT_PUBLIC_SNIPCART_API_KEY ||
          'OWE3MmZmMjQtNTk3Yi00OThhLWEwMmUtZDY4ZWM4NzIwYzZiNjM2NjM0Mzc1NzE0MTUwNzI1'
        }
        hidden
      ></div>
    </>
  );
}
