class Contacts {
    
};


class User {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.email = data.email;
        this.address = data.address;
        this.phone = data.phone;
    }
    edit(obj) {


    }

    get() {
        return {

        }
    }

    showName() {
        console.log(this.name);
    }
}

let contact1 = new User({ id: '12',  name: 'Vasya', email: 'v@gmail.com', address: 'm-city', phone:'with keys'});
console.log(contact1);

let contact2 = new User({ id: '23',  name: 'Petya', email: 'p@gmail.com', address: 'm-city', phone:'with keys and display'});
console.log(contact2);

let contact3 = new User({ id: '34',  name: 'Valodia', email: 'val@gmail.com', address: 'm-city', phone:'with keys, display and battery'});
console.log(contact3);

let contact4 = new User({ id: '45',  name: 'Batman', email: 'batman@gmail.com', address: 'gotham-city', phone:'batphone'});
console.log(contact4);













