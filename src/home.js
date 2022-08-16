//home section

function welcomeSection() {

    const landingPage = document.createElement('section');
    landingPage.setAttribute('class', 'landing-page');

    const div1 = document.createElement('div');
    div1.setAttribute('class', 'image-one');
    landingPage.appendChild(div1);

    const div2 = document.createElement('div');
    div2.setAttribute('class', 'image-two');
    landingPage.appendChild(div2);

    const div3 = document.createElement('div');
    div3.setAttribute('class', 'image-three');
    landingPage.appendChild(div3);

    const homeSection = document.createElement('div');
    homeSection.setAttribute('class', 'home-section');

    const p1 = document.createElement('p');
    p1.setAttribute('class', 'p1');
    p1.innerText = 'Welcome to Star Candy Shop';
    homeSection.appendChild(p1);

    const p2 = document.createElement('p');
    p2.setAttribute('class', 'p2');
    p2.innerText = 'Our store is now LIVE online!';
    homeSection.appendChild(p2);

    const p3 = document.createElement('p');
    p3.setAttribute('class', 'p3');
    p3.innerText = "Order by 11/11/2023 @ 11:59 EST";
    homeSection.appendChild(p3);

    landingPage.appendChild(homeSection);

    return landingPage;
}

export default function populateHome() {
    const content = document.getElementById('tab-content');

    content.textContent = '';

    const landingSection = welcomeSection();

    content.appendChild(landingSection);
};