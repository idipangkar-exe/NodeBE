const mongoose = require('mongoose');


// User Model || Schema
const userSchema = new mongoose.Schema({

    // Columns
    phoneNumber: {
        type: String,
        unique: true,
        sparse: true, // Allows multiple null values
        trim: true
    },

    phoneSuffix: {
        type: String,
        unique: false
    },

    // Username
    username: {
        type: String,
        trim: true,
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [30, 'Username cannot exceed 30 characters']
    },

    email: {
        type: String,
        required: [true, 'Email is required. Please enter a valid email address.'],
        unique: true,
        lowercase: true,
        trim: true,

        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Email format is invalid. Please enter a valid email address.',
        ],
    },

    emailOtp: {
        type: String
    },

    emailOtpExpiry: {
        type: Date
    },

    profilePicture: {
        type: String,
        default: null,
    },

    about: {
        type: String,
        maxlength: [200, 'About section cannot exceed 200 characters'],
        trim: true
    },

    lastSeen: {
        type: Date,
        default: null,
    },

    isOnline: {
        type: Boolean,
        default: false,
    },

    isVerified: {
        type: Boolean,
        default: false,
    },

    hasAgreed: {
        type: Boolean,
        default: false
    }
},
    {
        // Auto-manage createdAt & updatedAt
        timestamps: true
    }
)


const User = mongoose.model('User', userSchema);
module.exports = User;