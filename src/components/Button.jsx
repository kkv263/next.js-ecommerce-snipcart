import styles from "../styles/Button.module.scss"
import Link from "next/link"
import Image from "next/image";
import { Roboto_Mono } from 'next/font/google';
 
const robotoMono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})


export default function Product({href, size, color, arrow, children}) {
  const buttonHTML = (<button className={`${styles.button_pushable} ${robotoMono.className} ${size === "large" ? styles.button_large : ''} ${color === "secondary" ? styles.button_secondary : ''} ${arrow === 'true' ? styles.button_arrow : ''}`} role="button" type="button">
    <span className={styles.button_edge}></span>
    <span className={styles.button_front}>
      {children}
      {arrow === 'true' ? <Image src="arrowright.svg" width={24} height={24} alt="right arrow icon" /> : ''}
    </span>
  </button>)

  return (
    <>
      {href ? <Link href={href}>
        {buttonHTML}
      </Link> : buttonHTML}
    </>


  );
}
