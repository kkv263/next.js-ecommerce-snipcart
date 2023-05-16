import Image from "next/image";
import Link from "next/link"
import styles from "../styles/Footer.module.scss"
import { Roboto_Mono } from 'next/font/google';
import { Roboto } from "next/font/google";
import { Titan_One } from "next/font/google";

const titanOne = Titan_One({
  weight: '400',
  subsets: ['latin'],
})
 
const robotoMono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})

const roboto = Roboto({ 
  weight: '700',
  subsets: ['latin'],
});


export default function Footer({}) {

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_left}>
          <h3 className={`${titanOne.className} ${styles.footer_headline}`}>MYCO&apos;S MARKET</h3>
          <ul className={styles.footer_list}>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact</li>
          </ul>
          <small>Myco&apos;s Market &copy;2023</small>
        </div>
        <div className={styles.footer_right}>
          <div className={robotoMono.className}v>Find Us At:</div>
          <ul className={styles.footer_socials}>
            <li className={styles.footer_socials_item}>
              <Link href="/"><Image src="instagram.svg" width={24} height={24} alt="instagram icon" /></Link>
            </li>
            <li className={styles.footer_socials_item}>
              <Link href="/"><Image src="twitter.svg" width={24} height={24} alt="twitter icon" /></Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
