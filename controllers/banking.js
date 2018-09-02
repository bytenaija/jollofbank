let currentChoice, previousChoice;
const { WebhookClient } = require('dialogflow-fulfillment');
const { Suggestion, Card } = require('dialogflow-fulfillment');
const dateformat = require('dateformat');
const moment = require('moment');

function USSD(agent) {

    console.dir("This is it now",
        agent.parameters)

    currentChoice = agent.choice;



    agent.add("Enter 99 to continue or 0 otherwise")
    agent.add(new Suggestion('99'))
    agent.add(new Suggestion('0'))



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
        // console.log(agent.intent);
        let intentMap = new Map(); // Map functions to Dialogflow intent names
        intentMap.set('Banking', USSD);
        intentMap.set('Confirm', confirm);
        intentMap.set('Welcome', welcome);
        agent.handleRequest(intentMap);
    }


}