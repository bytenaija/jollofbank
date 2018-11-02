const dateformat = require('dateformat');
const pdf = require('pdfjs')
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const path = require('path');
const Account = require('../models/Account');
const AccountBalance = require('../models/AccountBalance');
const {WebhookClient} = require('dialogflow-fulfillment')

function miniStatement(agent) {
    
}

function accountBalance(agent){
    const userId = conversation._request.message.channelConversation.userId;
        const accountType = conversation.properties().accountType;

        conversation.logger().info('BalanceRetrieval: getting balance for account type=' + accountType);
        Account.findOne({ userId: userId, accountType: accountType }).then(account => {
            
            if (account) {
                AccountBalance.findOne({ accountId: account._id }).then(balance => {
        
                    agent.add('The balance in your ' + accountType + ' account (' + account.accountNumber + ') is NGN' + String(balance.balance));
                   

                })

               
            } else {
               
                agent.add('Sorry, you don\'t have a ' + accountType + ' account!' );
               

            }
        })
}

function rechargePhone(agent) {
    
}

function openAccount(agent) {
    console.dir(agent)
    return new Promise((resolve, reject)=>{

    

    let accountNumber = "044" + Math.floor(1000000 + Math.random() * 9000000);;
            if (accountNumber.length > 10) {
                accountNumber = accountNumber.substr(0, 10);
            }
            let data = {};
            data.userId = uuidv4();
            data.accountType = agent.parameters.accountType
            data.email = agent.parameters.email
            data.bvn = agent.parameters.bvn
            data.name = agent.parameters.name
            data.accountNumber = accountNumber;

            //console.dir(data);
           Account.create(data).then(account => {
                let accountNumber = account.accountNumber;
                console.log(JSON.stringify(account))
                // const doc = new pdf.Document({
                //     font: require('pdfjs/font/Helvetica'),
                //     padding: 100
                // })
                // let filename = uuidv4() + ".pdf";
                // // console.dir(filename)
                // doc.pipe(fs.createWriteStream(path.join(__dirname, "../", "public", 'account', filename)));
                // doc
                //     .text(accountNumber, 100, 100)

                // doc.end()

                // let fileUrl = `https://repinbot.herokuapp.com/public/account/${filename}`;
               agent.add("Your account have been opened successfully")

               agent.add(`Your account Number is ${accountNumber}`)
              
                //agent.add(`Download this file to get you full account number ${fileUrl}`)
            })
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
        intentMap.set('Account Balance', accountBalance);
        agent.handleRequest(intentMap);
    }


}