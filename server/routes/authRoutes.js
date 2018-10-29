const passport = require('passport');

module.exports = (app) => {
    app.get(
        '/api/auth/google', passport.authenticate('google',{
            scope: ['profile','email']
    }));


    app.get('/api/auth/google/callback', 
    passport.authenticate('google'),(req,res) => {
        res.redirect('http://localhost:3000/dashboard');
    });

    app.get('/api/logout', (req, res) => {
        
        req.logout();
        res.redirect('http://localhost:3000/')
        
    
    })
    
    app.get('/api/currentuser', (req,res) => {
        res.send(req.user);
    })

}