import React from 'react';
import cover from '../image/cover.png';
import styles from './employee.module.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.screen}>
            <img src={cover} alt='working' />
            <div className={styles.absolut}>
                <NavLink to={'/login'}><h1>Click Here To Login</h1></NavLink>
            </div>
        </div>
    )
}

export default Home