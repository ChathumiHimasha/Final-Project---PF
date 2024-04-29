import React, { useState } from 'react';
import ProductData from './productData';
import { IoIosCloseCircle } from "react-icons/io";
import './style.css';
import Nav from './nav';

const Product = () => {
    const [detail, setDetail] = useState([]);
    const [close, setClose] = useState(false);

    const detailPage = (product) => {
        setDetail([{ ...product }]);
        setClose(true);
    };

    return (
        <>
            <Nav /> 
            {close ? (
                <div className='detail_container'>
                    <div className='detail_contant'>
                        <button className='close' onClick={() => setClose(false)}>
                            <IoIosCloseCircle/>
                        </button>
                        {detail.map((x) => (
                            <div className='detail_info' key={x.id}>
                                <div className='img-box'>
                                    <img src={x.img} alt={x.Title} />
                                </div>
                                <div className='product_detail'>
                                    <h2>{x.Title}</h2>
                                    <h3>$ {x.Price}</h3>
                                    <p>{x.Des}</p>
                                    <button>Add To Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}

            <div className='container'>
                {ProductData.map((curElm) => (
                    <div className='box' key={curElm.id}>
                        <div className='contant'>
                            <div className='img-box'>
                                <img src={curElm.img} alt={curElm.Title} />
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                    <h3>{curElm.Title}</h3>
                                    <p>$ {curElm.Price}</p>
                                </div>
                                <button onClick={() => detailPage(curElm)}>View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Product;
