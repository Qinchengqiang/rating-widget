import React from 'react';
import { RatingWidget } from './ratingWidget';

const MainPage = () => {
    return (
        <div className='container d-flex justify-content-center flex-column'>
            <div>
                <h3 className='m-3'>Rating Widget Demo</h3>
            </div>
            <div>
                <RatingWidget tittle='Rating Widget 1' defaultStars={0}/>
                <RatingWidget tittle='Rating Widget 2' defaultStars={false}/>
                <RatingWidget tittle='Rating Widget 3' defaultStars={2}/>
            </div>
        </div>
    );
};

export default MainPage;