let brand, amount, model, year, firstname, lastname, age, InsuranceType, pre, verb, from,
    email,
    phonenumber,
    dateFrom,
    dateTo,
    to,
    days;
const { WebhookClient } = require('dialogflow-fulfillment');
const { Suggestion, Card } = require('dialogflow-fulfillment');
const dateformat = require('dateformat');
const moment = require('moment');

function lifeInsurance(agent) {

    console.dir("This is it now",
        agent.parameters)

    firstname = agent.parameters.firstname,
        lastname = agent.parameters.lastname,
        age = agent.parameters.age,
        insuranceType = agent.parameters.insuranceType,
        pre = agent.parameters.pre,
        phoneNumber = agent.parameters.phone,
        email = agent.parameters.email,
        amount = Math.floor(1000 + Math.random() * 30000);
    verb = pre == 'Yes' ? 'with' : 'without';
    console.log(verb);


    agent.add(`You insurance premium for ${firstname} ${lastname}, ${age.amount} ${age.unit}, ${verb} pre-existing conditions is evaluated at ${amount} naira per year.`);

    agent.add("Do you want to continue?")
    agent.add(new Suggestion('Yes'))
    agent.add(new Suggestion('No'))



}

function lifeInsuranceConfirm(agent) {
    agent.clearContext("lifeinsurance-custom-followup");
    if (agent.parameters.book == 'Yes') {


        agent.add(`You have purchased life insurance policy for  ${firstname} ${lastname}, ${age.amount} ${age.unit}, ${verb} pre-existing conditions  for ${amount} Naira per year.`);


        agent.add("Thank you for your patronage.")
        agent.clearOutgoingContexts();
        agent.clearContext("lifeinsurance-custom-followup");

    } else {


        agent.add(`You have declined to complete life insurance policy purchase for  ${firstname} ${lastname}, ${age.amount} ${age.unit}, ${verb} pre-existing conditions  for ${amount} Naira per year.`)
        agent.add(`Our agent will follow up with you on how best we can help meet your insurance needs`)
        agent.clearOutgoingContexts();
        webhookClient.clearContext("lifeinsurance-custom-followup");


    }

}


function travelInsurance(agent) {
    agent.clearContext("lifeinsurance-custom-followup");
    console.dir(agent.parameters);
    from = agent.parameters.from,
        firstname = agent.parameters.firstname,
        lastname = agent.parameters.lastname,
        email = agent.parameters.email,
        phonenumber = agent.parameters.phonenumber,
        dateFrom = dateformat(agent.parameters.dateFrom, "dd/mm/yyyy"),
        dateTo = dateformat(agent.parameters.dateTo, "dd/mm/yyyy"),
        to = agent.parameters.to,
        amount = Math.floor(1000 + Math.random() * 10000);

    let a = moment([agent.parameters.dateFrom]),
        b = moment([agent.parameters.dateTo]);
    days = Math.abs(a.diff(b, 'days')) + 1;

    console.log(days);


    agent.add(`You want travel insurance coverage for your ${days} day(s) journey starting from ${dateFrom} to ${dateTo}`)
    agent.add(`Premium for this journey will cost you ${amount} Naira payable before ${dateFrom}.`);



    agent.add("Do you want to continue?")

    agent.add(new Suggestion('Yes'))
    agent.add(new Suggestion('No'))

}

function travelInsuranceConfirm(agent) {
    agent.clearContext("lifeinsurance-custom-followup");
    if (agent.parameters.confirm == 'Yes') {
        console.log('Confimation');

        agent.add(`We have booked your insurance. You will pay ${amount} Naira for this journey.`);

        agent.add("Thank you for your patronage.")
        agent.clearOutgoingContexts();
        agent.clearContext("lifeinsurance-custom-followup");

    } else {


        agent.add(`You have declined to insure your journey for ${amount} Naira per year.`)


        agent.add(`Our agent will follow up with you on how best we can help meet your insurance needs`);

        agent.clearOutgoingContexts();
        agent.clearContext("lifeinsurance-custom-followup");


    }
}

function carInsurance(agent) {
    agent.clearContext("lifeinsurance-custom-followup");
    console.log(agent.parameters)

    brand = agent.parameters.brand,
        year = agent.parameters.Year,
        model = agent.parameters.model,
        amount = Math.floor(1000 + Math.random() * 10000);


    agent.add(`You insurance needs for a ${year} ${brand} ${model} is evaluated at ${amount} Naira per year.`);



    agent.add("Do you want to continue?")

    agent.add(new Suggestion('Yes'))
    agent.add(new Suggestion('No'))

    agent.setContext({
        name: 'carinsurance-followup',
        lifespan: 1,
        parameters: { brand: brand, model: model, Year: year, amount: amount }
    });





}


function carInsuranceConfirm(agent) {
    agent.clearContext("lifeinsurance-custom-followup");
    if (agent.parameters.confirm == 'Yes') {
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

    insurance: (req, res) => {
        const agent = new WebhookClient({ request: req, response: res });
        console.log(agent.intent);
        let intentMap = new Map(); // Map functions to Dialogflow intent names
        intentMap.set('Car Insurance', carInsurance);
        intentMap.set('Car Insurance - Confirm', carInsuranceConfirm);
        intentMap.set('Life Insurance - Types', lifeInsurance);
        intentMap.set('Life Insurance.Confirm', lifeInsuranceConfirm);
        intentMap.set('Travel Insurance', travelInsurance);
        intentMap.set('Travel Insurance.Confirm', travelInsuranceConfirm);
        agent.handleRequest(intentMap);
    }


}