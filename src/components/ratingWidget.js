import React, {useState} from 'react';

import '../asset/style/ratingWidget.css';

export const RatingWidget = ({tittle}) => {
    return (
        <div>
            
        </div>
    );
};


export function useRWidget() {
    // state of the rating widget
    const [growlActive, setGrowlActive] = useState(false)

    return [
        // the first arg is the state
        growlActive,

        // the second arg is a fn that allows you to safely set its state
        (active) => {
            setGrowlActive(active);
        },
    ]
}