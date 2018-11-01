const dateformat = require('dateformat');
const pdf = require('pdfjs')
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const path = require('path');
const Account = require('../models/Account');
const AccountBalance = require('../models/AccountBalance');

function miniStatement(agent) {
    
}


function rechargePhone(agent) {
    
}

function openAccount(agent) {
    let accountNumber = "044" + Math.floor(1000000 + Math.random() * 9000000);;
            if (accountNumber.length > 10) {
                accountNumber = accountNumber.substr(0, 10);
            }
            let data = {};
            data.userId = uuidv4();
            data.phoneNumber = memory.phoneNumber.raw
            data.accountType = memory.accountType.raw
            data.dob = dateformat(new Date(memory.dob.raw), "dd/mm/yyyy")
            data.address = memory.address.raw
            data.bvn = memory.bvn.value
            data.accountNumber = accountNumber;

            //console.dir(data);
            Account.create(data).then(account => {
                let accountNumber = account.accountNumber;
                const doc = new pdf.Document({
                    font: require('pdfjs/font/Helvetica'),
                    padding: 100
                })
                let filename = uuidv4() + ".pdf";
                // console.dir(filename)
                doc.pipe(fs.createWriteStream(path.join(__dirname, "../", "public", 'account', filename)));
                doc
                    .text(accountNumber, 100, 100)

                doc.end()

                let fileUrl = `https://bfa6e387.ngrok.io/public/account/${filename}`;
               agent.add("Your account have been opened successfully")

               agent.add(`Your account Number ends with ${accountNumber.substring(6)}`)
                agent.add(`Download this file to get you full account number ${fileUrl}`)
            })
}

function transferFunds(agent) {
    
}

module.exports = {

    banking: (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });
        console.log(agent.intent);
        let intentMap = new Map(); // Map functions to Dialogflow intent names
        intentMap.set('Account Opening', openAccount);
        intentMap.set('Transfer', transferFunds);
        intentMap.set('Transactions', miniStatement);
        intentMap.set('Airtime', rechargePhone);
        agent.handleRequest(intentMap);
    }


}