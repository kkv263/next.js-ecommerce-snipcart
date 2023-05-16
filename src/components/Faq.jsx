import { useState } from "react";
import styles from "../styles/Faq.module.scss"
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


export default function Faq({faq}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    if (index === activeIndex) { return; }
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const { faqBlock } = faq

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.faq_eyebrow}>FAQs</div>
        <h2 className={`${styles.faq_headline} ${roboto.className}`}>Frequently Asked Questions</h2>
        <ul className={styles.faq_list}>
          {faqBlock.map((item,index) => (
            <li onClick={() => handleClick(index)} key={index} className={styles.faq_list_item}>
              <button className={`${roboto.className} ${styles.faq_list_button}`} type="button" aria-expanded={index === activeIndex} aria-controls={"accordion-" + index} id={"accordion1" + index}>{item.faqTitle}</button>
              <div id={"accordion-" + index} role="region" aria-labelledby={"accordion" + index} className={`${robotoMono.className} ${styles.faq_list_panel}`} >{item.faqContent}</div>
            </li>
          ))}
          </ul>
      </div>
    </section>
  );
}
