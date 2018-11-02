const mongoose = require('mongoose');
const {Schema} = mongoose;

const flowSchema = new Schema ({
    name: String,
    departments: [String],
    stages: [String],
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    createdAt: Date,
    task: [{ 
        taskName: String,
        description: String,
        createdAt: Date,
        completedAt: Date,
        stage: String
     }]
})

mongoose.model('flows', flowSchema);
