// src/components/DoctorImage.js

import React, { useState } from 'react';
import './DoctorImage.css';
import { Link } from 'react-router-dom';

const DoctorImage = () => {
    

    return (
        <div className="doctor-image">
            <img src="/images/doctor.jpg" alt="Doctor's Portrait" className="doctor-image__photo" />
            <Link className='info-button' to="/about"><span>more info</span></Link>
        </div>
    );
}

export default DoctorImage;
