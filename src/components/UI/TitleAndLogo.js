// src/components/TitleAndLogo.js

import React from 'react';
import DoctorImage from './DoctorImage';
import './TitleAndLogo.css';

const TitleAndLogo = () => {
    return (
        <div className="title-logo-container">
            <div className="title-logo">
                
                <h1 className="title-logo__text"> کلینیک جراحی دکتر طالب زاده - مشهد</h1>
            </div>
            <DoctorImage />
        </div>
    );
}

export default TitleAndLogo;
