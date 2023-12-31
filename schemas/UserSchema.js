const mongoose = require('mongoose');
const UserSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
        },
    
    },
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);
module.exports = mongoose.model('User',UserSchema);