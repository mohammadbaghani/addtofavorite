import React from "react";
import { BsHandbag } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TbBrandHexo } from 'react-icons/tb';
import { MdFavoriteBorder } from "react-icons/md";
import "../styles/Navbar.css";

function Navbar() {

    const products = useSelector(state => state.navbarReducer.value);


    const favs = useSelector(state => state.navbarReducer.va);
    function numberOfProducts() {
        let number = 0;
        for (let i = 0; i < products.length; i++) {
            number += products[i].quantity;
        }
        return number;
    }
    function favo() {
        let f = 0;
        for (let i = 0; i < favs.length; i++) {
            f += favs[i].quantity;
        }
        return f;
    }
    const navigate = useNavigate();

    function firstpage() {
        navigate("/");
        window.scroll({ top: 0, behavior: 'smooth' });
    }

    function handleClickHandBag() {
        navigate("/shoppingCart");
        window.scroll({ top: 0, behavior: 'smooth' });
    }
    function gofav() {
        navigate("/favorites");
        window.scroll({ top: 0, behavior: 'smooth' });
    }
    return (
        <div id="navbar-container">
            <div id="icon" onClick={firstpage}>سوپرمارکت آنلاین</div>
            <BsHandbag id="hand-bag" onClick={handleClickHandBag} />
            <MdFavoriteBorder id="gofav" onClick={gofav} />
            <div id="number-of-favs">{favo()}</div>
            <div id="number-of-products">{numberOfProducts()}</div>
        </div>
    )
};

export default Navbar;
