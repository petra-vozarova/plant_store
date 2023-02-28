import { useState } from "react"
import { SignAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils"
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
}

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields;

    const resetFormFields = () =>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            await(SignAuthUserWithEmailAndPassword(email, password))
        } catch(error){
            if(error.code === 'auth/user-not-found'){
                alert('User details not recognised')
            }
            if(error.code === 'auth/wrong-password'){
                alert('Incorrect Password');
            }
            console.log('error: ', error);
        }
        resetFormFields();
    }

    const changeHandler = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name] : value})
    }

    return(
        <div className="sign-in-container">
            <h2>Already have an account?</h2>
            <h3>Sign In</h3>
            <form className="sing-in-form" onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
                    type="email"
                    required
                    name="email"
                    value={email}
                    onChange={changeHandler}>
                </FormInput>

                <FormInput
                    label="Password"
                    type="password"
                    required
                    name="password"
                    value={password}
                    onChange={changeHandler}>                
                </FormInput>

                <Button type="submit">Sign In</Button>
            </form>                
        </div>
    )
}

export default SignIn