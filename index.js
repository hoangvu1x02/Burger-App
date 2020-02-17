const express = require('express')
const bodyParser = require('body-parser')
const exphbs  = require('express-handlebars');
const db_connection = require('./models');
const apiRoutes = require('./routes/apiRoutes')

const app = express()
const port = 8080

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static('public'));

const hbs = exphbs.create({});
 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use('/api', apiRoutes);

app.get('/', async (req, res) => {
    const burgers = await db_connection.burger.findAll();
    res.render("home", {burgers});
})


db_connection.sequelize.sync(). then (function(){
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
});
