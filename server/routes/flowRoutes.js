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

    app.get('/api/tasks',userLoggedIn, async (req,res) => {

        
        const tasks = await Flow.find({
            _user: req.user.id
        },{task: true})

        res.send(tasks);
    })

    //fetches flow based on URL id
    app.get('/api/flows/:id',userLoggedIn, async (req,res) => {
        
        const { id } = req.params;

        const flow = await Flow.findOne({
            _id: id
        })

        res.send(flow);
    })


    //creates a new task within the selected flow.
    app.put('/api/flows/:id', userLoggedIn, async (req,res) => {


        const { id } = req.params;

       

        const { taskName, description, createdAt, requiredBy, completedAt, stage } = req.body;

        const flow = Flow.findOneAndUpdate(
            {_id: id}
        
        ,{ $push: { "task": {
            taskName: taskName,
            description: description,
            createdAt: createdAt,
            requiredBy: requiredBy,
            stage: stage
        }}}, async (err) => {
            if(!err){
                const flow = await Flow.findOne({
                    _id: id
                })
                

                res.send(flow);
            }else {
                console.log(err)
                
                res.send({error: "Flow not found"})
            }
        }
    )

    })
    //updates the status of a task
    app.put('/api/flows/:id/:taskId', userLoggedIn, async (req,res) => {


        const { id,taskId } = req.params;



        const { stage } = req.body;

        

        const task = Flow.findOneAndUpdate({
            "task._id": taskId
        }, { '$set': { "task.$.stage": stage
        }}, async (err) => {
            if(!err){
                
                const flow = await Flow.findOne({
                    _id: id
                })
                res.send(flow);
                
            }else {
                
                res.send(500,{ error: "Task Not Found"})
            }
        }
    
    )
    })
    //deletes a flow
    app.delete('/api/flows/:id', userLoggedIn, async (req,res) => {
        const { id } = req.params;

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

    //deletes a task

    app.delete('/api/flows/:id/:taskId', userLoggedIn, async (req,res) => {
        const { id, taskId } = req.params;

        const task = Flow.updateOne({
            
        },{'$pull': {"task": { "_id": taskId }
        }}, async (err) => {
            if(!err) {
                const flow = await Flow.findOne({
                    _id: id
                })
                res.send(flow);
            }else {
                console.log(err)
                
            }
        }
        )

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
            const flows = await Flow.find({
                _user: req.user.id
            })
    
            res.send(flows);
            
        }

        catch(err) {
            res.status(422).send(err);
        }

        

        
        
    })
}

