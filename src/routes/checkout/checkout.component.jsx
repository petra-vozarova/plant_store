import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import CheckouItem from "../../components/checkout-item/checkout-item.component";

import './checkout.styles.scss';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    
    return (
        <div className="checkout-container">
            <div className="checkout-header-container">
                <p className="name-header">Name</p>
                <p className="description-header">Description</p>
                <p className="quantity-header">Quantity</p>
                <p className="price-header">Price</p>
                <p className="remove-header">Remove</p>
            </div>
            {
                cartItems.map((item) => 
                (<CheckouItem key={item.id} product={item} />
                ))

            }
            <span className="total-container">Total: £{total}</span>
        </div>
    )
}

export default Checkout