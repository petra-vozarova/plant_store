import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import {getCollectionAndDocuments} from '../../utils/firebase/firebase.utils'
import { setCategories } from "../../store/categories/categories.reducer";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      const getCategoriesMap = async () => {
        const categoriesArray = await getCollectionAndDocuments('categories');
        dispatch(setCategories(categoriesArray));
      };
      getCategoriesMap();
    }, []);
    
    return(
        <Routes>
            <Route index element={<CategoriesPreview />}/>
            <Route path=':url' element={<Category />} />
        </Routes>
    )
}

export default Shop;