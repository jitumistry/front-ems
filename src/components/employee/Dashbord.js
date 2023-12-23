import React from 'react';
import cover from '../image/cover.png';
import styles from './employee.module.css';


const Dashbord = () => {
  return (
    <>
      <div className={styles.cover}>
        <img src={cover} alt='working' />
        <div className={styles.full}>
          <h1>Employee Management System</h1>
        </div>
      </div>
    </>
  )
}

export default Dashbord