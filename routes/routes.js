const operations = require('../logica/calculate');

const arrObj = [
    {
        name: 'Vika',
        age:30
    },
    {
        name: 'Nika',
        age:10
    },  
]

//router(app)
const router = function(app) {
    app.get('/', (req,res) => {
        res.render('index');
    })
    app.get('/users', (req,res) => {
        res.send(arrObj);
    })
    app.get('/calculate', (req,res) => {
        res.render('calc');
    })
    app.post('/calculate', (req,res) => {
        const operator = req.body.operator;
        const num1= Number(req.body.number1);
        const num2= Number(req.body.number2);  
        const ans =operations(operator,num1,num2);
        const answer =num1+operator+num2+'='+operations(operator,num1,num2);
        res.render('calc', {answer:answer,ans:ans});
    })
    app.post('/users', (req,res) => {
       console.log(req.body);
       res.sendStatus(200);
    })

}


module.exports = router;