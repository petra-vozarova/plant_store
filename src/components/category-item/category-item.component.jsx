import { BackgroundImage, BodyDirectory, CategoryItemContainer } from "./category-item.styles";

const CategoryItem = ( {category}) => {
    const {title, imageUrl} = category;
    return(
        <CategoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <BodyDirectory >

            
            <h1>{title}</h1>
            </BodyDirectory >
        </CategoryItemContainer>
    )

}

export default CategoryItem;