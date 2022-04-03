import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { menus } from '../../dummyData/menus';
import './menuDetailPage.css';

const MenuDetailPage = () => {
    const { urlKey } = useParams();
    const [detailData, setDetailData] = useState([]);

    useEffect(() => {
        const filteredData = menus.filter(menu => menu.urlKey === urlKey);
        setDetailData(filteredData);
    }, [urlKey]);
    
    return (
        <div>
            <h1>Detail Page</h1>
            {
                detailData && detailData.length > 0 ? (
                    <div>
                        {
                            detailData.map(menu => (
                                <div key={menu.urlKey}>
                                    <div className='detailImageWrapper'>
                                        <img src={menu.image} alt={menu.name} />
                                    </div>
                                    <div>
                                        <div>
                                            <p>{menu.name}</p>
                                            <p>{menu.price}</p>
                                        </div>
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p>loading</p>
                )
            }
        </div>
    )
}

export default MenuDetailPage