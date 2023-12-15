import React from 'react'
import Flat from '../../Datas/Flat.json';

function Host({ flatId }) {
    const flat = Flat.find(item => item.id === flatId);
  return (
    <div className="host">
        <div className="host__name">{flat.host.name}</div>
        <img className="host__img" src={flat.host.picture} alt="Kasa Host"></img>
    </div>
  )
}

export default Host