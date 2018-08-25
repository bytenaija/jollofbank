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
    car: (req, res) => {
        console.dir(req.body)
        res.json({
            "speech": "Your car insurance needs have been served",
            "displayText": "Your car insurance needs have been served"
        })
    },

    travel: (req, res) => {
        console.dir(req.body.queryResult.intent.displayName)
            /* switch (req.body.result.displayName) {
                case 'Life Insurance':
                    console.log("Life Insurance")

                    lifeInsurance(req, res);
                    break;

                case 'Travel Insurance':
                    console.log("Travel Insurance")

                    travelInsurance(req, res);
                    break;
            } */
        lifeInsurance(req, res);
    },

    home: (req, res) => {
        console.dir(req.body)
        res.json({
            "speech": "Your home insurance needs have been served",
            "displayText": "Your home insurance needs have been served"
        })
    },

    life: (req, res) => {
        console.dir(req.body)
        res.json({
            "speech": "Your life insurance needs have been served",
            "displayText": "life travel insurance needs have been served"
        })
    },
}