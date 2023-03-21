import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'; 
const CustomerData = () => {

    const customersData = JSON.parse(localStorage.getItem('customer'));
    const [customerData, setCustomerData] = useState(customersData || []);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [disableValue, setDisable] = useState(false);
    
    useEffect( () => {
        if(firstName === '' || lastName === '' || email === '' || phone === '') {
            setDisable(true);
        }else{
            setDisable(false);
        }
    }, [firstName, lastName, email, phone])

    // to save data
    const setCustomerDataList = () => {

        const data = {
            fname : firstName,
            lname : lastName,
            email : email,
            phone : phone
        }
        const dataSet = customerData !== null ? customerData : [];;
        dataSet.push(data);
        setCustomerData(dataSet);
        localStorage.setItem('customer', JSON.stringify(customerData))

    }
    
    return ( 
        <div>
            <form className="form-horizontal">
                <table className="table">
                    <thead>
                        <tr className="text-center"><th colSpan="2">Customer Form</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><label>First Name :</label></td>
                            <td><input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><label>Last Name :</label></td>
                            <td><input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><label>Phone :</label></td>
                            <td><input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><label>E-Mail :</label></td>
                            <td><input type="text" value={phone} onChange={(event) => setPhone(event.target.value)}/></td>
                        </tr>
                        <tr>
                            <td colSpan="2" className="text-center"><Link to="/reviewPage" state={{customerData : customerData}}> <button disabled={disableValue} onClick={() => setCustomerDataList()}>Submit</button></Link></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}
 
export default CustomerData;