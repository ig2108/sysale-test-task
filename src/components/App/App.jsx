import React, {Component} from 'react';

import productsFromJson from '../../products.json';
import ProductsList from '../ProductsList/ProductsList';
import styles from './App.module.css';

export default class App extends Component {
  state = { 
    products: productsFromJson,
    choosenBuyProductParams: {
      id: '',
      color: '',
      price: '',
      size: ''
    },
   };

   handleSubmit = (obj) => {
    this.setState({
      choosenBuyProductParams: {
        id: obj.id,
        color: obj.color,
        price: obj.price,
        size: obj.size,
      },
    });
  };
  

  render() {
    const {products} = this.state;
    return (
      <div className={styles.container}>
        <ProductsList products={products} onSubmit={this.handleSubmit}/>
      </div>
    );
  };
};