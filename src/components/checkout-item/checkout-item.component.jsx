import { CartContext } from '../../context/cart.context';

import { useContext } from 'react';
import './checkout-item.styles.scss'

const CheckouItem = ({product}) => {
    const {addItem, removeItem, deleteItem} = useContext(CartContext);
    const{name, price, quantity, imageUrl} = product;
    console.log(product);
    const deleteHandler = () => {
        deleteItem(product);
    }
    const removeHandler = () => {
        removeItem(product)
    }
    const addHandler = () => {
        addItem(product)
    }


    return ( 
        <div className="checkout-item-container">
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>

            <div className='checkout-item-details'>
                <p className='name'>{name}</p>
                <div className='quantity-checkout-container'>
                    <span onClick={removeHandler}>-</span>
                    <p className='quantity'>{quantity}</p>
                    <span onClick={addHandler}>+</span>
                </div>
                <p className='price'>{price}£</p>
                <div  className='remove-button'onClick={deleteHandler}>x</div>
            </div>

        </div>
    )
}

export default CheckouItem