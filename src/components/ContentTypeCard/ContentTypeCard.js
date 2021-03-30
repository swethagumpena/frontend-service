/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContentTypeCard.module.css';

const ContentTypeCard = ({ typeName, fieldCount, handleClick }) => (
  <div
    className={styles.cardContainer}
    onClick={() => { handleClick(typeName); }}
  >
    <div className={styles.type}>{typeName}</div>
    <div className={styles.count}>{fieldCount}</div>
  </div>
);

ContentTypeCard.propTypes = {
  typeName: PropTypes.string.isRequired,
  fieldCount: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ContentTypeCard;
