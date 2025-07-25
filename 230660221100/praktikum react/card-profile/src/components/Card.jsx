import React from 'react';
import './Card.css';

function Card({ Children }) {
    return (
        <div className="card-wrapper">
            {Children}
        </div>
    );
}
export default Card;
