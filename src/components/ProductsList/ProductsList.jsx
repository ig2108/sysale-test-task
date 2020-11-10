import React from 'react';

import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductsList.module.css';

const ProductsList = ({products}) => {
  // console.log(products)
  return (
    <ul className={styles.productList}>
      {products.map(product =>(
        <li key={product.id} className={styles.productItem}>
          <ProductItem product={product}/>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;

