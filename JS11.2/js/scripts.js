class User {
  constructor(id, name, email, address, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }

  edit(name = this.name, email = this.email, address = this.address, phone = this.phone) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }

  get() {
    return {
      id: this.id,
      name: this.name, 
      email: this.email,
      address: this.address, 
      phone: this.phone, 
  }
}
}
class Contacts {
  constructor(nameCont) {
    this.contList = [];
  }

  create(name, email, address, phone) {
    const id = this.contList.length;
    const user = new User(name, email, address, phone);
    this.contList.push(user);
  }

  edit(id, name, email, address, phone) {
    this.contList[id].edit(name, email, address, phone);
  }

  remove(id) {
    delete this.contList[id];
  }
}

class ContApp extends Contacts {
  constructor() {
    super();
  }

  draw() {
    const oldUser = document.getElementById('userData');
    if (oldUser) {
      oldUser.remove();
    }

  const userData = document.createElement('ul');
  userData.id = 'userData';
  this.contList.map((user) => {
    const li = document.createElement('li');
    const nameNode = document.createElement('h2');
    nameNode.innerText = user.name;
    const emailNode = document.createElement('p');
    emailNode.innerText = user.email;
    const addressNode = document.createElement('p');
    addressNode.innerText = user.address;
    const phoneNode = document.createElement('p');
    phoneNode.innerText = user.phone;

    li.appendChild(nameNode);
    li.appendChild(emailNode);
    li.appendChild(addressNode);
    li.appendChild(phoneNode);
    userData.appendChild(li);

  });
  document.body.appendChild(userData);
}

  init() {
    const divContacts = document.createElement('div');
    divContacts.classList.add('çontacts');
    
    const form = document.createElement('form');

    const inputName = document.createElement('input');
    inputName.placeholder = 'Имя...';
    inputName.type = 'text';
    const inputEmail = document.createElement('input');
    inputEmail.placeholder = 'email...';
    const inputAddress = document.createElement('input');
    inputAddress.placeholder = 'адрес...';
    const inputPhone = document.createElement('input');
    inputPhone.placeholder = 'телефон...';
    const addBtn = document.createElement('button');
    addBtn.innerText = 'Кнопко';
    form.appendChild(inputName);
    form.appendChild(inputEmail);
    form.appendChild(inputAddress);
    form.appendChild(inputPhone);
    form.appendChild(addBtn);
    divContacts.appendChild(form);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = event.currentTarget[0].value;
      event.currentTarget[0].value = '';
      const email = event.currentTarget[1].value;
      event.currentTarget[1].value = '';
      const address = event.currentTarget[2].value;
      event.currentTarget[2].value = '';
      const phone = event.currentTarget[3].value;
      event.currentTarget[3].value = '';
      this.create(name, email, address, phone);
      console.log(name, email, address, phone);
      this.draw();      
    })

    document.body.appendChild(divContacts);

  }
}

const user = new User('Vasya', 'v@gmail.com', 'Minsk', '+37529 1234567');
const contApp = new ContApp();
contApp.init();





















