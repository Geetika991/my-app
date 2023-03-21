import React from 'react';
import Header from './Header';
import CustomerData from './customerData';

const CheckoutPage = () => {
    const data = JSON.parse(localStorage.getItem('cart')) ;
    return (
        
        <>
        <div className="container">
            <div className="container-fluid">
                <Header></Header>
                <table  className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.length > 0 && data.map((val, key) => {
                            return(
                                    <tr key={key}>
                                        <td>{val.id}</td>
                                        <td>{val.title}</td>
                                        <td>{val.price}</td>
                                    </tr>
                            )}
                        )}
                    </tbody>
                </table>
                <CustomerData></CustomerData>
            </div>            
        </div>
        </>

    );
}
 
export default CheckoutPage;