const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    businessName: {
        type: String,
        required: true,
        maxlength: 50
    },
    businessGoal: {
        type: String,
        minlength: 5
    },
    businessLogo: {
        type: String
    },
    usersJoined: {
        type: Number,
        default: 1
    },
    interest: {
        type: [String]
    }
});

module.exports = Business = mongoose.model("Business", BusinessSchema);