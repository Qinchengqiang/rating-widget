import React, {useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {RatingWidget} from './ratingWidget';

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

    const title_one = (<FormattedMessage id="mainRatingTitle1"/>);
    const title_two = (<FormattedMessage id="mainRatingTitle2"/>);
    const title_three = (<FormattedMessage id="mainRatingTitle3"/>);

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
                </div>
                <div>
                    <RatingWidget tittle={title_one} defaultStars={0}/>
                    <RatingWidget tittle={title_two} defaultStars={false}/>
                    <RatingWidget tittle={title_three} defaultStars={2}/>
                </div>
            </div>
        </IntlProvider>
    );
};

export default MainPage;