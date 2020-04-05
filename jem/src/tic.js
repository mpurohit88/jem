import React from 'react';

   export default function Square(value) {
    return (
      <button className="square" onClick={value.onClick}>
        {value}
      </button>
    );
     }