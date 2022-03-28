import React from 'react';

import './custom-button.styles.scss';

const BUTTON_TYPES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const CustomButton = ({children, buttonType,  ...otherProps}) => (
    <button 
        className={`${BUTTON_TYPES[buttonType]} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
)

export default CustomButton;

