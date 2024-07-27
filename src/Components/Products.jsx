import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { add } from "../Redux/features/navbar/navbarSlice";
import { MdFavoriteBorder } from "react-icons/md";
import { addtofav } from "../Redux/features/navbar/navbarSlice";
import { useState } from "react";
import "../styles/Products.css";
import CoursesData from './CoursesData';
import HeroImg from "./hero.png";

import "../styles/Hero.css";
function Products() {

    const products = useSelector(state => state.productsReducer.value);

    const navigate = useNavigate();
    const [uu, setUu] = useState(true);
    const dispatch = useDispatch();
    function a(eachProduct) {



        dispatch(addtofav(eachProduct))

    }
    return (
        <>
          <div id="hero-container">
            <img src={HeroImg} alt="hero image" />
        </div>
    
            <h1>محصولات ما</h1>

            <div id="flex-container">
                {CoursesData.map((eachProduct, index, id) => {
                    return (
                        <div id="flex-item" key={index}>

                            <div id="product-head">
                                <img
                                    src={eachProduct.image}
                                >
                                </img>

                                <h2>{eachProduct.title}</h2>
                            </div>

                            <div id="product-info">
                                <h2>
                                    <span id="dolar-span">$</span>
                                    {eachProduct.price}
                                </h2>
                                <MdFavoriteBorder id="favorite" onClick={() => a(eachProduct)} />
                                < FiShoppingCart id="shopping-cart" onClick={() => dispatch(add(eachProduct))} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
};

export default Products;
