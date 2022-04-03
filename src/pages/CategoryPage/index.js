import React from 'react'
import { Link } from "react-router-dom";
import { menus } from '../../dummyData/menus';
import './categoryPage.css';

const CategoryPage = () => {
    return (
        <div>
            <h1>Category Page</h1>
            <div className="menuWrapper">
                {
                    menus.map(menu => (
                        <Link className='menu-link' key={menu.id} to={`/menu/${menu.urlKey}`}>
                            <div className="imageWrapper">
                                <img src={menu.image} alt={menu.name} />
                            </div>
                            <p>{menu.name}</p>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryPage