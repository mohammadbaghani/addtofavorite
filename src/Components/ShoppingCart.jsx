import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FaTrashAlt } from "react-icons/fa";
import { add, remove, removeOne } from "../Redux/features/navbar/navbarSlice";
import { useNavigate } from "react-router-dom";
import { ImSad } from "react-icons/im";
import "../styles/ZeroProduct.css";
import "../styles/ShoppingCart.css";

function ShoppingCart() {
  const productsInShoppingCart = useSelector((state) => state.navbarReducer.value);


  function calculateTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < productsInShoppingCart.length; i++) {
      totalPrice += productsInShoppingCart[i].price * productsInShoppingCart[i].quantity;
    }
    return totalPrice;
  }

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const defaultStyle = {
    color: "#9d174d",
    cursor: "pointer"
  }

  const otherStyle = {
    color: "#dcd9d9",
    cursor: "default"
  }

  return (
    <>
      <h1 id="shopping-cart-heading">سبد خرید</h1>
      {calculateTotalPrice() === 0 ? (
        <div id="zero-product-container">
          <h4>سبد خرید شما خالی است !</h4>
          <ImSad id="sad-icon" />
        </div>
      ) : (
        <>
          {productsInShoppingCart.map((eachProduct, index) => (
            <div id="single-cart-container" key={index}>
              <img src={eachProduct.image} alt={"product image"} />

              <div id="details">
                <span id="brand">{eachProduct.brand}</span>
                <span id="title">{eachProduct.title}</span>
              </div>

              <div id="edit">
                <div id="minus" onClick={() => dispatch(removeOne(eachProduct.id))} style={eachProduct.quantity < 2 ? otherStyle : defaultStyle}>-</div>
                <div id="quantity">{eachProduct.quantity}</div>
                <div id="plus" onClick={() => dispatch(add(eachProduct))}>+</div>
              </div>

              <div id="price">
                <span id="tooman-span">هزار تومان</span>
                <span id="price-span">{eachProduct.price * eachProduct.quantity}</span>
                <span
                  id="trash-icon"
                  onClick={() => dispatch(remove(eachProduct.id))}
                >
                  <FaTrashAlt />
                </span>
              </div>

            </div>
          ))}

          <div id="total-price-div">
            <span id="left">مجموع قیمت ها</span>
            <span id="dolar">هزار تومان</span>
            <span id="right">{calculateTotalPrice()}</span>
          </div>
        </>
      )}
    </>
  );
}

export default ShoppingCart;
