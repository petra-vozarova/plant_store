import './product-card.styles.scss';

const ProductCard = ({product}) => {
    const {name, imageUrl, price} = product;
    
    return(
        <div className='productCard'>
            <img  src={imageUrl}></img>
            <div className='footer'>
                <h2 className='name'>{name}</h2>
                <h2 className='price'>{price}</h2>
            </div>
        </div>
    )
}

export default ProductCard