import React from 'react';
import PropTypes from 'prop-types'; 
import {Link} from 'react-router-dom';

const Navbar = ({icon, title}) => {
    return (
        <nav className = 'navbar bg-primary'>
            <h1>
                <i className = {icon} /> {title}
            </h1>

            <ul> 
                <li><Link to ='/'>Homies</Link></li>
                <li><Link to = '/about'>About</Link></li>
            </ul>
        </nav>
    ) 
}

Navbar.defaultProps = {
    title: 'Github Finder',     //this will be overwritten by the props passed from app.js
    icon: 'fab fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,         //this makes the value for title to always be string and title cannot be undefined
    icon: PropTypes.string.isRequired
};
export default Navbar
