/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ContentTypeCard.module.css';

const ContentTypeCard = ({ typeName, fieldCount }) => (
  <div className={styles.cardContainer} onClick={() => console.log('Hello from here', fieldCount)}>
    <div>{typeName}</div>
    <div>{fieldCount}</div>
  </div>
);

export default ContentTypeCard;
