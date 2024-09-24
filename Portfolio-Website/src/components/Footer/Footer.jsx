import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footer}>
        <div>Copyright © {new Date().getFullYear()} All rights reserved</div>
        <div>Made with ❤️ by <a className={styles.nameLink} href="https://www.linkedin.com/in/jayzelle-dan-tuquilar-gangey-7a216232b/" target="_blank" rel="noopener noreferrer">
            Jayzelle Dan
        </a></div>
    </footer>
);

export default Footer;

/*
<div>
    Give this website a <a style={{ textDecoration: 'none' }} href="https://github.com/HalimawMamulutan" target="_blank" rel="noopener noreferrer">
        ⭐ <span style={{ color: 'white' }}>on</span> GitHub
    </a>
</div>
*/
