const users = [];

module.exports = class User{
    constructor(userName, firstName, lastName, address, phone){
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
    }

    addUser(){
        users.push(this);
    }

    static getAll(){
        return users;
    }
}