import styles from "../styles/Nav.module.scss"
import Link from "next/link"
import Button from './Button'
import { Roboto_Mono } from 'next/font/google';
 
const robotoMono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})


export default function Nav({}) {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.nav_logo}>MYCOS MARKET</div>
        <ul className={`${styles.nav_links} ${robotoMono.className}`}>
          <li className={styles.nav_link}><Link href="/blog">Blog</Link></li>
          <li className={styles.nav_link}>Contact</li>
          <li className={styles.nav_link_button}><Button href="/shop">Start Shopping</Button></li>
        </ul>
      </div>
    </nav>
  );
}
