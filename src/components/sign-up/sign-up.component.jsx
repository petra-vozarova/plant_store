import { useState } from "react";

import { CreateAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGoogle } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-up.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUp = () =>{
    var labelClass;
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password, confirmPassword} = formFields;
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
        labelClass = 'shrink'
    }

    const googleSignInHandler = async() => {
        await signInWithGoogle();
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        if(password == confirmPassword){
            try{
                const {user} = await CreateAuthUserWithEmailAndPassword(email, password)
                await createUserDocumentFromAuth(user);      
            }catch(error){
                if(error.code === 'auth/email-already-in-use'){
                    alert('Email is already in use');
                }
                else{
                    console.log('error ', error);
                }
            }
        }
        else{
            alert('Password does not match');
        }

        resetFormFields();
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account yet?</h2>
            <h3>Sign Up</h3>
            <form className="sign-up-form" onSubmit={submitHandler}>
            
                <FormInput    
                    label="Email"
                    type="email"
                    required
                    value={email}
                    name="email"
                    onChange={handleChange}>
                </FormInput>
   
                <FormInput
                    label="Password"
                    type="password"
                    required
                    value={password}
                    name="password"
                    onChange={handleChange}>
                </FormInput>

                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    value={confirmPassword}
                    name="confirmPassword"
                    onChange={handleChange}>
                </FormInput>

                <div className="buttons-container">
                    <Button type="submit">Sign Up</Button>
                    <Button onClick={googleSignInHandler}>Sign In With Google</Button>
                </div>          

            </form>
        </div>
    )
}

export default SignUp