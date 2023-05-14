import styles from "../styles/Button.module.scss"
import Link from "next/link"
import { Roboto_Mono } from 'next/font/google';
 
const robotoMono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})


export default function Product({href, size, children}) {
  const buttonHTML = (<button className={`${styles.button_pushable} ${robotoMono.className} ${size === "large" ? styles.button_large : ''}`} role="button" type="button">
    <span className={styles.button_edge}></span>
    <span className={styles.button_front}>{children}</span>
  </button>)

  return (
    <>
      {href ? <Link href={href}>
        {buttonHTML}
      </Link> : buttonHTML}
    </>


  );
}
