export default class Header {
    constructor (){

    }
    create() {
        const header = document.createElement('header');
        header.classList.add('header');
        const element = document.querySelector('.app');
        element.appendChild(header);
    }

    draw() {
        const logoWrapper = document.createElement('div');
        logoWrapper.classList.add('logo-wrapper');
        const header = document.querySelector('.header');
        header.appendChild(logoWrapper);
        const logo = new Image(100);
        logo.src = 'https://seeklogo.com/images/B/batman-logo-67F6E4934C-seeklogo.com.png';
        logoWrapper.appendChild(logo);
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        //const contacts = document.createElement('strong');
        //contacts.innerText = 'Contacts: phone1, phone2';
        //contactInfo.appendChild(contacts);
        //header.appendChild(contactInfo);
    }

    init() {
        this.create();
        this.draw();
    }
}