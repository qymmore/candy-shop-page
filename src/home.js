//home section

function welcomeSection() {

    const landingPage = document.createElement('section');
    landingPage.setAttribute('class', 'landing-page');
  
    const h1 = document.createElement('h1');
    h1.setAttribute('class', 'welcome-text');
    h1.innerText = "Welcome to The Carbonaut!";
    landingPage.appendChild(h1);
  
    const h3 = document.createElement('h3');
    h3.setAttribute('class', 'order-text');
    h3.innerText = "Look at our menu or visit our stores in-person";
    landingPage.appendChild(h3);

    return landingPage;
}

export default function populateHome() {
    const content = document.getElementById('tab-content');

    content.textContent = '';

    const landingSection = welcomeSection();

    content.appendChild(landingSection);
};