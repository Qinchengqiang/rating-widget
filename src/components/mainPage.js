import React, {useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {RatingWidget, useRatingWidget} from './ratingWidget';

import {FormattedMessage, IntlProvider} from 'react-intl';

// locale files
import en_US from '../locales/en-US';
import zh_CN from '../locales/zh-CN';


const MainPage = () => {
    const [language, setLanguage] = useState(en_US);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    // set 3 rating widgets
    const title_one = (<FormattedMessage id="mainRatingTitle1"/>);
    const title_two = (<FormattedMessage id="mainRatingTitle2"/>);
    const title_three = (<FormattedMessage id="mainRatingTitle3"/>);

    const defaultStars_first = 0;
    const defaultStars_second = false;
    const defaultStars_third = 2;

    const [firstStars, setFirstStars] = useRatingWidget(defaultStars_first);
    const [secondStars, setSecondStars] = useRatingWidget(defaultStars_second);
    const [thirdStars, setThirdStars] = useRatingWidget(defaultStars_third);

    return (
        <IntlProvider messages={language} locale='en'>
            <div className='container d-flex justify-content-center flex-column'>
                <div>
                    <h3 className='m-3'>
                        <FormattedMessage id="mainTitle"/>
                    </h3>
                    <div>
                        <Button onClick={handleOpen}>
                            <FormattedMessage id="mainLanguage"/>
                        </Button>
                        <FormControl>
                            <Select
                                id="Language"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={language}
                                onChange={handleChange}
                            >
                                <MenuItem value={en_US}>English</MenuItem>
                                <MenuItem value={zh_CN}>中文</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className='mt-4'>
                        <h5><FormattedMessage id="mainResults"/></h5>
                        <p>{title_one} : {firstStars}</p>
                        <p>{title_two} : {secondStars}</p>
                        <p>{title_three} : {thirdStars}</p>
                    </div>
                </div>
                <div>
                    <RatingWidget tittle={title_one} defaultStars={0} setStars={setFirstStars}/>
                    <RatingWidget tittle={title_two} defaultStars={false} setStars={setSecondStars}/>
                    <RatingWidget tittle={title_three} defaultStars={2} setStars={setThirdStars}/>
                </div>
            </div>
        </IntlProvider>
    );
};

export default MainPage;