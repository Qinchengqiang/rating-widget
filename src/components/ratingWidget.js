import React, {useEffect, useState} from 'react';
import '../asset/style/ratingWidget.css';
import {FormattedMessage} from "react-intl";

export const RatingWidget = ({tittle, defaultStars, setStars}) => {
    const [activeStars, setActiveStars] = useState(0);
    const [onMouseStar, setOnMouseStar] = useState(0);
    const [choose, setChoose] = useState(false);

    const setSelect = (value) => {
        if (!choose) {
            setActiveStars(value);
            setStars(value);
            setChoose(true);
        }
        if (choose) {
            setActiveStars(value);
            setStars(value);
        }
    }

    useEffect(() => {
        if (defaultStars && !choose) {
            setActiveStars(defaultStars);
            setStars(defaultStars);
            setChoose(true);
        }
    // eslint-disable-next-line
    }, [defaultStars])

    return (
        <>
            <div className='widget mt-5'>
                <h2>{tittle}</h2>
                <div className='star'>
                    {[1, 2, 3, 4, 5].map((val) => (
                        <button type='button' className={`btn p-0 m-0 star-color`}
                                onMouseEnter={() => setOnMouseStar(val)}
                                onMouseLeave={() => setOnMouseStar(0)}
                                onClick={() => setSelect(val)}
                                key={val.toString()}>
                        <span className={`star-logo star-color
                                    ${onMouseStar >= val ? " first-star-active" : ""}
                                    ${choose && activeStars >= val ? " first-star-active" : ""}`}>
                            <i className="fa fa-star"/>
                        </span>
                        </button>)
                    )}
                </div>
                {defaultStars ? <div className='m-2'>
                    <h6 className='text-secondary'>
                        <FormattedMessage id="ratingDefaultStart"/>
                        {defaultStars}
                        <FormattedMessage id="ratingDefaultEnd"/>
                    </h6>
                </div> : <></>}

            </div>
            <div className='textBox p-3 m-2'>
                {choose ?
                    <h5 className='text-success'>
                        <span className='check-logo'>
                            <i className="fa fa-check-circle"/>
                        </span>
                        <FormattedMessage id="ratingCheckStart"/>
                        {activeStars}
                        <FormattedMessage id="ratingCheckEnd"/>
                    </h5> :
                    <h5 className='text-warning'>
                        <span className='warn-logo'>
                            <i className="fa fa-exclamation-circle"/>
                        </span>
                        <FormattedMessage id="ratingWarn"/>
                    </h5>
                }
            </div>
        </>
    );
};

export function useRatingWidget() {
    const [stars, setStars] = React.useState(0)

    return [
        // the first arg is the state
        stars,

        // the second arg is a fn that allows you to safely set its state
        (chooseStar) => {
            setStars(chooseStar);
        },
    ]
}