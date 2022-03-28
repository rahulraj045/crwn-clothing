import { useState } from 'react';

import FormInput from '../../components/form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../firebase/firebase.utils';

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
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {

            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch(error) {

            switch(error.code) {

                case "auth/wrong-password":
                    alert("Incorrect password for Email");
                    break;
                case "auth/user-not-found":
                    alert("User not found, Check your email");
                    break;
                default:
                    console.log(error);
            }
        }   
    };

    const handleChange = async (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    };

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your Email and Password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email' 
                    type="email" 
                    label="Email"
                    onChange={handleChange} 
                    value={email} 
                    required 
                />
                
                <FormInput 
                    name='password' 
                    type="password" 
                    label="Password"
                    onChange={handleChange}
                    value={password} 
                    required 
                />
                <div className='buttons-container'>
                    <CustomButton type="submit" > Sign In </CustomButton>
                    <CustomButton type="button" onClick={logGoogleUser} buttonType='google'> 
                        Sign In With Google 
                    </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;