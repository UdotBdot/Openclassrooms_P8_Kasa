import React from 'react';
import Flat from '../../Datas/Flat.json';

function Title({ flatId }) {
  const flat = Flat.find(item => item.id === flatId);

  return (
    <div className="title">
      <h1 className="title__title">{flat.title}</h1>
      <div className="title__location">{flat.location}</div>
    </div>
  );
}

export default Title;
