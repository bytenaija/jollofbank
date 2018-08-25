module.exports = {
    car: (req, res) => {
        console.dir(req.body)
        res.json({
            "speech": "Your car insurance needs have been served",
            "displayText": "Your car insurance needs have been served"
        })
    },

    travel: (req, res) => {
        console.dir(req.body)
        res.json({
            "fulfillmentText": "text1",
            "fulfillmentMessages": [{
                    "platform": "FACEBOOK",
                    "card": {
                        "title": "Title: this is a title",
                        "subtitle": "This is an subtitle.  Text can include unicode characters including emoji 📱.",
                        "imageUri": "https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png",
                        "buttons": [{
                            "text": "This is a button",
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
                            "text": "This is a button",
                            "postback": "https://assistant.google.com/"
                        }]
                    }
                },
                {
                    "text": {
                        "text": [
                            "Hello, World!"
                        ]
                    }
                }
            ],
            "source": "Frakcool-Bot"
        })
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