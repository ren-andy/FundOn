const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
const Business = require('./models/Business')
const config = require('./config/key');
const auth = require('./middleware/auth');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;

mongoose
    .connect(config.mongoURI,
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("💻 Mondodb Connected"))
    .catch(err => console.error(err));

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.get('/api/user/auth', auth, (req, res) => {
    res.status(200).json({
        _id: req._id,
        isAuth: true,
        email: req.user.email,
        lastname: req.user.lastname,
        role: req.user.role
    })
})
/* 
app.get('/api/user/:id', (req, res) => {
    User.findById(res.params.id)
        .then(userData => {
            res.json(userData);
        })
}) */

app.get('/api/users/', (req, res) => {
    User.find({})
        .then(users => {
            res.json(users)
        })
})

app.post('/api/user/register', (req, res) => {
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) {
            return res.json({ success: false, err })
        } else {
            return res.status(200).json({ success: true, userData: doc })
        }
    })
})

app.post('/api/user/login', (req, res) => {

    User.findOne({ email: req.body.email }, (err, user) => {
        // find email
        if (!user) {
            return res.json({
                isInvalidPassword: false,
                isInvalidEmail: true
               // message: "Auth Failed, no such email exists"
            })
        }

        // compare password
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) {
                return res.json({
                    isInvalidPassword: true,
                    isInvalidEmail: false
                })
            }
        })

        user.generateTokens((err, user) => {
            if (err) return res.status(400).send(err);
            res.cookie("x_auth", user.token)
                .status(200)
                .json({
                    isInvalidPassword: false,
                    isInvalidEmail: false
                })
        })
    })
})

app.get('/api/user/logout', auth, (req, res) => {
    User.findOneAndUpdate({_id: req.user._id}, {token: ""}, (err, doc) => {
        if (err) return res.json({logoutSuccess: false, err});
        return res.status(200).json({logoutSuccess: true});
    })
})

app.get('/api/business/', (req, res) => {
    Business.find({})
        .then(business => {
            res.json(business)
        })
})

app.post('/api/business/register', (req, res) => {
    const business = new Business(req.body);

    business.save((err, doc) => {
        if (err) {
            return res.json({ success: false, err })
        } else {
            return res.status(200).json({ success: true, businessData: doc })
        }
    })
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));