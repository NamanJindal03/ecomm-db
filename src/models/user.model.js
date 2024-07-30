export default class User{
    constructor(email, password, name, userId, role){
        this.id = userId
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    static createUser(email, password, name, userId, role){
        const user = new User(email, password, name, userId, role);
        users.push(user);
    }
    static getUserByEmail(email){
        const user = users.find((entry)=>{
            return entry.email == email
        })
        return user;
    }
    static getUserById(id){

        const user = users.find((entry)=>{
            return entry.id == id
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