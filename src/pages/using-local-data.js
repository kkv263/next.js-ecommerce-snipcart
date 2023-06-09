import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import products from '../assets/products.json';
import Product from '../components/Product/Product.jsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>E-commerce</title>
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

      <main className={styles.main}>
        <h1>E-Commerce in Next.js and SnipCart</h1>

        <div className={styles.grid}>
          {products.map((product, i) => (
            <Product {...product} key={i} />
          ))}
        </div>
        {process.env.NEXT_PUBLIC_DATOCMS_READONLY_API_KEY && (
          <Link as="dato" href="/">
            <a className={styles.cta}>See it on Dato ⟶</a>
          </Link>
        )}
      </main>

      <div
        id="snipcart"
        data-api-key={
          process.env.NEXT_PUBLIC_SNIPCART_API_KEY
        }
        hidden
      ></div>
    </div>
  );
}
