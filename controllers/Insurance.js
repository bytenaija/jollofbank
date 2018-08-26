function lifeInsurance(req, res) {
    res.json({
        "fulfillmentText": "text1",
        "fulfillmentMessages": [{
                "platform": "FACEBOOK",
                "text": {

                    "text": [

                        "You insurance needs is evaluated at 20000 USD per day."

                    ]

                }
            },
            {
                "platform": "FACEBOOK",
                "quickReplies": {

                    "title": "Do you want to continue?",

                    "quickReplies": [

                        "Yes",

                        "No",



                    ]

                }
            }

        ],
        "source": "RepInBot"
    })
}

function lifeInsuranceConfirm(req, res) {
    res.json({
        "fulfillmentText": "text1",
        "fulfillmentMessages": [{
                "platform": "FACEBOOK",
                "text": {

                    "text": [

                        "We have booked your insurance. You will pay 20000 USD per day."

                    ]

                }
            },

            {
                "platform": "FACEBOOK",
                "text": {

                    "text": [

                        "Thank you for your patronage."

                    ]

                }
            }


        ],
        "source": "RepInBot"
    })
}

function carInsurance(req, res) {
    res.json({
        "fulfillmentText": "text1",
        "fulfillmentMessages": [{
                "platform": "FACEBOOK",
                "card": {
                    "title": "Car Insurance",
                    "subtitle": "Your Car Insurance policy has been generated. We will email you the contract for signing.",
                    "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                    "buttons": [{
                        "text": "Your Car Insurance policy has been generated. We will email you the contract for signing",
                        "postback": "https://assistant.google.com/"
                    }]
                }
            },
            {
                "platform": "FACEBOOK",
                "card": {
                    "title": "Car Insurance",
                    "subtitle": "Your Car Insurance policy has been generated. We will email you the contract for signing.",
                    "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                    "buttons": [{
                        "text": "Your Car Insurance policy has been generated. We will email you the contract for signing",
                        "postback": "https://assistant.google.com/"
                    }]
                }
            },
            {
                "text": {
                    "text": [
                        "Your Car Insurance policy has been generated. We will email you the contract for signing!"
                    ]
                }
            }
        ],
        "source": "RepInBot"
    })
}

function travelInsurance(req, res) {
    res.json({
        "fulfillmentText": "text1",
        "fulfillmentMessages": [{
                "platform": "FACEBOOK",
                "card": {
                    "title": "Travel Insurance",
                    "subtitle": "Your Travel Insurance policy has been generated. We will email you the contract for signing.",
                    "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                    "buttons": [{
                        "text": "Your Travel Insurance policy has been generated. We will email you the contract for signing",
                        "postback": "https://assistant.google.com/"
                    }]
                }
            },
            {
                "platform": "FACEBOOK",
                "card": {
                    "title": "Travel Insurance",
                    "subtitle": "Your Travel Insurance policy has been generated. We will email you the contract for signing.",
                    "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                    "buttons": [{
                        "text": "Your Travel Insurance policy has been generated. We will email you the contract for signing",
                        "postback": "https://assistant.google.com/"
                    }]
                }
            },
            {
                "text": {
                    "text": [
                        "Your Travel Insurance policy has been generated. We will email you the contract for signing!"
                    ]
                }
            }
        ],
        "source": "RepInBot"
    })
}

module.exports = {

    insurance: (req, res) => {
        console.dir(req.body.queryResult)
            //  console.dir(req.body.originalDetectIntentRequest.payload.data.sender.id);
        console.dir(req.body.queryResult.action)
        switch (req.body.queryResult.action) {
            case 'LifeInsurance.InsuranceType':
                console.log("Life Insurance")

                lifeInsurance(req, res);
                break;
            case 'LifeInsurance.Confirm':
                console.log("Life Insurance Confirm")

                lifeInsuranceConfirm(req, res);
                break;
            case 'Travel Insurance':
                console.log("Travel Insurance")

                travelInsurance(req, res);
                break;

            case 'Car Insurance':
                console.log("Car Insurance")

                carInsurance(req, res);
                break;
        }
        // lifeInsurance(req, res);
    }


}