import ProductCard from "../product-card/product-card.component"
import './category-preview.styles.scss'
const CategoryPreview = ({title, products}) => {
 
    return (
        <div className="category-container">
            <h1 className="category-name">{title.toUpperCase()}</h1>
            <div className="category-preview">
            {
                products.filter((_, idx)=>
                    idx < 4
                ).map((product) => 
                    <ProductCard key={product.id} product={product} />

                )
            }
            </div>

        </div>
    )

}
export default CategoryPreview