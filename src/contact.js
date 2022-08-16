//create contact elements

function createContact() {

    const contactSection = document.createElement('section');
    contactSection.setAttribute('id', 'contact-info');

    const contactContainer = document.createElement('div');
    contactContainer.setAttribute('class', 'contact-container');

    const addressBlock = document.createElement('p');
    addressBlock.setAttribute('class', 'address-block');
    addressBlock.innerText = 'Address: ABC St, Toronto ON';
    contactContainer.appendChild(addressBlock);

    const phoneBlock = document.createElement('p');
    phoneBlock.setAttribute('class', 'phone-block');
    phoneBlock.innerText = "Phone: 123-456-789";
    addressBlock.appendChild(phoneBlock);

    const emailBlock = document.createElement('p');
    emailBlock.setAttribute('class', 'email-block');
    emailBlock.innerText = "Email: abc.xyz@email.com";
    addressBlock.appendChild(emailBlock);

    contactSection.appendChild(contactContainer);

    return contactSection;
};

export default function populateContact() {

    const content = document.getElementById('tab-content');

    content.textContent = '';

    const contactInfo = createContact();

    content.appendChild(contactInfo);
  };

