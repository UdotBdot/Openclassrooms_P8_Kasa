import React from 'react';

function Host({ host }) {
    return (
        <div className="host">
            <div className="host__name">{host.name}</div>
            <img className="host__img" src={host.picture} alt="Kasa Host" />
        </div>
    );
}

export default Host;
