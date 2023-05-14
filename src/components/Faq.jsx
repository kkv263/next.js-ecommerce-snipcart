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


export default function Faq({}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    if (index === activeIndex) { return; }
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const faqItems = [
    {
      question: 'What is your refund policy?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex molestie, feugiat sem eu, venenatis dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex molestie, feugiat sem eu, venenatis dui.'
    },
    {
      question: 'How long does it take to ship an item to my house?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex molestie, feugiat sem eu, venenatis dui.'
    },
    {
      question: 'Does Mycos only sell in bundles?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex molestie, feugiat sem eu, venenatis dui.'
    },
    {
      question: 'Does Myco sell a specific type of mushroom?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex molestie, feugiat sem eu, venenatis dui.'
    },
    {
      question: 'What sort of payment do you accept?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex molestie, feugiat sem eu, venenatis dui.'
    },
  ];


  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <div className={styles.faq_eyebrow}>FAQs</div>
        <h2 className={styles.faq_headline}>Frequently Asked Questions</h2>
        <ul className={styles.faq_list}>
          {faqItems.map((item,index) => (
            <li onClick={() => handleClick(index)} key={index} className={styles.faq_list_item}>
              <button className={`${roboto.className} ${styles.faq_list_button}`} type="button" aria-expanded={index === activeIndex} aria-controls={"accordion-" + index} id={"accordion1" + index}>{item.question}</button>
              <div id={"accordion-" + index} role="region" aria-labelledby={"accordion" + index} className={`${robotoMono.className} ${styles.faq_list_panel}`} >{item.answer}</div>
            </li>
          ))}
          </ul>
      </div>
    </section>
  );
}
