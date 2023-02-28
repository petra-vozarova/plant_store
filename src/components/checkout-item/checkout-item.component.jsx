import { useDispatch } from 'react-redux';
import { addItem, removeItem, deleteItem } from '../../store/cart/cart.reducer';
import './checkout-item.styles.scss'

const CheckouItem = ({product}) => {
    const dispatch = useDispatch();
    const{name, price, quantity, imageUrl} = product;

    const deleteHandler = () => {
        dispatch(deleteItem(product));
    }

    const removeHandler = () => {
        dispatch(removeItem(product));
    }

    const addHandler = () => {
        dispatch(addItem(product));
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