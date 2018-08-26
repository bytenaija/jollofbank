function lifeInsurance(req, res) {
    res.json({
        "fulfillmentText": "text1",
        "fulfillmentMessages": [{
                "platform": "FACEBOOK",
                "replies": [
                    "Quick reply 1",
                    "Quick reply 2",
                    "Quick reply 3"
                ],
                "title": "Quick Reply Title",
                "type": 2
            },

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
        console.dir(req.body.originalDetectIntentRequest.payload.data.sender.id);
        console.dir(req.body.queryResult.intent.displayName)
        switch (req.body.queryResult.intent.displayName) {
            case 'Life Insurance':
                console.log("Life Insurance")

                lifeInsurance(req, res);
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