import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => {
    return (  
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Product List</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/checkoutPage">Cart Data</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/reviewPage">Review Order</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
 
export default Header;