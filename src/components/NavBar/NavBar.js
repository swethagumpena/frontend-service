/* eslint-disable react/prop-types */
import React from 'react';
import styles from './NavBar.module.css';

const NavBar = ({ header }) => (
  <div className={styles.NavContainer}>
    <div className={styles.AppNameContainer}>
      <p className={styles.AppName}>CMS+</p>
    </div>
    <div className={styles.TitleContainer}>
      <p className={styles.Title}>{header}</p>
    </div>
  </div>
);

export default NavBar;
