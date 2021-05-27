import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="bg-dark p-2 d-flex justify-content-between align-items-center">
            <h1 className="text-white">Fortnite</h1>
            <ul>
                <Link to="/uitems" className="btn"><li>Upcoming Items</li></Link>
                <Link to="/citems" className="btn"><li>Current Items</li></Link>
            </ul>
        </nav>
    )
}
export default Navbar;
