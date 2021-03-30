/* eslint-disable react/prop-types */
import React from 'react';
import './InstanceCard.css';

const ValuesCard = ({ array }) => (
  <div className="values">
    {array.map((arr) => (
      <div key={arr}>
        {' '}
        {arr}
      </div>
    ))}
  </div>
);
export default ValuesCard;
