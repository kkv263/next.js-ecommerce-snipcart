import Head from 'next/head';
import { useQuerySubscription } from 'react-datocms';
import styles from '../styles/Home.module.scss';
import DatoProduct from '../components/Product/DatoProduct';
import { request } from '../lib/datocms';
import { responsiveImageFragment } from '../lib/fragments';
import Image from "next/image";
import { Roboto } from 'next/font/google';
import { Roboto_Mono } from 'next/font/google';
 
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
    }
    ${responsiveImageFragment}
    `,
    preview,
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
    data: { products },
  } = useQuerySubscription(subscription);

  return (
    <div className={styles.container}>
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

      <main className={robotoMono.className}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.hero_left}>
              <h1 className={roboto.className}>For mushroom <br></br>lovers, by <br></br>mushroom lovers</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex molestie, feugiat sem eu, venenatis dui. Morbi dui nibh, luctus non mattis eu, convallis non lectus. </p>
            </div>
            <div className={styles.hero_right}>
              <Image src='/hero.jpg' alt={'woman holding mushrooms'} width={100} height={200}/>
            </div>
          </div>
        </section>

        <div className={styles.grid}>
          {products.map((product, i) => (
            <DatoProduct {...product} key={i} />
          ))}
        </div>
      </main>

      <div
        id="snipcart"
        data-api-key={
          process.env.NEXT_PUBLIC_SNIPCART_API_KEY ||
          'OWE3MmZmMjQtNTk3Yi00OThhLWEwMmUtZDY4ZWM4NzIwYzZiNjM2NjM0Mzc1NzE0MTUwNzI1'
        }
        hidden
      ></div>
    </div>
  );
}
