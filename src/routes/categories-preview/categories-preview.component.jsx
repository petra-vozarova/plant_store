import { useContext } from "react";

import { CategoriesContext } from "../../context/products.context";
import CategoryPreview from "../../components/category-preview/category-preview.component"
import { useState } from "react";


const CategoriesPreview = ()=>{
    const {categoriesMap} = useContext(CategoriesContext)

    return(
        <div>
        {
        Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
            <CategoryPreview key={title} title={title} products={products} />
            )
        })
        }
        </div>
    )
}

export default CategoriesPreview