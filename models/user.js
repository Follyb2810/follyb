import { Schema,model,models } from "mongoose";

const UserSchema=new Schema({
    email:{
        type:String,
        unique:[true,'Email already exists!'],
        require:[true,'Email is require']
    },
    username:{
        type:String,
        match:[/^(?=.{8,20})(?.[_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
        'username invalid, it should contain 8-20 alpanumeric letter and must be unique'
    ]
    },
    image:{
        type:String 
    }
})


const User = models.User || model('User',UserSchema)