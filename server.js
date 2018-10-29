let express = require('express');
const PORT = process.env.PORT || 8000;
let app = express();

app.use(express.json());


app.use(express.urlencoded({ extended: false }));

let InsuranceController = require('./controllers/Insurance');
let BankingController = require('./controllers/banking');

let JollofBankController = require('./controllers/jollofbank');

app.post('/travel', InsuranceController.insurance)
app.post('/ussd', BankingController.banking)

app.post('/jollofbank', JollofBankController.banking)



app.listen(PORT, () => {
    console.log("Bot server up at PORT: ", PORT)
})