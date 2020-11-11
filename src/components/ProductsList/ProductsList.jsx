import React from 'react';

import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductsList.module.css';

const ProductsList = ({products, onSubmit}) => {
  return (
    <ul className={styles.productList}>
      {products.map(product =>(
        <li key={product.id} className={styles.productItem}>
          <ProductItem product={product} onSubmit={onSubmit}/>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;

