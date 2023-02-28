import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { categories } from "../../components/category-menu/category-menu.component";
import ProductCard from "../../components/product-card/product-card.component";

import './category.styles.scss';

const Category = () =>{
    const {url} = useParams();
    const categoriesMap = useSelector(selectCategoriesMap)
    const category = categories.find((item) => item.route.includes(url))
    const [products, setProducts] = useState(categoriesMap[category.title.toLowerCase()]);
    
    useEffect(() => {
        setProducts(categoriesMap[category.title.toLowerCase()])
        }, [category, categoriesMap]    
    )
    
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