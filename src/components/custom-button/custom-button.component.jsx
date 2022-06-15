import { BaseButton, GoogleSignInButton, InvertedButton } from "./custom-button.styles";

export const BUTTON_TYPES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
};

const getButton = (buttonType = BUTTON_TYPES.base) => (
    {
        [BUTTON_TYPES.base]: BaseButton,
        [BUTTON_TYPES.google]: GoogleSignInButton,
        [BUTTON_TYPES.inverted]: InvertedButton,
    }[buttonType]
);

const CustomButton = ({children, buttonType,  ...otherProps}) => {
    const ChangeButton = getButton(buttonType);
    
    return (
        <ChangeButton {...otherProps}>
            {children}
        </ChangeButton>
    )
    
};

export default CustomButton;

