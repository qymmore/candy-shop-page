//create contact elements

function createContact(name, data) {

    const contactInfo = document.createElement('section');
    contactInfo.setAttribute('id', 'contact-info');

    const title = document.createElement('h2');
    title.textContent = name;
    title.setAttribute('class', 'contact-type');
    contactInfo.appendChild(title);

    data.forEach((d) => {
        const p = document.createElement('p');
        p.setAttribute('class', 'contact-description');
        p.textContent = d;
        contactInfo.appendChild(p);
    });

    return contactInfo;
};

export default function populateContact() {

    const content = document.getElementById('tab-content');

    content.textContent = '';

    const phoneSection = createContact('Phone', ['123-456-789']);
    phoneSection.setAttribute('class','phone-number');

    const addressSection = createContact('Address', ['ABC 123 Dr, ON Canada']);
    addressSection.setAttribute('class','address-book');

    content.appendChild(phoneSection);
    content.appendChild(addressSection);
  };

