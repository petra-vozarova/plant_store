import CategoryItem from "../category-item/category-item.component";
import { CategoryMenuContainer } from "./category_menu.styles";

export const categories = [
    {
        id: 1,
        title: 'Indoor Plants',
        imageUrl: 'https://thumbs.dreamstime.com/b/tropical-leaves-foliage-plant-bush-floral-arrangement-nature-bac-backdrop-isolated-white-background-clipping-path-included-113573536.jpg',
    },
    {
        id: 2,
        title: 'Outdoor Plants',
        imageUrl: 'https://thumbs.dreamstime.com/b/tropical-leaves-foliage-plant-bush-floral-arrangement-nature-bac-backdrop-isolated-white-background-clipping-path-included-113573536.jpg',
    },
    {
        id: 3,
        title: 'Flowers',
        imageUrl: 'https://thumbs.dreamstime.com/b/tropical-leaves-foliage-plant-bush-floral-arrangement-nature-bac-backdrop-isolated-white-background-clipping-path-included-113573536.jpg',
    },
    {
        id: 4,
        title: 'Seeds & Bulbs',
        imageUrl: 'https://thumbs.dreamstime.com/b/tropical-leaves-foliage-plant-bush-floral-arrangement-nature-bac-backdrop-isolated-white-background-clipping-path-included-113573536.jpg',
    },
    {
        id: 5,
        title: 'Accessoires',
        imageUrl: 'https://thumbs.dreamstime.com/b/tropical-leaves-foliage-plant-bush-floral-arrangement-nature-bac-backdrop-isolated-white-background-clipping-path-included-113573536.jpg',
    }
  ];
const CategoryMenu = () => {
    return (
        <CategoryMenuContainer>
            {
                categories.map((category) => (
                    <CategoryItem id={category.id} category={category}/>
                ))
            }   
        </CategoryMenuContainer>
    )
    
};

export default CategoryMenu;

