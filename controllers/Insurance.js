function lifeInsurance(req, res) {
    res.json({
        "fulfillmentText": "text1",
        "fulfillmentMessages": [{
                "platform": "FACEBOOK",
                "card": {
                    "title": "Title: this is a title",
                    "subtitle": "This is an subtitle.  Text can include unicode characters including emoji 📱.",
                    "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                    "buttons": [{
                        "text": "Life Insurance Baby",
                        "postback": "https://assistant.google.com/"
                    }]
                }
            },
            {
                "platform": "FACEBOOK",
                "card": {
                    "title": "Title: this is a title",
                    "subtitle": "This is an subtitle.  Text can include unicode characters including emoji 📱.",
                    "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                    "buttons": [{
                        "text": "Life Insurance Baby",
                        "postback": "https://assistant.google.com/"
                    }]
                }
            },
            {
                "text": {
                    "text": [
                        "Life Insurance Baby!"
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
                    "title": "Title: this is a title",
                    "subtitle": "This is an subtitle.  Text can include unicode characters including emoji 📱.",
                    "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                    "buttons": [{
                        "text": "Car Insurance Baby",
                        "postback": "https://assistant.google.com/"
                    }]
                }
            },
            {
                "platform": "FACEBOOK",
                "card": {
                    "title": "Title: this is a title",
                    "subtitle": "This is an subtitle.  Text can include unicode characters including emoji 📱.",
                    "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                    "buttons": [{
                        "text": "Car Insurance Baby",
                        "postback": "https://assistant.google.com/"
                    }]
                }
            },
            {
                "text": {
                    "text": [
                        "Car Insurance Baby!"
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
                    "title": "Title: this is a title",
                    "subtitle": "This is an subtitle.  Text can include unicode characters including emoji 📱.",
                    "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                    "buttons": [{
                        "text": "Travel Insurance Baby",
                        "postback": "https://assistant.google.com/"
                    }]
                }
            },
            {
                "platform": "FACEBOOK",
                "card": {
                    "title": "Title: this is a title",
                    "subtitle": "This is an subtitle.  Text can include unicode characters including emoji 📱.",
                    "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                    "buttons": [{
                        "text": "Travel Insurance Baby",
                        "postback": "https://assistant.google.com/"
                    }]
                }
            },
            {
                "text": {
                    "text": [
                        "Travel Insurance Baby!"
                    ]
                }
            }
        ],
        "source": "RepInBot"
    })
}

module.exports = {

    insurance: (req, res) => {
        console.log(req.body);
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