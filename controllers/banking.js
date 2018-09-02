let currentChoice, previousChoice;
const { WebhookClient } = require('dialogflow-fulfillment');
const { Suggestion, Card } = require('dialogflow-fulfillment');
const dateformat = require('dateformat');
const moment = require('moment');

function USSD(agent) {

    console.dir("This is it now",
        agent.parameters)

    currentChoice = agent.choice;



    agent.add("Do you want to continue?")
    agent.add(new Suggestion('Yes'))
    agent.add(new Suggestion('No'))



}


function confirm(agent) {
    let confirm = agent.parameters.confirm == 0 ? 'Yes' : 'No';
    if (confirm == 'Yes') {
        console.log('Confimation');

        agent.add(`We have booked your insurance. You will pay ${amount} Naira per year.`);

        agent.add("Thank you for your patronage.")
        agent.clearOutgoingContexts();
        agent.clearContext("lifeinsurance-custom-followup");

    } else {


        agent.add(`You have declined to insure your ${year} ${brand} ${model} for ${amount} Naira per year.`)


        agent.add(`Our agent will follow up with you on how best we can help meet your insurance needs`);

        agent.clearOutgoingContexts();
        agent.clearContext("lifeinsurance-custom-followup");


    }
}


module.exports = {

    banking: (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });
        console.log(agent.intent);
        let intentMap = new Map(); // Map functions to Dialogflow intent names
        intentMap.set('Banking', USSD);
        intentMap.set('Confirm', confirm);

        agent.handleRequest(intentMap);
    }


}