import React from 'react';

function Title({ title, location }) {
    return (
        <div className="title">
            <h1 className="title__title">{title}</h1>
            <div className="title__location">{location}</div>
        </div>
    );
}

export default Title;
