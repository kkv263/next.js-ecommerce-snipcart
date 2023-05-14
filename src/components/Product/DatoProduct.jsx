import styles from "../../styles/Product.module.scss";
import buttonStyles from '../../styles/Button.module.scss'
import { Image } from 'react-datocms';
import { Button } from '../Button';
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

export default function DatoProduct(product) {
  const { id, image, name, description, price } = product;

  return (
    <div key={id} className={styles.product}>
      <Image className={styles.product_img} data={image.responsiveImage} alt={image.alt} title={image.title} />
      <div className={styles.product_text}>
        <h3 className={`${styles.product_name} ${roboto.className}`}>{name}</h3>
        <p className={styles.product_desc}>{description}</p>
        <span className={styles.product_price}>${price}</span> 
      </div>
      <div className={styles.product_atc_container}>
        <button
          className={`snipcart-add-item ${styles.product_atc} ${buttonStyles.button_pushable} ${robotoMono.className}`}
          data-item-id={id}
          data-item-image={image.url}
          data-item-name={name}
          data-item-url="/"
          data-item-price={price}
        >
          <span className={buttonStyles.button_edge}></span>
          <span className={buttonStyles.button_front}>
            Add to Cart
            <img src={'/shoppingbag.svg'} alt={image.alt}  />
          </span>
        </button>
      </div>
    </div>
  );
}
