import Icon from './mineirinho.jpeg'

export default function loadMenu(){
    const content = document.createElement('div');
    content.id = "menu";

    // Create header
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Menu';
    header.appendChild(h1);
        
    // Create photos
    const photos = document.createElement('div');
    photos.classList.add('leftgrid');
    content.appendChild(photos);

    const img = document.createElement('img');
    img.src = Icon;
    img.alt = '';
    photos.appendChild(img);
        
    // Create menu
    const menu = document.createElement('div');
    menu.classList.add('rightgrid');
    content.appendChild(menu);
    
    const createMenuItem = (dishName, dishPrice) => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
    
        const spanName = document.createElement('span');
        spanName.classList.add('dish-name');
        spanName.textContent = dishName;
    
        const spanPrice = document.createElement('span');
        spanPrice.classList.add('dish-price');
        spanPrice.textContent = dishPrice;
    
        menuItem.appendChild(spanName);
        menuItem.appendChild(spanPrice);
    
        return menuItem;
    };
    
    menu.appendChild(createMenuItem('Dish name', 'R$5,00'));
    menu.appendChild(createMenuItem('Another dish', 'R$3,90'));
        
    return content
}