import populateSkeleton from './skeleton';
import populateHome from './home';
import populateContact from './contact';

init();

function clickNavBar() {
    const homeTab = document.getElementById('home');
    const menuTab = document.getElementById('menu');
    const contactTab = document.getElementById('contact');
    
    homeTab.addEventListener('click', populateHome);
    contactTab.addEventListener('click', populateContact);
};

function init() {

    populateSkeleton();
    populateHome();
    clickNavBar();
};