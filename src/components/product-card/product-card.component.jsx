import { useDispatch} from 'react-redux';
import { addItem } from '../../store/cart/cart.reducer';
import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const {name, imageUrl, price} = product;

    const addItemToCart = () =>  {
        dispatch(addItem(product));
    }

    return(
        <div className='productCard'>
            <img  src={imageUrl}></img>
            <Button onClick={addItemToCart}>ADD ITEM</Button>
            <div className='footer'>
                <h2 className='name'>{name}</h2>
                <h2 className='price'>£{price}</h2>
            </div>
        </div>
    )
}

export default ProductCard