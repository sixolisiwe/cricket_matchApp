const express = require('express'); //importing express
const bodyParser = require('body-parser') //import bp
const exphbs = require('express-handlebars'); //reference express-hbs after download

const matchApp = require('./cricketMatch')
// var moment = require('moment');
// moment().format()

const app = express(); //instance of app



const scoreApp = matchApp();



app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars'); //configure handlebars

app.use(bodyParser.urlencoded({
    extended: false
})) 

app.use(bodyParser.json()) //config as per line13

app.use(express.static('public'))

app.get('/', function (req, res) {
  
   
    res.render('index', {

        score: scoreApp.getScoreTotal(),
        
       
        
    

    }) 
   
})


app.post('/scores', function (req, res) { //route 2

    const {
        currentTotal,
    
    } = req.body
 
    console.log(currentTotal);
    scoreApp.getScoreTotal({
        currentTotal,
      
        
    })
    

    res.redirect('/')

})


const PORT = process.env.PORT || 3013; //config port to use default and define new port
app.listen(PORT, function () {
console.log("App listening at port:", PORT);

})