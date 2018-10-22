const express = require('express');
const app = express();
const passport = require('passport');

const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const PORT = 4000;
mongoose.connect(keys.mongoURI);
require('./models/User');
require('./services/passport');

const cookieDurationDays = 30;

app.use(cookieSession({
    maxAge: cookieDurationDays * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}))

app.use( passport.initialize());
app.use( passport.session());



app.use(bodyParser.json());



app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})

app.get('/', (req,res) => {
    console.log(`Connected to express`)
})

app.get('/api/test', (req,res) => {
    res.send({server: "Server is online!"})
})

require('./routes/authRoutes')(app);




