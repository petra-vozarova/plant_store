import CategoryItem from "../category-item/category-item.component";
import { CategoryMenuContainer } from "./category_menu.styles";

export const categories = [
    {
        id: 1,
        title: 'Indoor Plants',
        imageUrl: 'https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        route: '/shop/indoorplants'
    },
    {
        id: 2,
        title: 'Outdoor Plants',
        imageUrl: 'https://images.pexels.com/photos/9413740/pexels-photo-9413740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        route: '/shop/outdoorplants',
    },
    {
        id: 3,
        title: 'Flowers',
        imageUrl: 'https://images.pexels.com/photos/112396/pexels-photo-112396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        route: '/shop/flowers',
    },
    {
        id: 4,
        title: 'Seeds & Bulbs',
        imageUrl: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        route: '/shop/seedsbulbs',
    },
    {
        id: 5,
        title: 'Essentials',
        imageUrl: 'https://images.pexels.com/photos/8989429/pexels-photo-8989429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        route: '/shop/essentials',
    }
  ];
const CategoryMenu = () => {
    return (
        <CategoryMenuContainer>
            {
                categories.map((category) => (
                    <CategoryItem key={category.id} category={category}/>
                ))
            }   
        </CategoryMenuContainer>
    )
    
};

export default CategoryMenu;

