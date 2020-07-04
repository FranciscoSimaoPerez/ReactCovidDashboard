import React from 'react';
import PropTypes from 'prop-types';
import NavbarOption from './NavbarOption';

import styles from './styles.js';

const Navbar = ({ options }) => (
    <div className={styles.navbarContainer}>
        <NavbarOption link="/">Home</NavbarOption>
        {
            options.map((option) => (
                <NavbarOption link={option.link}>{option.name}</NavbarOption>
            ))
        }
    </div>
);

export default Navbar;

Navbar.propTypes = {
    options: PropTypes.arrayOf({
        name: PropTypes.string,
        link: PropTypes.string,
    }),
};

Navbar.defaultProps = {
    options: [],
};
