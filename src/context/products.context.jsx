import { useEffect, createContext, useState } from 'react';

import { STORE_DATA } from '../store_data';

import { addCollectionAndDocuments, getCollectionAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
    categoriesMap : {},
});
const data = STORE_DATA
STORE_DATA.forEach((object)=>{
    console.log(object.title)
})

export const CategoriesProvider = ({children}) =>{
    const [categoriesMap, setCategoriesMap] = useState({})

    //used to populate products firestore db
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', STORE_DATA)
    // },[])

    useEffect(() => {
        const getCategoriesMap = async() =>{
            const categoryMap = await getCollectionAndDocuments();
            setCategoriesMap(categoryMap);
        }
        getCategoriesMap();
    }, [])

    const value = {categoriesMap};
    console.log(`value ${Object.keys(value)}`)
    return(
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
};

