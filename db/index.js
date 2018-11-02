const mongoose = require('mongoose');
const {mongodb} = require('./config');

mongoose.connect(`mongodb://${mongodb.user}:${mongodb.pass}@ds119652.mlab.com:19652/redpages`, (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    console.log("Connected to mongo db")
})