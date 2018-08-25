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
            "speech": "Your travel insurance needs have been served",
            "displayText": "Your travel insurance needs have been served"
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