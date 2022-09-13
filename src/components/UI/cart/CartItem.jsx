import React from "react";
import { ListGroupItem } from "reactstrap";

import "../../../styles/cart-item.css";

import { useDispatch } from "react-redux";
import { addCartItem } from "../../../store/Actions/Action";
import { deleteCartItem } from "../../../store/Actions/Action";
import { deleteItem } from "../../../store/Actions/Action";



const CartItem = ({ fetchdata }) => {
  const { id, title, price, image01, quantity } = fetchdata;

  const dispatch = useDispatch();

  const incrementItem = (item) => {
    dispatch(
    addCartItem(item)
    );
  };

  const decreaseItem = () => {
    // dispatch(cartActions.removeItem(id));
    dispatch((
      deleteCartItem(id)
    ))
  };

  const deleteCart = () => {
    // dispatch(cartActions.deleteItem(id));
    dispatch((
      deleteItem(id)
    ))
  };

  return (
    <ListGroupItem className="border-0 cart__item">
      <div className="cart__item-info d-flex gap-2">
        <img src={image01} alt="product-img" />

        <div className="cart__product-info w-100 d-flex align-items-center gap-4 justify-content-between">
          <div>
            <h6 className="cart__product-title">{title}</h6>
            <p className=" d-flex align-items-center gap-5 cart__product-price">
              {quantity}x <span>${price}</span>
            </p>
            <div className=" d-flex align-items-center justify-content-between increase__decrease-btn">
              <span className="increase__btn" onClick={(e) => incrementItem(fetchdata)}>
                <i class="ri-add-line"></i>
              </span>
              <span className="quantity">{quantity}</span>
              {quantity > 1 ? <span className="decrease__btn" onClick={decreaseItem}>
                <i class="ri-subtract-line"></i>
              </span> : <span className="decrease__btn" /> }
             
            </div>
          </div>

          <span className="delete__btn" onClick={deleteCart}>
            <i class="ri-close-line"></i>
          </span>
        </div>
      </div>
    </ListGroupItem>
  );
};

export default CartItem;