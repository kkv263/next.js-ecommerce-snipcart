import styles from "../styles/Benefits.module.scss"
import Link from "next/link"
import Image from "next/image";
import Button from './Button'
import { Roboto_Mono } from 'next/font/google';
import { Roboto } from "next/font/google";
 
const robotoMono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})

const roboto = Roboto({ 
  weight: '700',
  subsets: ['latin'],
});

export default function Benefits({}) {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={`${styles.benefits_headline} ${roboto.className}`}>Reap Natural Benefits</h2>
        <p className={styles.benefits_subheadline}>See how mushrooms<br></br> affect your body positively. </p>
        <div className={styles.benefits_img_wrapper}>
          <Image src="/mushroomgroup.png" width={480} height={480} alt="maitake"></Image>
        </div>
        <Button color="secondary" href="/blog" arrow="true">Learn More</Button>
      </div>
    </section>
  );
}
