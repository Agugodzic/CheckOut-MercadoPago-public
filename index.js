import express from "express";
import morgan from "morgan";
import router from "./routes/index.js";
import cors from "cors";
import db from "./db/database.js";

const app = express();

(async ()=> {
  try{
    await db.authenticate()
    await db.sync()
    console.log('DB auth: OK.')}

  catch(error){
    throw(error)
  }
})()

app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
  origin:CORS_ORIGIN
}))


app.get("/",(req,res)=>{
  res.send("Bienvenido a ChechOut Pro!")
})

app.use(router)
app.listen(3000,console.log("Server conection: localhost:3000"))
