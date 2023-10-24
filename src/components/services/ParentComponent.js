import React from 'react';
import SquareComponent from './SquareComponent';
import './ParentComponent.css';

const imageData = [
    { imageUrl: '/images/services/abdo.png', caption: 'ابدومنوپلاستی', pageLink:"/abdo" },
    { imageUrl: '/images/services/arml.jpeg', caption: 'لیفت بازو و ران' },
    { imageUrl: '/images/services/bucc.jpeg', caption: 'جراحی بوکال فت' },
    { imageUrl: '/images/services/lipo.png', caption: 'لیپوساکشن(ماموپلاستی)' },
    { imageUrl: '/images/services/temp.jpeg', caption: 'لیفت ابرو  و شقیقه' },
    { imageUrl: '/images/services/mamo.jpeg', caption: 'ماموپلاستی(لیفت سینه)' },
    { imageUrl: '/images/services/fatt.png', caption: 'ترانسفر چربی صورتو سینه و باسن' },
    { imageUrl: '/images/services/face.png', caption: 'لیفت صورت و گردن' },
    { imageUrl: '/images/services/belo.jpeg', caption: 'بلفاروپلاستی' },
    { imageUrl: '/images/services/botox.jpeg', caption: 'تزریق فیلر و بوتاکس و زاویه سازی صورت' },
   
    // ... and so on until 12
];

const ParentComponent = () => {
    return (
        <div  className="grid-container"  style={{ gridRowGap: "5px", gridColumnGap: "2px", justifyItems: "center" }}>
            {imageData.map((data, index) => <SquareComponent pageLink="/abdo" key={index} imageUrl={data.imageUrl} caption={data.caption} />)}
        </div>
    );
}

export default ParentComponent;
