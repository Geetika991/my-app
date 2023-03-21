import React from 'react';
import Header from './Header';
const ReviewPage = () => {
    
    const customerDetails = JSON.parse(localStorage.getItem('customer'));
    const data = JSON.parse(localStorage.getItem('cart')) ;

    return (  
        <>
            <div className="container">
                <div className="container-fluid">
                    <Header></Header>
                    <table className="table">
                        <thead>
                            <tr className="text-center" ><th colSpan="3">Cart  Data List</th></tr>
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
                            )})}
                        </tbody>
                    </table>
                    <table className="table">
                        <thead>
                            <tr className="text-center"><th colSpan="3">Customer Data</th></tr>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customerDetails.length > 0 && customerDetails.map((val, key) => {
                                return(
                                        <tr key={key}>
                                            <td>{val.fname}</td>
                                            <td>{val.lname}</td>
                                            <td>{val.email}</td>
                                            <td>{val.phone}</td>

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
 
export default ReviewPage;