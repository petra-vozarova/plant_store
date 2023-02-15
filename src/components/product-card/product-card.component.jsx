import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import './product-card.styles.scss';
import Button from '../button/button.component';
const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    const {addItem, cartItems} = useContext(CartContext)

    const addItemToCart = () =>  {
        console.log('product to be added', product);
        addItem(product);
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