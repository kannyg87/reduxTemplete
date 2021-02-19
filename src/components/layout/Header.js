import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="#">Navbar</Link>&nbsp;&nbsp;
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <Link className="nav-Link" to="/">Home <span className="sr-only">(current)</span></Link>&nbsp;&nbsp;
            </li>
            <li className="nav-item">
                <Link className="nav-Link" to="/hooks">Hooks</Link>&nbsp;&nbsp;
            </li>
            <li className="nav-item">
                <Link className="nav-Link" to="/class">Classes</Link>&nbsp;&nbsp;
            </li>
        </ul>
    </div>
    </nav>
        </>
    )
}

export default Header
