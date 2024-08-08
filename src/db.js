import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/ecomm"

let client;
export const connectionToMongo = () => {
    MongoClient.connect(url)
        .then((currentclient)=> {
            client = currentclient
            console.log("connected succesfully to mongodb");
            // console.dir(client);
        })
        .catch((err)=>{
            console.log(err);
            process.exit(1)
        })
}

export const Db = ()=> {
    return client.db();
}