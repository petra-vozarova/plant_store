import SignUp from "../../components/sign-up/sign-up.component"
import SignIn from "../../components/sign-in/sign-in.component"
import './authentication.styles.scss';

const Authentication = () => {
    return(
        <div className="authentication-container">
            <SignUp />
            <SignIn />           
        </div>

    )
}
export default Authentication