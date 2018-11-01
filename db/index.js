const mongoose = require('mongoose');

mongoose.connect("mongodb://bot:recastbot18@ds119652.mlab.com:19652/redpages", (err) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    console.log("Connected to mongo db")
})