import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <div className='navWrapper'>
            <Link to="/">GA/GTM</Link>
            <div>
                <Link to="/category-page">Category</Link>
            </div>
        </div>
    )
}

export default Navbar