import { useParams } from "react-router-dom";
import { useContext,useEffect, useState } from "react";
import { CategoriesContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import { categories } from "../../components/category-menu/category-menu.component";
import './category.styles.scss';
const Category = () =>{
    const {url} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const category = categories.find((item) => item.route.includes(url))
    const [products, setProducts] = useState(categoriesMap[category.title.toLowerCase()]);
    
    useEffect(() => {
        setProducts(categoriesMap[category.title.toLowerCase()])
    }, [category, categoriesMap])
    
    return(
        <div className="category">
            <h1 className="category-title">{category.title}</h1>
            <div className="category-preview">
                {
                   products && products.map((product) => {
                        return (<ProductCard product={product} key={product.id} />)
})
                }
            </div>
        </div>
    )

}
export default Category;