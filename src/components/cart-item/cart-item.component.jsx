import './cart-item.styles.scss';

const CartItem = ({item}) =>{
    const {name, quantity, price, imageUrl} = item;

    return(
        <div className="cart-item-container">
            <img src={imageUrl}/>
            <div className='cart-item-details-container'>
               <p>{name}</p>
               <p>{quantity} X £{price}</p>
            </div>
        </div>
    )
}

export default CartItem;