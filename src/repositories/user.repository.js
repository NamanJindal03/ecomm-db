
import { Db } from "../db.js";

export default class UserRepository{
    async getUserByEmail(email){
        const userCollection= Db().collection("user")
        const user = await userCollection.findOne({email: email});
        // const user = users.find((entry)=>{
        //     return entry.email == email
        // })
        return user;
    }
    async createUser(newUser){
        const userCollection= Db().collection("user")
        
        await userCollection.insertOne(newUser)
        // users.push(user);
    }

    

    async getUsers(){
        const userCollection= Db().collection("user")
        const something = await userCollection.find({}).toArray();
        return something
    }
}