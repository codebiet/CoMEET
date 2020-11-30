const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    Specilist: {
        type: String,
        required: true
    },
    Branch: {
        type: String,
        required: true
    },
    Year: {
        type: String,
        required: true
    }

},{
    timestamps: true
});

const User = mongoose.model('User',userSchema);
module.exports = User;