const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    interest: {
        type: [String]
    },
    token: {
        type: String
    }
});

UserSchema.pre('save', function(next) {
    const user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
})

UserSchema.methods.comparePassword = function (plainPassword, callback) {
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if (err) return callback(err);
        callback(null, isMatch)
    })
}

UserSchema.methods.generateTokens = function (cb) {
    const user = this;
    const token = jwt.sign(user._id.toHexString(), 'secret')
    user.token = token;
    user.save( (err, user) => {
        if (err) return cb(err);
        cb(null, user); 
    })
} 

UserSchema.statics.findByToken = function (token, cb) {
    const users = this;
    console.log(users);
    
    jwt.verify(token, 'secret', function (err, decode) {
        users.findOne({"_id": decode, "token": token}, (err, user) => { //plz don't use .then
            if(err) return cb(err);
            cb(null, user);
        })
    })
}

module.exports = User = mongoose.model("User", UserSchema);