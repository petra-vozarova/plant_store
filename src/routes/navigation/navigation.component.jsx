import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { Fragment, useContext } from "react"
import {ReactComponent as PlantLogo} from '../../assets/plant-leaf-forest-foliage-ecology-svgrepo-com.svg';
import {ReactComponent as CartLogo} from '../../assets/cart1-svgrepo-com.svg';

import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss'


const Navigation = () => {
    const {cartOpen, setCartOpen, cartCount} = useContext(CartContext);
    const onClickHandler = () => {
        if(cartOpen){
            setCartOpen(false)
        }
        else{
            setCartOpen(true)
        }
    }
    const {user} = useContext(UserContext);
    console.log('navigation')
    console.log(user);
    const signOutHandler = async () =>{
        await signOutUser(user);
        console.log(user);
    }
    return (
        <Fragment>
            <div className='navigation-container'>
                
                <Link className='logo-container' to='/'>
                    <PlantLogo className="logo"/>
                </Link>
                <div className='nav-links'>
                    <Link className='nav-link' to='/shop'>SHOP</Link>
                    {
                        user ? 
                        <Link className='nav-link' onClick={signOutHandler}>SIGN OUT</Link>
                       : <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
                        
                    }               
                 <div className='cart-logo-container'onClick={onClickHandler}>
                    
                    <CartLogo className="cart-logo" />
                    <span className="cart-count">{cartCount} </span>

                </div> 
                </div>

                {
                    cartOpen && <CartDropdown />
                }
            </div>

            <Outlet />
        </Fragment>

    )
}

export default Navigation