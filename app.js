const express = require("express");
const app = express();

app.set('view engine', 'pug')
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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