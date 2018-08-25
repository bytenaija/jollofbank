let express = require('express');
const PORT = proces.env.PORT || 8000;
let app = express();

app.use(express.json());


app.use(express.urlEncoded({ extended: false }));

let InsuranceController = require('./controllers/Insurance');

app.post('/car', InsuranceController.car)
app.post('/travel', InsuranceController.travel)
app.post('/home', InsuranceController.home)
app.post('/life', InsuranceController.life)


app.listen(PORT, () => {
    console.log("Bot server up at PORT: ", PORT)
})