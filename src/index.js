import express from "express"
import baseRoutes from "./routes/index.js"
const app = express();
const PORT = 3000 //itroduce env later on


app.use(express.json());
app.use(express.urlencoded());

app.use('/', baseRoutes)

app.listen(PORT, ()=>{
    console.log('server listenting at port', PORT)
})