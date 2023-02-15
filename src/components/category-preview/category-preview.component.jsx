import { Link } from "react-router-dom";

import ProductCard from "../product-card/product-card.component"
import { categories } from "../category-menu/category-menu.component"
import './category-preview.styles.scss'

const CategoryPreview = ({title, products}) => {
    const category = categories.find((item)=> item.title.toLowerCase() == title.toLowerCase())
    return (
        <div className="category-container">
            <Link to ={category.route} className="category-name">{title.toUpperCase()}</Link>
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