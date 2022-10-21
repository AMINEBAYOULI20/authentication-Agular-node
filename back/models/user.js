const mongoose = require("mongoose");
const schema = mongoose.Schema


const User = new schema({

    FirstName: {
        type: String,

    },
    LastName: {
        type: String,

    },

    mail: {
        type: String,
        unique: true

    },
    password: {
        type: String,
    },

    role: {
        type: String,
        enum: ["admin", "client"]
    },

}
);


module.exports = mongoose.model("user", User);

