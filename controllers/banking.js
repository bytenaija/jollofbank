let currentChoice, previousChoice , agent;
const { WebhookClient } = require('dialogflow-fulfillment');
const { Suggestion, Card } = require('dialogflow-fulfillment');
const dateformat = require('dateformat');
const moment = require('moment');


function accountBalance(agent) {
    console.dir(agent.client)
    const userId = agent;
    agent.add("You have two account with us.")
    agent.add("Your savings account balance is NGN 506, 000")
    agent.add("Your current account balance is NGN 1, 098, 000")
}

function rewards(agent) {
    agent.add("Get a chance for an all expense paid trip to Dubai if you spend minimum of NGN 300, 000 in six days")
}



function recentTransactions(agent) {
    agent.add("The three more recent transactions are:")
    agent.add("D&G purse purchased from Dolce & Gabana premium stores in South Africa for NGN 200, 000 on Monday, 27th August 2018");
    agent.add("Payment to taxify on September 4, 2017 for NGN 1500")
    agent.add("Airtime purchase for 090865677446 on September 19, 2018 for NGN 5,000")
}


function airtime(agent) {
    agent.add("Airtime purchase will be implemented here")
}

function data(agent) {
    agent.add("Data Purchase goes here")
}

function smsBundle(agent) {
    agent.add("SMS Bundle purchase goes here")
}

function makePayment(agent) {
    agent.add("Making payments will be implemented here")
}

function buyElectricity(agent) {
    agent.add("Electricity purchase will be implemented here")
}

function statement(agent) {
    agent.add("Mini statement goes here")
}

function help(agent) {
    welcome(agent);
}

function faqs(agent) {
    agent.add("FAQs and Terms and Conditions goes here")
}

function USSD(agent) {
agent = agent;

    currentChoice = agent.parameters.choice;
    currentChoice = Number(currentChoice);
    console.log(currentChoice);


    switch (currentChoice) {

        case 1:
            console.log(currentChoice);
            accountBalance(agent);
            break;

        case 2:
            rewards(agent);
            break;

        case 3:
            recentTransactions(agent);
            break;

        case 4:
            airtime(agent);
            break;

        case 5:



            data(agent);

            break;

        case 6:
            smsBundle(agent);

            break;

        case 7:
            makePayment(agent);

            break;

        case 8:
            buyElectricity(agent);
            break;

        case 9:
            statement(agent);


            break;

        case 10:
            help(agent);
            break;

        case 11:
            faqs(agent);
            break;
    }

}




function welcome(agent) {
    agent.add("Welcome to RedPages Bank. What do you want to do today?");
    agent.add(" 1. See my account balances");
    agent.add("2. See my RedPages Rewards");
    agent.add("3. See my recent transactions");
    agent.add("4. Buy Airtime");
    agent.add("5. Buy Data");
    agent.add("6. Buy an SMS bundle");
    agent.add("7. Make a Payment");
    agent.add("8. Buy PrePaid Electricity");
    agent.add("9. Get a mini statement");
    agent.add("10. Get help with ChatBanking");
    agent.add("11. FAQs and Terms and Conditions");
}

function confirm(agent) {
    let confirm = agent.parameters.confirm == 99 ? 'Yes' : 'No';
    if (confirm == 'Yes') {
        switch (currentChoice) {

            case 1:
                
                accountBalanceConfirm(agent);
                break;
    
            case 2:
                rewardsConfirm(agent);
                break;
    
            case 3:
                recentTransactionsConfirm(agent);
                break;
    
            case 4:
                airtimeConfirm(agent);
                break;
    
            case 5:
    
    
    
                dataConfirm(agent);
    
                break;
    
            case 6:
                smsBundleConfirm(agent);
    
                break;
    
            case 7:
                makePaymentConfirm(agent);
    
                break;
    
            case 8:
                buyElectricityConfirm(agent);
                break;
    
            case 9:
                statementConfirm(agent);
    
    
                break;
    
                    }
    } else {
        currentChoice = null;
        agent.clearOutgoingContexts();
        welcome(agent);

    }
}


module.exports = {

    banking: (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });
        console.log(agent.intent);
        let intentMap = new Map(); // Map functions to Dialogflow intent names
        intentMap.set('Banking', USSD);
        intentMap.set('Confirm', confirm);
        intentMap.set('Welcome', welcome);
        agent.handleRequest(intentMap);
    }


}