import React, { useState } from 'react';
import './Spinner.css';

function Spinner() {
    const [rotation, setRotation] = useState(0);

    const handleSpinClick = () => {
        const randomRotation = Math.ceil(Math.random() * 3600); // Generate a random rotation value
        setRotation(rotation + randomRotation); // Update the rotation state
    };

    const wheelStyle = {
        transform: `rotate(${rotation}deg)`,
    };

    return (
        <>
        <div className="body">
            <div className="container">
                <div className="spinBtn" onClick={handleSpinClick}> Spin</div>
                <div className="wheel" style={wheelStyle}>
                    <div className="sips" style={{ '--i': 1, '--clr': '#3D465E' }}><span>Truth</span></div>
                    <div className="sips" style={{ '--i': 2, '--clr': '#a7c2d2' }}><span>Dare</span></div>
                    <div className="sips" style={{ '--i': 3, '--clr': '#3D465E' }}><span>Truth</span></div>
                    <div className="sips" style={{ '--i': 4, '--clr': '#a7c2d2' }}><span>Dare</span></div>
                    <div className="sips" style={{ '--i': 5, '--clr': '#3D465E' }}><span>Truth</span></div>
                    <div className="sips" style={{ '--i': 6, '--clr': '#a7c2d2' }}><span>Dare</span></div>
                    <div className="sips" style={{ '--i': 7, '--clr': '#3D465E' }}><span>Truth</span></div>
                    <div className="sips" style={{ '--i': 8, '--clr': '#a7c2d2' }}><span>Dare</span></div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Spinner;
