const express = require('express');
const bodyParser=require('body-parser');
const routes = require('./routes/routes')
require('dotenv').config();
const app = express();
const port = process.env.PORT;
//middleware
// for form in html
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


//app.set('view engine','ejs');
app.set('view engine','hbs');


routes(app);


app.listen(port, (error) => {
 if (error){
    return console.log(`Error ${error}`)
 } 

 return console.log(`Server adress on port ${port}`)
});

