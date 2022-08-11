const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/registerdata",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`connection succesful`);
}).catch((e) => {
    console.log(`connection failed`);
    console.log(e);
})