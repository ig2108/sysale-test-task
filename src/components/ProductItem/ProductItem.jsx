import React from 'react';

import ProductForm from '../ProductForm/ProductForm';
import styles from './ProductItem.module.css';

const ProductItem = ({product, onSubmit}) => {
  const { image, name, description, isNew} = product;
  return (
  <>
    {isNew ? (
      <div className={styles.productItem__new}>new</div>
    ) : (
      <div className={`${styles.productItem__new} ${styles.makeTransparent}`}>new</div>
    )}
    <div className={styles.productItem__image_wrap}>
      <img className={styles.productItem__image} src={image} alt={name}/>
    </div>
    <div className={styles.productItem__icon_wraper}>
      <span className={styles.productItem__icon}></span>
    </div>
    <h2 className={styles.productItem__name}>{name}</h2>
    <p className={styles.productItem__description}>{description}</p>
    <ProductForm productInfo={product} onSubmit={onSubmit}/>
  </>
  );
};

export default ProductItem;