const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const validator = require('validator');

dotenv.config({path:"./config.env"});

const users = new mongoose.schema({
    name:{
        type: String,
        required: true,
        min:2,
        max:30
    },
    password:{
        type: String,
        required: true,
        unique: true,
        min:8,
        max:12
    },
    username:{
        type: String,
        required: true,
        unique: true,
        min:2,
        max:26
    },
    email_id:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isEmail(value)) throw new error("Invalid Email")
        }
    },
    mobile_no:{
        type:Number,
        required: true,
        unique: true,
        min:10
    },
    confirm_password:{
        type: String,
        required: true,
        unique: true,
        min:8,
        max:12
    }

});
users.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 12);
    }
    next();
})

users.method.generateAuthToken = async function()
{
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRETKEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch(error) {
        console.log(error);
    }
}

const Users = new mongoose.model("DUser",users);
module.exports = Users;
