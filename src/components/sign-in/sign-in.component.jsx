import { useState } from 'react';

import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGooglePopup, CreateUserDocumentFromAuth } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',  
};

const SignIn = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await CreateUserDocumentFromAuth(user);
    }

    const handleSubmit = event => {
        event.prevntDefault()

        resetFormFields();
    }

    const handleChange = event => {
        const { name, value} = event.target;

        setFormFields( {[name]: value})
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your Email and Password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email' 
                    type="email" 
                    label="Email"
                    handleChange={handleChange} 
                    value={email} 
                    required 
                />
                
                <FormInput 
                    name='password' 
                    type="password" 
                    label="Password"
                    handleChange={handleChange}
                    value={password} 
                    required 
                />
                <div className='buttons-container'>
                    <CustomButton type="submit" > Sign In </CustomButton>
                    <CustomButton onClick={logGoogleUser} isGoogleSignIn> 
                        Sign In With Google 
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;