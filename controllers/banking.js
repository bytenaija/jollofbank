let currentChoice, previousChoice , agent;
const { WebhookClient } = require('dialogflow-fulfillment');
const { Suggestion, Card } = require('dialogflow-fulfillment');
const dateformat = require('dateformat');
const moment = require('moment');


function accountBalance(agent) {
    console.dir(agent)
    const userId = agent;
    agent.add("You can retrieve your account balance from here")
}

function rewards(agent) {
    agent.add("You get so much rewards here, you will be tired of rewards")
}



function recentTransactions(agent) {
    agent.add("Recent transactions will be retrieved here")
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

    currentChoice = agent.choice;
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
        console.log('Confimation');



        agent.add("Thank you for your patronage.")
        agent.clearOutgoingContexts();


    } else {

        agent.add(`Our agent will follow up with you on how best we can help meet your banking needs`);

        agent.clearOutgoingContexts();



    }
}


module.exports = {

    banking: (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });
        console.log(agent.intent);
        let intentMap = new Map(); // Map functions to Dialogflow intent names
        intentMap.set('Banking', banking);
        intentMap.set('Confirm', confirm);
        intentMap.set('Welcome', welcome);
        agent.handleRequest(intentMap);
    }


}