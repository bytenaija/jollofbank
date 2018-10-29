function miniStatement(agent) {
    
}


function rechargePhone(agent) {
    
}

function openAccount(agent) {
    
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