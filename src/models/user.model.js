import { Db } from "../db.js";
export default class User{
    constructor(email, password, name, role){
        // this.id = userId
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }
    static async createUser(email, password, name, role){
        const userCollection= Db().collection("user")
        const user = new User(email, password, name, role);
        await userCollection.insertOne(user)
        users.push(user);
    }
    static async getUserByEmail(email){
        const userCollection= Db().collection("user")
        const user = await userCollection.findOne({email: email});
        // const user = users.find((entry)=>{
        //     return entry.email == email
        // })
        return user;
    }
    static async getUserById(id){
        const userCollection= Db().collection("user")
        const user = await userCollection.findOne({_id: id});
        // const user = users.find((entry)=>{
        //     return entry.id == id
        // })
        return user;
    }
    //TODO: only for dev - remove before pushing
    static async getUsers(){
        const userCollection= Db().collection("user")
        const something = await userCollection.find({}).toArray();
        return something
    }
}
let users = [
]