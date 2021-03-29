/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const CollectionTypes = ({ handleClick, content }) => (
  <>
    <div>CollectionTypes</div>
    <ul>
      {content.map((collection) => (
        <li role="presentation" onClick={() => handleClick(collection.typeName)}>
          {collection.typeName}
        </li>
      ))}
    </ul>
    <button type="button" onClick={() => handleClick('builder')}>CONTENT TYPE BUILDER</button>
  </>
);

export default CollectionTypes;
