/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './CollectionTypes.module.css';

const CollectionTypes = ({ handleClick, content }) => (
  <>
    <div>CollectionTypes</div>
    <ul role="menu">
      {content.map((collection) => (
        <li role="presentation" className={styles.link} onClick={() => handleClick(collection.typeName)}>
          <span>{collection.typeName}</span>
        </li>
      ))}
    </ul>
    <button type="button" onClick={() => handleClick('builder')}>CONTENT TYPE BUILDER</button>
  </>
);

export default CollectionTypes;
