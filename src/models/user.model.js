export default class User{
    constructor(email, password, name, userId){
        this.id = userId
        this.name = name;
        this.email = email;
        this.password = password;
    }
    static createUser(email, password, name, userId){
        const user = new User(email, password, name, userId);
        users.push(user);
    }
    static getUserByEmail(email){
        const user = users.find((entry)=>{
            return entry.email == email
        })
        return user;
    }
    //TODO: only for dev - remove before pushing
    static getUsers(){
        return users
    }
}
let users = [
]