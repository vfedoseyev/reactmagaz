import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from '../order/Order';
import './Header.css'
const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='summ'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
    </div>
  )
}

const showNothing = () => {
  return (
    <div className='empty-cart'>
      <h2>Товара нет</h2>
    </div>
  )
}

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false)
  return (
    <header>
      <FaShoppingCart className='cart-btn' onClick={() => setCartOpen(cartOpen = !cartOpen)} />
      {cartOpen  && (
        <div className='shop-cart'>
          {props.orders.length > 0 ?
            showOrders(props) : showNothing()}
        </div>
      )}
      <nav>
        <ul className='navbar'>
          <li>Главная</li>
          <li>Главная</li>
          <li>Главная</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
