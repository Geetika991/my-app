import React from 'react';
import {Routes, Route} from 'react-router-dom';
import ProductListing from './Components/productListing';
import CheckoutPage from './Components/checkoutPage';
import ReviewPage from './Components/reviewPage';
const Main = () => {
    return ( 
        <div>
            <Routes>
                <Route path="/" element={<ProductListing></ProductListing>}></Route>
                <Route path="/checkoutPage" element={<CheckoutPage></CheckoutPage>}></Route>
                <Route path="/reviewPage" element={<ReviewPage></ReviewPage>}></Route>
            </Routes>
        </div>
     );
}
 
export default Main;