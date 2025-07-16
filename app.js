const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const session = require("express-session");
require("dotenv").config();



app.set('view engine', 'pug')
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET, // Güvenlik için önemli
  resave: false,
  saveUninitialized: false,
  cookie: { 
    maxAge: 1000 * 60 * 60,
    httpOnly: true, // XSS saldırılarına karşı koruma
  }
}))

const loginRoute = require("./src/routes/loginRoute");

app.use("/api/login", loginRoute);

app.get('/', (req,res)=>{
  res.render('index');
})

try {
  app.listen(3000, ()=>{
    console.log("server running")
  })  
} catch (error) {
  console.log(error);  
}