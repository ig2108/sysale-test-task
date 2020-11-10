import React, {Component} from 'react';

import productsFromJson from '../../products.json';
import ProductsList from '../ProductsList/ProductsList';
import styles from './App.module.css';

export default class App extends Component {
  state = { 
    products: productsFromJson,
   };



  render() {
    const {products} = this.state;
    // console.log(products);
    return (
      <div className={styles.container}>
        <ProductsList products={products}/>
      </div>
    );
  };
};