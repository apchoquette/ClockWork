const _ = require('lodash');
const mongoose = require('mongoose');
const Flow = mongoose.model('flows');
const userLoggedIn = require('../middlewares/userLoggedIn');
const Path = require('path-parser');



module.exports = (app) => {
    //returns all flows created by the current user
    app.get('/api/flows',userLoggedIn,async (req,res) => {
        
        const flows = await Flow.find({
            _user: req.user.id
        })

        res.send(flows);
    })

    app.get('/api/flows/:id',userLoggedIn, async (req,res) => {
        
        const {id} = req.params;

        const flow = await Flow.findOne({
            _id: id
        })

        res.send(flow);
    })

    app.put('/api/flows/:id', userLoggedIn, async (req,res) => {

        const { id } = req.params 

        

    })

    app.delete('/api/flows/:id', userLoggedIn, async (req,res) => {
        const { id } = req.params

        const flows = await Flow.deleteOne({
            _id: id
        }, async (err) => {
            if(!err) {
                const flows = await Flow.find({
                    _user: req.user.id
                })
        
                res.send(flows);
            }else {
                res.send({error: "Flow not removed."})
            }
        })


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
            
        }

        catch(err) {
            res.status(422).send(err);
        }
        
    })
}

