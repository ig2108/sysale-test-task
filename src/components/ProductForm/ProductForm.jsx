import React, {Component} from 'react';

import styles from './ProductForm.module.css';

export default class ProductForm extends Component {
  state = { 
    id: '',
    color: '', 
    price: '', 
    size: '', 
    quantity: 1,
  };

  handleClickColor = (e) => {
    const {id, price} = this.props.productInfo;
    const value = e.target.value;
    this.setState({
      color: value,
      id: id,
      price: price,
    });
  };

  handleClickSize = (e) => {
    const {id, price} = this.props.productInfo;
    const actionElement = e.currentTarget.firstChild;
    actionElement.checked = true;
    this.setState({
      size: actionElement.value,
      id: id,
      price: price,
    });
  };

  handleClickCounter = (e) => {
    const {id, price} = this.props.productInfo;
    this.setState({
      id: id,
      price: price,
    });
    const actionType = e.target.dataset.action;
    let currentQuantity = this.state.quantity;

    if (actionType === "decrement" && currentQuantity >=1) {
      currentQuantity -=1;
      e.currentTarget.children[1].textContent = currentQuantity;
      this.setState({
        quantity: currentQuantity,
      });
    } else if (actionType === "increment") {
      currentQuantity +=1;
      e.currentTarget.children[1].textContent = currentQuantity;
      this.setState({
        quantity: currentQuantity,
      });
    } else {
      return;
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {id, price} = this.props.productInfo;
    this.setState({
      id: id,
      price: price,
    });
    this.props.onSubmit(this.state);
    this.resetState();
  };

  resetState () {
    this.setState({
      id: '',
      color: '', 
      price: '', 
      size: '', 
      quantity: 1,
    });
  };

  render() {
    const {colors, sizes} = this.props.productInfo;
    const {id, color} = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>

      {/* =================== LABEL COLORS =================== */}
        <label htmlFor={"colorSelect-" + id} className={styles.form__color_label}>
          <select className={styles.form__color_selector} value={color} name="colorSelect" id={"colorSelect-" + id} onChange={this.handleClickColor}>
            <option className={styles.form__color_option} name="color" value="Цвет">Цвет</option>
            {colors.map(color => (
              <option key={color} name="color" value={color} className={styles.form__color_option}>{color}</option>
            ))}
          </select>
        </label>

        {/* =================== LABEL PRICE ===================*/}
        <p className={styles.form__price}>{this.props.productInfo.price} грн</p>

        {/* =================== LABEL SIZES ===================*/}
        {sizes.map(size => {
          if (size === 100) {
            return (
              <div key={size} className={styles.form__size} onClick={this.handleClickSize}>
                <input id={"size-"+ id + "-" + size} defaultChecked name="size" value={size} type="radio" className={styles.form__size_input}/>
                <lable htmlFor={"size-"+ id + "-" + size} className={styles.form__size_label}>
                  {size}
                </lable>
              </div>
          )} else {
              return (
              <div key={size} className={styles.form__size} onClick={this.handleClickSize}>
                <input id={"size-"+ id + "-" + size} name="size" value={size} type="radio" className={styles.form__size_input}/>
                <lable htmlFor={"size-"+ id + "-" + size} className={styles.form__size_label}>
                  {size}
                </lable>
              </div>
            )
          };
        })
        }

        {/* ================== LABEL QUANTITY ===================*/}
        <label htmlFor={"quantity" + id} className={styles.form__counter} onClick={this.handleClickCounter}>
          <button type="button" className={`${styles.form__button} ${styles.decrement}`} data-action="decrement">-</button>
          <p id={"quantity" + id} className={styles.form__quantity}>{this.props.productInfo.quantity}</p> 
          <button type="button" className={`${styles.form__button} ${styles.increment}`} data-action="increment">+</button>
        </label>

        {/* ================ SUBMIT ===================*/}
        <button type="submit" className={styles.form__submit}>купить</button>
      </form>
    );
  };
};