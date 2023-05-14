import { useState } from "react";
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
          <div>Find Us At:</div>
          <ul></ul>
        </div>
      </div>
    </footer>
  );
}
