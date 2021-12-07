export default class Footer {
    constructor (){

    }
    create() {
        const footer = document.createElement('footer');
        footer.classList.add('footer');
        const element = document.querySelector('.app');
        element.appendChild(footer);
    }
    draw() {
        const logoWrapper = document.createElement('div');
        logoWrapper.classList.add('logo-wrapper');
        const footer = document.querySelector('.footer');
        footer.appendChild(logoWrapper);
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        const contacts = document.createElement('strong');
        contacts.innerText = 'Contacts: phone 1, phone 2';
        contactInfo.appendChild(contacts);
        footer.appendChild(contactInfo);
    }

    init() {
        this.create();
        this.draw();
    }
}
