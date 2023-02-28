import { useNavigate } from "react-router-dom";
import { BackgroundImage, BodyDirectory, CategoryItemContainer } from "./category-item.styles";

const CategoryItem = ( {category}) => {
    const {title, imageUrl, route} = category;
    const navigate = useNavigate();
    const handleChange = () => navigate(route);

    return(
        <CategoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <BodyDirectory onClick={handleChange}>
                <h1>{title}</h1>
            </BodyDirectory >
        </CategoryItemContainer>
    )
}

export default CategoryItem;