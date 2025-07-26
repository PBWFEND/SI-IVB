// src/components/Card.jsx
import React from 'react';
import './Card.css';

function Card({ children }) { // Perbaikan: gunakan 'children' dengan huruf kecil
    return (
        <div className="card-wrapper">
            {children} {/* Perbaikan: render children */}
        </div>
    );
}
export default Card;