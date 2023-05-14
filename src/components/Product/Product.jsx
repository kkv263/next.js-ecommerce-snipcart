import styles from "../../styles/Product.module.scss";
import Image from "next/image";

export default function Product(props) {
  const { id, imageUrl, name, description, price } = props;

  return (
    <div key={id} className={styles.product}>
      <Image src={imageUrl} alt={`Image of ${name}`} height={640} width={640} />
      <h3 className={styles.product_name}>{name}</h3>
      <p className={styles.product_desc}>{description}</p>
      <span>${price}</span>
      <div>
        <button
          className="snipcart-add-item"
          data-item-id={id}
          data-item-image={imageUrl}
          data-item-name={name}
          data-item-url="/"
          data-item-price={price}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
