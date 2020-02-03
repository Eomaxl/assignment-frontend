const mongoose = require('mongoose');
const connectionUri = 'mongodb+srv://dbUser:Welcome1Github@cluster0-c8z1j.mongodb.net/test?retryWrites=true&w=majority';
    mongoose.connect(connectionUri,{useCreateIndex: true},{ useNewUrlParser: true}
        )


