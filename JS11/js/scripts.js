function closeModal() {
  const modalWindow = document.querySelector('.wrapperModal');
  modalWindow.remove();
}

class User {                                          //конструктор 
  constructor(id, name, email, address, phone) {      //передаваемые свойства
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }

  edit({name = this.name, email = this.email, address = this.address, phone = this.phone}) { //редактирование  
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
      adress: this.address, 
      phone: this.phone, 
    }
  }
}

class Contacts {
  constructor(nameCont) {                           // конструктор списка контактов
    this.contList = [];                             // переменные на основе этого конструтова будут иметь список контактов в виде массива
  }

  create(name, email, address, phone) {
    const id = this.contList.length;
    const user = new User(name, email, address, phone);
    this.contList.push(user);
  }

  edit(data) {                                     //редактирование контакты, передаём все данные data
    const {id, name, email, adress, phone} = data; // эл-ты, которые будут приняты за data
      this.usersList[id].name = name;              
      this.usersList[id].email = email;
      this.usersList[id].adress = adress;
      this.usersList[id].phone = phone;
  }

  remove(id) {
    delete this.contList[id];
  }
}

  class ContApp extends Contacts {                   //создание дочернего эл - та
    constructor() {
      super();                                       // слово для вызова функций, которые пренадлежат Contacts
    }

    get storage() {                               // получение 
        return this.localStorage;
      }

    set storage(newUsersList) {                   // настройка 
        this.usersList = new ContList
    }

    createBtnDel(id) {

      const openModal = () => {
        document.body.insertAdjaceneHTML('beforeend', `
          <div class="wrapper_modal">
            <div class="box_modal">
              <span class="close">X</span>
              <h1>изменить</h1>
            </div>
          </div>
        `)
                            // создание элементов ввода данных и кнопки 
      const boxInfo = document.querySelector('.box_modal'); 
      const nameInput = document.createElement('input');
      const emailInput = document.createElement('textarea');
      const adressInput = document.createElement('textarea');
      const phoneInput = document.createElement('textarea');
      const btn2 = document.createElement('button');
      btn2.innerText = 'Ввод';

      btn2.addEventListener('click', () => { // 
        this.editUser({id: id, name: nameInput.value, email: emailInput.value, adress: adressInput.value, phone: phoneInput.value});
         closeModal();
         this.draw();
      })

      boxInfo.appendChild(nameInput); 
      boxInfo.appendChild(emailInput);
      boxInfo.appendChild(adressInput);
      boxInfo.appendChild(phoneInput);
      boxInfo.appendChild(btn2);
      const close = document.querySelector('.close');
      close.addEventListener('click', closeModal);
    }



    const nodeElem = document.createElement('div');     //создаём блок с кнопками редактирования и удаления
      const btnEdit = document.createElement('button');
      const btnRemove = document.createElement('button');

      btnEdit.innerText = 'изменить';
      btnRemove.innerText = 'удалить'; 


      btnRemove.addEventListener('click', () => {       // добавляем действие к клику по кнопке удаления
        this.removeUser(id);
        this.draw();
      })
  
      btnEdit.addEventListener('click', openModal);    // добавляем действие по клику по кнопке редактирования, открывается модальное окно
        nodeElem.appendChild(btnEdit);
        nodeElem.appendChild(btnRemove);
          
      return nodeElem;
    }

    draw() {
      this.localContacts = this.usersList;
      const oldUser = document.getElementById('userData');
      if (oldUser) {
          oldUser.remove();
      }
      const userInfo = document.createElement('ul');            //создание списка с данными пользователя
      userInfo.id = 'userInfo';
      this.usersList.map((user) => {                            //создаём массив с данными пользователя
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
          const btns = this.createBtnDel(user.id)
          li.appendChild(btns);
          // this.draw();
      });
      document.body.appendChild(userInfo);
  }

  init() {
    const divConts = document.createElement('div');
    divConts.classList.add('contacts');
    const form = document.createElement('form');
    form.classList.add("form_add")
    const inputName = document.createElement('input');
    inputName.placeholder = 'имя...';
    inputName.type = 'text';
    const inputEmail = document.createElement('input');
    inputEmail.placeholder = 'email...';
    const inputAddress = document.createElement('input');
    inputAddress.placeholder = 'адрес...';
    const inputPhone = document.createElement('input');
    inputPhone.placeholder = 'телефон...';
    const addBtn = document.createElement('button');
    addBtn.innerText = 'кнопка';
    form.appendChild(inputName);
    form.appendChild(inputEmail);
    form.appendChild(inputAddress);
    form.appendChild(inputPhone);
    form.appendChild(addBtn);
    divConts.appendChild(form);

    form.addEventListener('submit', (event) => {            //добавление действия к отправке формы
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
    document.body.appendChild(divConts);

  }
}

const user = new User('Joe', 'joe_cat@gmail.com', 'Minsk', '+37529 1234567');
const contApp = new ContApp();
contApp.init();

