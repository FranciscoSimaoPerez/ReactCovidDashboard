import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.js';

const NavbarOption = ({ link, children }) => (
    <a style={styles.navbarOption} href={link}>
        {children}
    </a>
);

export default NavbarOption;

NavbarOption.propTypes = {
    link: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};
