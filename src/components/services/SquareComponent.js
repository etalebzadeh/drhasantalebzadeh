import React from 'react';
import './SquareComponent.css';
import { Link } from 'react-router-dom';

const SquareComponent = ({ caption, imageUrl, pageLink }) => {
    return (
        <Link to={pageLink} className="square">
            <img src={imageUrl} alt={caption} className="square-image" />
            <p className="square-caption">{caption}</p>
        </Link>
    );
}

export default SquareComponent;
