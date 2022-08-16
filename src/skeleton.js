//functions for creating elements

function populateHeader(id, text) {

  const header = document.createElement('header');
  header.setAttribute('id', id);

  const logo = document.createElement('h3');
  logo.innerText = text;

  header.appendChild(logo);

  return header;
};

function createTab(id, text) {

  const btn = document.createElement('button');
  btn.setAttribute('id', id);

  const span = document.createElement('span');
  span.innerText = text;

  btn.appendChild(span);
  btn.classList.add('tab');
  
  return btn;
};

function createNavBar(id) {

  const nav = document.createElement('nav');
  nav.setAttribute('id', id);

  const home = createTab('home', 'Home');
  const menu = createTab('menu', 'Menu');
  const contact = createTab('contact', 'Contact');

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
};

function createBody(id) {

  const main = document.createElement('main');
  main.setAttribute('id', id);

  return main;
};

function createFooter(id, text) {

  const footer = document.createElement('footer');
  footer.setAttribute('id', id);

  const h5 = document.createElement('h5');
  h5.innerHTML = text;

  footer.appendChild(h5);

  return footer;
};

export default function populateSkeleton() {

  const container = document.getElementById('container');

  const header = populateHeader('logo-name', 'Star Candy Shop');
  container.appendChild(header);

  const nav = createNavBar('nav');
  container.appendChild(nav);

  const tabContent = createBody('tab-content');
  container.appendChild(tabContent);

  const footer = createFooter('footer', `Copyright © 2022 <a href="https://github.com/qymmore">qymmore</a>`);
  container.appendChild(footer);

};
  
