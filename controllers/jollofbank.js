const dateformat = require('dateformat');
const pdf = require('pdfjs')
const uuidv4 = require('uuid/v4');
const fs = require('fs');
const path = require('path');
const Account = require('../models/Account');
const AccountBalance = require('../models/AccountBalance');
const User = require('../models/user');
const Transaction = require('../models/Transaction');
const { WebhookClient } = require('dialogflow-fulfillment')

function miniStatement(agent) {

}

function accountBalance(agent) {
    const userId = conversation._request.message.channelConversation.userId;
    const accountType = conversation.properties().accountType;

    conversation.logger().info('BalanceRetrieval: getting balance for account type=' + accountType);
    Account.findOne({ userId: userId, accountType: accountType }).then(account => {

        if (account) {
            AccountBalance.findOne({ accountId: account._id }).then(balance => {

                agent.add('The balance in your ' + accountType + ' account (' + account.accountNumber + ') is NGN' + String(balance.balance));


            })


        } else {

            agent.add('Sorry, you don\'t have a ' + accountType + ' account!');


        }
    })
}

function rechargePhone(agent) {
    return new Promise((resolve, reject) => {

        let context = agent.contexts.filter(context => {
            return context.name === 'user-info';
        })

        if (context.length !== 0) {
            AccountBalance.find({ accountId: context.parameters.accountId }).then(account => {
                if (account) {
                    if (account.balance >= agent.parameters.amount) {
                        Transaction.create({ accountId: account.accountId, description: `Purchase of NGN ${agent.parameters.amount} for ${agent.parameters.phoneNo}`, amount: agent.parameters.amount }).then(transaction => {
                            agent.add(`Airtime of ${agent.parameters.amount} has been successfully purchased for ${agent.parameters.phoneNo}`);
                        });
                    } else {
                        agent.add(`You do not have sufficient amount in your account to complete this transaction`);
                    }

                }

                resolve(agent)
            })
        } else {
            agent.add(`It seems you may not have an account with us. Please open an account before trying this transaction`);
        }
    })
}

function openAccount(agent) {
    console.dir(agent)
    return new Promise((resolve, reject) => {
        User.findOne({ email: agent.parameters.email }).then(user => {
            console.log("user", user)
            if (user) {


                let accountNumber = "044" + Math.floor(1000000 + Math.random() * 9000000);;
                if (accountNumber.length > 10) {
                    accountNumber = accountNumber.substr(0, 10);
                }
                let data = {};
                data.userId = user._id;
                data.accountType = agent.parameters.accountType
                data.accountNumber = accountNumber;

                //console.dir(data);
                Account.create(data).then(account => {
                    let accountNumber = account.accountNumber;
                    AccountBalance.create({ accountId: account._id, balance: 100000 }).then(accountBalance => {
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

                        agent.add(`Your account have been opened successfully. Your account Number is ${accountNumber}`)
                        const context = { 'name': "user-info", 'lifespan': 20, 'parameters': { 'accountId': account._id, 'userId': account.userId } };

                        agent.setContext(context)
                        //agent.add(`Download this file to get you full account number ${fileUrl}`)
                        resolve(agent)
                    })
                })


            } else {
                User.create({ 'email': agent.parameters.email, 'name': agent.parameters.name, 'bvn': agent.parameters.bvn }).then(user => {

                    let accountNumber = "044" + Math.floor(1000000 + Math.random() * 9000000);;
                    if (accountNumber.length > 10) {
                        accountNumber = accountNumber.substr(0, 10);
                    }
                    let data = {};
                    data.userId = user._id;
                    data.accountType = agent.parameters.accountType
                    data.accountNumber = accountNumber;

                    //console.dir(data);
                    Account.create(data).then(account => {
                        let accountNumber = account.accountNumber;
                        AccountBalance.create({ accountId: account._id, balance: 100000 }).then(accountBalance => {
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

                            agent.add(`Your account have been opened successfully. Your account Number is ${accountNumber}`)
                            const context = { 'name': "user-info", 'lifespan': 20, 'parameters': { 'accountId': account._id, 'userId': account.userId } };

                            agent.setContext(context)
                            //agent.add(`Download this file to get you full account number ${fileUrl}`)
                            resolve(agent)
                        })
                    })

                })
            }
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