import { BackgroundImage, BodyDirectory, CategoryItemContainer } from "./category-item.styles";
import { useNavigate } from "react-router-dom";

const CategoryItem = ( {category}) => {
    const {title, imageUrl, route} = category;
    const navigate = useNavigate();
    const handleChange = () => navigate(route);
    return(
        <CategoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <BodyDirectory >
                <h1 onClick={handleChange}>{title}</h1>
            </BodyDirectory >
        </CategoryItemContainer>
    )

}

export default CategoryItem;