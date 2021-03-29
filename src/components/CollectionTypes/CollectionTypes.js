/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './CollectionTypes.module.css';

const CollectionTypes = ({ handleClick, content }) => (
  <div className={styles.CollectionTypesContainer}>
    <p className={styles.Collection}>CollectionTypes</p>
    <ul role="menu">
      {content.map((collection) => (
        <li role="presentation" className={styles.link} onClick={() => handleClick(collection.typeName)}>
          <span>{collection.typeName}</span>
        </li>
      )).reverse()}
    </ul>
    <button type="button" onClick={() => handleClick('builder')}>CONTENT TYPE BUILDER</button>
  </div>
);

export default CollectionTypes;
