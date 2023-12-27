import React from 'react';

function Tags({ tags }) {
    return (
        <div className="tag">
            {tags.map(tag => (
                <div className="tag__content" key={tag}>{tag}</div>
            ))}
        </div>
    );
}

export default Tags;
