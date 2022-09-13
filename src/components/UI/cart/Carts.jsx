import React from "react";

import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import "../../../styles/shopping-cart.css";

import { useDispatch, useSelector } from "react-redux";
import { cardShow } from "../../../store/Actions/Action";

const Carts = () => {
  const dispatch = useDispatch();
  const cartIsVisible = useSelector((state) => state.custom);
  const { cartItems } = useSelector((state) => state.custom);
  const { totalAmount } = useSelector((state) => state.custom);

  const toggleCart = () => {
    dispatch(cardShow(cartIsVisible));
  };

  return (
    <div className="cart__container">
      <ListGroup className="cart">
        <div className="cart__close">
          <span onClick={toggleCart}>
            <i class="ri-close-fill"></i>
          </span>
        </div>

        <div className="cart__item-list">
          {cartItems.length === 0 ? (
            <h6 className="text-center mt-5">No item added to the cart</h6>
          ) : (
            cartItems.map((fetchdata, index) => (
              <CartItem fetchdata={fetchdata} key={index} />
            ))
          )}
        </div>

        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>${totalAmount}</span>
          </h6>

          <button onClick={toggleCart}>Checkout</button>
        </div>
      </ListGroup>
    </div>
  );
};

export default Carts;
