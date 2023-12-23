import React from 'react';
import cover from '../image/cover.png';
import style from './admin.module.css';
import './admin.css'

const Dash = () => {
  return (
    <>
      <div className={style.cover}>
        <img src={cover} alt='working' />
        <div className={style.full}>
          <h1>Employee Management System</h1>
        </div>
      </div>
    </>
  )
}

export default Dash