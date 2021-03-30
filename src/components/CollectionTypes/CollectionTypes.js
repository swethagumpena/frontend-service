import React from 'react';
import PropTypes from 'prop-types';
import styles from './CollectionTypes.module.css';

const CollectionTypes = ({ handleClick, content }) => (
  <div className={styles.CollectionTypesContainer}>
    <div className={styles.Collection}>COLLECTION TYPES</div>
    <ul role="menu">
      {content.map((collection) => (
        <li key={collection.typeName} role="presentation" className={styles.link} onClick={() => handleClick(collection.typeName)}>
          <span>{collection.typeName}</span>
        </li>
      )).reverse()}
    </ul>
    <button className={styles.builderBtn} type="button" onClick={() => handleClick('builder')}>CONTENT TYPE BUILDER</button>
  </div>
);

const contentShape = {
  id: PropTypes.number,
  typeName: PropTypes.string,
  instances: PropTypes.arrayOf(PropTypes.object),
  fields: PropTypes.arrayOf(PropTypes.string),
  updatedAt: PropTypes.string,
  createdAt: PropTypes.string,
};

CollectionTypes.propTypes = {
  handleClick: PropTypes.func.isRequired,
  content: PropTypes.arrayOf(PropTypes.shape(contentShape)).isRequired,
};

export default CollectionTypes;
