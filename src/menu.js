function createMenuHeadline() {
    const menuHeadline = document.createElement(`h1`);
    menuHeadline.className = `menu-headline`;
    menuHeadline.textContent = `Menu`;

    return menuHeadline;
}

function createMenuGrid() {

    const menuGrid = document.createElement(`div`);
    menuGrid.className = `menu-grid`;

        const menuItem1 = document.createElement(`div`);
        menuItem1.className = `menu-item`;

            const itemImg1 = document.createElement(`img`);
            itemImg1.className = `item-img`;
            itemImg1.src = `./images/spinach-and-feta.jpg`;
            itemImg1.alt = `test`;

            const itemName1 = document.createElement(`h2`);
            itemName1.className = `item-name`;
            itemName1.textContent = `SPINACH AND FETA`

            const itemDescription1 = document.createElement(`p`);
            itemDescription1.className = `item-description`;
            itemDescription1.textContent = `Cream Cheese, Mozzarella, Spinach, Feta Cheese, Havarti Cheese, Parmesan Cheese, Mayonnaise, Garlic Seasoning`

        menuItem1.append(itemImg1,itemName1,itemDescription1);

        const menuItem2 = document.createElement(`div`);
        menuItem2.className = `menu-item`;

            const itemImg2 = document.createElement(`img`);
            itemImg2.className = `item-img`;
            itemImg2.src = `./images/pacific-veggie.jpg`;
            itemImg2.alt = `test`;

            const itemName2 = document.createElement(`h2`);
            itemName2.className = `item-name`;
            itemName2.textContent = `PACIFIC VEGGIE`

            const itemDescription2 = document.createElement(`p`);
            itemDescription2.className = `item-description`;
            itemDescription2.textContent = `Pizza Sauce, Mozzarella Cheese, Green Bell Pepper, Havarti Cheese, Feta Cheese, Black Olives, Mushroom, Tomatoes`

        menuItem2.append(itemImg2,itemName2,itemDescription2);

        const menuItem3 = document.createElement(`div`);
        menuItem3.className = `menu-item`;

            const itemImg3 = document.createElement(`img`);
            itemImg3.className = `item-img`;
            itemImg3.src = `./images/meatzza.jpg`;
            itemImg3.alt = `test`;

            const itemName3 = document.createElement(`h2`);
            itemName3.className = `item-name`;
            itemName3.textContent = `MEATZZA`

            const itemDescription3 = document.createElement(`p`);
            itemDescription3.className = `item-description`;
            itemDescription3.textContent = `Pizza Sauce, Mozzarella Cheese, Ham, Beef, Pepperoni, Italian Sausage, Bacon`

        menuItem3.append(itemImg3,itemName3,itemDescription3);

        const menuItem4 = document.createElement(`div`);
        menuItem4.className = `menu-item`;

            const itemImg4 = document.createElement(`img`);
            itemImg4.className = `item-img`;
            itemImg4.src = `./images/pepperoni.jpg`;
            itemImg4.alt = `test`;

            const itemName4 = document.createElement(`h2`);
            itemName4.className = `item-name`;
            itemName4.textContent = `PEPPERONI`

            const itemDescription4 = document.createElement(`p`);
            itemDescription4.className = `item-description`;
            itemDescription4.textContent = `Pizza Sauce, Mozzarella Cheese, Pepperoni, Havarti Cheese, Parmesan Cheese, Oregano Leaves`

        menuItem4.append(itemImg4,itemName4,itemDescription4);

        const menuItem5 = document.createElement(`div`);
        menuItem5.className = `menu-item`;

            const itemImg5 = document.createElement(`img`);
            itemImg5.className = `item-img`;
            itemImg5.src = `./images/bacon-and-mushroom.jpg`;
            itemImg5.alt = `test`;

            const itemName5 = document.createElement(`h2`);
            itemName5.className = `item-name`;
            itemName5.textContent = `BACON & MUSHROOM`

            const itemDescription5 = document.createElement(`p`);
            itemDescription5.className = `item-description`;
            itemDescription5.textContent = `Tomato Ketchup, Mozzarella Cheese, Mayonnaise, Mushroom, Diced Bacon, Garlic Seasoning`

        menuItem5.append(itemImg5,itemName5,itemDescription5);

        const menuItem6 = document.createElement(`div`);
        menuItem6.className = `menu-item`;

            const itemImg6 = document.createElement(`img`);
            itemImg6.className = `item-img`;
            itemImg6.src = `./images/pizza-deluxe.jpg`;
            itemImg6.alt = `test`;

            const itemName6 = document.createElement(`h2`);
            itemName6.className = `item-name`;
            itemName6.textContent = `PIZZA DELUXE`

            const itemDescription6 = document.createElement(`p`);
            itemDescription6.className = `item-description`;
            itemDescription6.textContent = `Pizza Sauce, Mozzarella Cheese, Pepperoni, Onions, Green Bell Pepper, Mushroom, Black Olives, Italian Sausage`

        menuItem6.append(itemImg6,itemName6,itemDescription6);

    menuGrid.append(menuItem1,menuItem2,menuItem3,menuItem4,menuItem5,menuItem6);

    return menuGrid;

}

function loadMenu() {
    
    const mainContainer = document.querySelector(`.container.home`);
    mainContainer.textContent = ``;
    mainContainer.append(createMenuHeadline(), createMenuGrid());

}

export default loadMenu;