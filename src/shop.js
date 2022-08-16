function shopContent() {

    const shopBackground = document.createElement('section');
    shopBackground.setAttribute('id', 'shop-background');

    const gridContainer = document.createElement('div');
    gridContainer.setAttribute('class', 'grid-container');
    shopBackground.appendChild(gridContainer);

    const gridOne = document.createElement('div');
    gridOne.setAttribute('class', 'grid-one');
    gridOne.innerText = "Scooper Bites";
    gridContainer.appendChild(gridOne);

    const gridTwo = document.createElement('div');
    gridTwo.setAttribute('class', 'grid-two');
    gridTwo.innerText = "Mystic Molly";
    gridContainer.appendChild(gridTwo);

    const gridThree = document.createElement('div');
    gridThree.setAttribute('class', 'grid-three');
    gridThree.innerText = "Butternut Hopscotch";
    gridContainer.appendChild(gridThree);

    const gridFour = document.createElement('div');
    gridFour.setAttribute('class', 'grid-four');
    gridFour.innerText = "Pancake Panic";
    gridContainer.appendChild(gridFour);

    const gridFive = document.createElement('div');
    gridFive.setAttribute('class', 'grid-five');
    gridFive.innerText = "Tubble Tots";
    gridContainer.appendChild(gridFive);

    const gridSix = document.createElement('div');
    gridSix.setAttribute('class', 'grid-six');
    gridSix.innerText = "Pom Pickled";
    gridContainer.appendChild(gridSix);

    const gridSeven = document.createElement('div');
    gridSeven.setAttribute('class', 'grid-seven');
    gridSeven.innerText = "Strawberry sorbet";
    gridContainer.appendChild(gridSeven);

    const gridEight = document.createElement('div');
    gridEight.setAttribute('class', 'grid-eight');
    gridEight.innerText = "Chocolate maple";
    gridContainer.appendChild(gridEight);

    return shopBackground;
}

export default function populateShop() {

    const content = document.getElementById('tab-content');

    content.textContent = '';

    const shopInfo = shopContent();

    content.appendChild(shopInfo);
}