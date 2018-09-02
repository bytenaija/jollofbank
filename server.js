let express = require('express');
const PORT = process.env.PORT || 8000;
let app = express();

app.use(express.json());


app.use(express.urlencoded({ extended: false }));

let InsuranceController = require('./controllers/Insurance');


app.post('/travel', InsuranceController.insurance)
app.post('/ussd', InsuranceController.banking)



app.listen(PORT, () => {
    console.log("Bot server up at PORT: ", PORT)
})