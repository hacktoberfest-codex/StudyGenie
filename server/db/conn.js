const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require("dotenv");
const validator = require("validator")

dotenv.config({path:"./config.env"});


mongoose.connect(process.env.DB).then( () => console.log("Success")).catch( (err) => console.log(err));

const users = new mongoose.Schema({
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
    },
    tokens:[
        {
            token:{
                type:String,
                required: true
            }
        }
    ]

});

users.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.confirm_password = await bcrypt.hash(this.confirm_password, 12);
    }
    next();
})

users.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({_id:this._id},process.env.SECRETKEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const Users = new mongoose.model("User",users);
module.exports = Users;

