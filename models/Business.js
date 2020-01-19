const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    goal: {
        type: String,
        minlength: 5
    },
    usersJoined: {
        type: Number
    },
    interest: {
        type: [String]
    }
});

module.exports = Business = mongoose.model("Business", BusinessSchema);