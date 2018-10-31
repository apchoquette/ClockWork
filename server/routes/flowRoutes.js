const _ = require('lodash');
const mongoose = require('mongoose');
const Flow = mongoose.model('flows');
const userLoggedIn = require('../middlewares/userLoggedIn');
const Path = require('path-parser');


module.exports = (app) => {
    //returns all flows created by the current user
    app.get('/api/flows',userLoggedIn,async (req,res) => {
        console.log(req.body)
        const flows = await Flow.find({
            _user: req.user.id
        })

        res.send(flows);
    })

    app.get('/api/flows/:id',userLoggedIn, async (req,res) => {
        
        const id = req.params.id;
        


        const flow = await Flow.find({
            _id: id
        })

        res.send(flow);
    })


    app.post('/api/flows', userLoggedIn, async (req,res) => {
        const { name, departments, stages } = req.body;

        const flow = new Flow({
            name,
            departments,
            stages,
            _user: req.user.id,
            createdAt: Date.now()

        })

        try {
            flow.save();
            console.log('flow saved')
        }

        catch(err) {
            res.status(422).send(err);
        }
        
    })
}

