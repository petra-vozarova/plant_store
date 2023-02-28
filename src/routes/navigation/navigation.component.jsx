import { useSelector, useDispatch  } from "react-redux";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Fragment} from "react";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

import {ReactComponent as PlantLogo} from '../../assets/plant-leaf-forest-foliage-ecology-svgrepo-com.svg';
import {ReactComponent as CartLogo} from '../../assets/cart1-svgrepo-com.svg';
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import './navigation.styles.scss';

const Navigation = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser)
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)

    const onClickHandler = () => {
      dispatch(setIsCartOpen(!isCartOpen));
    }

    const signOutHandler = async () =>{
        await signOutUser(currentUser);
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
                        currentUser ? 
                        <Link className='nav-link' onClick={signOutHandler}>SIGN OUT</Link>
                       : <Link className='nav-link' to='/sign-in'>SIGN IN</Link>
                        
                    }               
                    <div className='cart-logo-container'onClick={onClickHandler}>
                        <CartLogo className="cart-logo" />
                        <span className="cart-count">{cartCount}</span>
                    </div> 
                </div>
                {
                    isCartOpen && <CartDropdown />
                }
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation