import React from 'react';

import styles from './ProductItem.module.css';
// import moduleName from '../../../src/images/shampoo.jpg '

const ProductItem = ({product}) => {
  const handleSubmit = () => {
    console.log("Submit!!!")
  }
  const { image, name, description, colors, price, sizes, quantity, isNew} = product;
  console.log(image);
  return (
  <>
  {isNew && (<div className={styles.productItem__new}>NEW</div>)}
  <img className={styles.productItem__image} src={image} alt={name}/>
  <div className={styles.productItem__icon}></div>
  <h2 className={styles.productItem__name}>{name}</h2>
  <p className={styles.productItem__description}>{description}</p>
  <p className={styles.productItem__price}>{price}</p>
  <form onSubmit={handleSubmit}>
    <label htmlFor="">
      <select name="colorSelect" id="">
        <option name='color' value='Цвет'>Цвет</option>
      {  
      colors.map(color => (
        <option key={color} name="color" value={color}>{color}</option>
      ))}
      </select>
    </label>
    {sizes.map(size => (
      <label key={size} htmlFor="">
        <input name="size" value={size} type="radio"/>
        {size}
      </label>
    ))}
    <label htmlFor="">
      {quantity}
      <input type="number" name="quantity" value={quantity}/>
    </label>
    <input type="submit" value="КУПИТЬ"/>
  </form>
  </>
  );
};

export default ProductItem;