import React from 'react';
import Flat from '../../Datas/Flat.json';

function Tags({ flatId }) {
  const flat = Flat.find(item => item.id === flatId);

  return (
    <div className="tag">
    {flat.tags.map(tag => (
      <div className="tag__content" key={tag}>{tag}</div>
    ))}
  </div>
  );
}

export default Tags;
