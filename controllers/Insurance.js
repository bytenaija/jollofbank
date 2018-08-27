let outputContexts, brand, amount, model, year, firstname, lastname, age, InsuranceType, pre, phoneNumber, email;

function lifeInsurance(req, res) {
    outputContexts = req.body.queryResult.outputContexts;
    console.dir(outputContexts.length);
    outputContexts = outputContexts[outputContexts.length - 1].parameters;

    console.dir("This is it now",
        outputContexts)

    firstname = outputContexts.firstname,
        lastname = outputContexts.lastname,
        age = outputContexts.age,
        insuranceType = outputContexts.insuranceType,
        pre = outputContexts.pre,
        phoneNumber = outputContexts.phone,
        email = outputContexts.email,
        amount = Math.floor(1000 + Math.random() * 30000);
    let verb = pre == 'Yes' ? 'with' : 'without';
    console.log(verb);

    res.json({
        "fulfillmentText": "text1",
        "fulfillmentMessages": [{

                "text": {

                    "text": [

                        `You insurance premium for ${firstname} ${lastname}, ${age}, ${verb} pre-existing conditions is evaluated at ${amount} naira per year.`

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
            },

            {

                "text": {

                    "text": [

                        `Do you want to continue?`

                    ]

                }
            },

        ],
        "source": "RepInBot"
    })
}

function lifeInsuranceConfirm(req, res) {
    if (req.body.queryResult.parameters.book == 'Yes') {
        res.json({
            "fulfillmentText": "text1",
            "fulfillmentMessages": [{

                    "text": {

                        "text": [

                            `You have purchased life insurance policy for  ${firstname} ${lastname}, ${age}, ${verb} pre-existing conditions  for ${amount} Naira per year.`

                        ]

                    }
                },

                {
                    "text": {

                        "text": [

                            "Thank you for your patronage."

                        ]

                    }
                }


            ],
            "source": "RepInBot",
            "outputContexts": [{
                name: req.body.queryResult.outputContexts[0].name,
                "lifespanCount": 0,

                "parameters": {}
            }]
        })
    } else {
        res.json({
            "fulfillmentText": "text1",
            "fulfillmentMessages": [{

                    "text": {

                        "text": [

                            `You have declined to complete life insurance policy purchase for  ${firstname} ${lastname}, ${age}, ${verb} pre-existing conditions  for ${amount} Naira per year.`,

                        ]

                    }
                },

                {

                    "text": {

                        "text": [

                            `Our agent will follow up with you on how best we can help meet your insurance needs`,

                        ]

                    }
                }
            ]

        })
    }
}

function carInsurance(req, res) {
    outputContexts = req.body.queryResult.outputContexts;
    console.dir(outputContexts.length);
    outputContexts = outputContexts[outputContexts.length - 1].parameters;
    console.dir("This is it now",
        outputContexts)
    brand = outputContexts.brand,
        year = outputContexts.Year,
        model = outputContexts.model,
        amount = Math.floor(1000 + Math.random() * 30000);
    res.json({
        "fulfillmentText": "text1",
        "fulfillmentMessages": [{
                "platform": "FACEBOOK",
                "text": {

                    "text": [

                        `You insurance needs for a ${year} ${brand} ${model} is evaluated at ${amount} Naira per year.`

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
            },

            {

                "text": {

                    "text": [

                        `You insurance needs for a ${year} ${brand} ${model} is evaluated at ${amount} Naira per year.`,
                        "Do you want to continue"

                    ]

                }
            },



        ],
        "source": "RepInBot"
    })
}

function carInsuranceConfirm(req, res) {
    if (req.body.queryResult.parameters.confirm == 'Yes') {

        res.json({
            "fulfillmentText": "text1",
            "fulfillmentMessages": [{
                    "platform": "FACEBOOK",
                    "text": {

                        "text": [

                            `We have booked your insurance. You will pay ${amount} Naira per year.`

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
                },
                {

                    "text": {

                        "text": [

                            `We have booked your  insurance. You will pay ${amount} Naira per year.`

                        ]

                    }
                },

                {

                    "text": {

                        "text": [

                            "Thank you for your patronage."

                        ]

                    }
                },


            ],
            "source": "RepInBot",
            "outputContexts": [{
                name: req.body.queryResult.outputContexts[0].name,
                "lifespanCount": 0,

                "parameters": {}
            }]
        })
    } else {
        res.json({
            "fulfillmentText": "text1",
            "fulfillmentMessages": [{

                    "text": {

                        "text": [

                            `You have declined to insure your ${year} ${brand} ${model} for ${amount} Naira per year.`,

                        ]

                    }
                },

                {

                    "text": {

                        "text": [

                            `Our agent will follow up with you on how best we can help meet your insurance needs`,

                        ]

                    }
                },




            ],
            "source": "RepInBot",
            "outputContexts": [{
                name: req.body.queryResult.outputContexts[0].name,
                "lifespanCount": 0,

                "parameters": {}
            }]
        })
    }
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
        "source": "RepInBot",
        "outputContexts": []
    })
}

module.exports = {

    insurance: (req, res) => {
        let outputContexts = req.body.queryResult.outputContexts;
        console.dir(outputContexts[outputContexts.length - 1].parameters)
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
            case 'travelInsurance':
                console.log("Travel Insurance")

                travelInsurance(req, res);
                break;

            case 'carInsurance':
                console.log("Car Insurance")

                carInsurance(req, res);
                break;

            case 'carInsurance.confirm':
                console.log("Car Insurance Confirm")

                carInsuranceConfirm(req, res);
                break;
        }
        // lifeInsurance(req, res);
    }


}