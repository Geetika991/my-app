import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
const ProductListing = () => {

    const cartDataList = JSON.parse(localStorage.getItem('cart')) ;
    const [productList, setProductsList] = useState([]);
    const [cartData, setCartData] = useState(cartDataList || []);

    useEffect( () => {

            axios.get(`https://dummyjson.com/products`)
            .then((res) =>{
                const datas = res.data.products;
                setProductsList(datas);
                if(cartDataList.length > 0 ) {
                    const data = res.data.products.map((val) => {
                        cartDataList.map((val1) => {
                            if(val.id === val1.id) {
                                val.status = 1;
                                return val;
                            }
                        })
                    }) 
                }
            })
            .catch((err) => console.log("err", err))
    }, [])

   
    // click on Buy Button
    const buyProduct = (val) => {
        const item ={
            id : val.id,
            title : val.title,
            price : val.price
        }

        const data = cartData !== null ? cartData : [];
        data.push(item);
        setCartData(data);
        localStorage.setItem('cart', JSON.stringify(cartData))
    }

    return ( 
        <>
            <div className="container">
                <div className="container-fluid">
                    <Header></Header>
                    <table className="table table-striped">
                        <thead>
                            <tr className="text-center"><th colSpan="4">Product Listing</th></tr>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.length > 0 && productList.map((val, key) =>{
                                return (
                                    <tr key={key}>
                                        <td>{val.id}</td>
                                        <td>{val.title}</td>
                                        <td>{val.price}</td>
                                        <td><button disabled={val.status === 1} onClick={(e) =>  buyProduct(val, e)}>Buy{val.status}</button></td>
                                    </tr>
                                )}
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
 
export default ProductListing;