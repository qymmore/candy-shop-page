import populateSkeleton from './skeleton';
import populateHome from './home';
import populateShop from './shop';
import populateContact from './contact';

init();

function clickNavBar() {
    const homeTab = document.getElementById('home');
    const shopTab = document.getElementById('shop');
    const contactTab = document.getElementById('contact');
    
    homeTab.addEventListener('click', populateHome);
    shopTab.addEventListener('click', populateShop);
    contactTab.addEventListener('click', populateContact);
};

function init() {
    populateSkeleton();
    populateHome();
    clickNavBar();
};