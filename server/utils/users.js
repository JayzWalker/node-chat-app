/**
 * Created by jayzwalker on 10/4/17.
 */
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription() {
//         return `${this.name} is ${this.age} year(s) old.`;
//     }
// }

class Users {
    constructor() {
        this.users = [];
    }

    addUser(id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
    }

    removeUser(id) {
        var user = this.getUser(id);
        user ? this.users = this.users.filter(user => user.id !== id) : user
        return user;
    }

    getUser(id) {
        return this.users.filter(user => user.id === id)[0];
    }

    getUserList(room) {
        var users = this.users.filter(user => user.room === room);
        var namesArray = users.map(user => user.name);

        return namesArray;
    }
}

module.exports = {Users};