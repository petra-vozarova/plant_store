import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectCartItems } from '../../store/cart/cart.selector';
import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const navigate = useNavigate();
    const cartItems = useSelector(selectCartItems);
    const onClickHandler = () => navigate('/checkout')
    
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items-container'>
                {cartItems.length ? (
                    cartItems.map((item) => 
                        <CartItem key={item.id} item={item} />
                    )): (
                    <p className='empty-cart-message'>Cart is empty</p> 
                    )
                }
            </div>
            <Button onClick={onClickHandler}>Check Out</Button>
        </div>
    )
}

export default CartDropdown