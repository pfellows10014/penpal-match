const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json({ type: 'application/json' }))
mongoose.connect('mongodb://localhost:27017/accounts', {useNewUrlParser: true});

app.post("/", (req, res) => {
    let cat1sim = 0;
    let cat2sim = 0
    let cat3sim = 0;
    for(i = 0; i < 6; i++){
        let cat11 = req.body.user1.cat1[i];
        console.log(cat11);
        let cat12 = req.body.user1.cat2[i];
        let cat13 = req.body.user1.cat3[i];
        let cat21 = req.body.user2.cat1[i];
        console.log(cat21);
        let cat22 = req.body.user2.cat2[i];
        let cat23 = req.body.user2.cat3[i];
        if( cat11 == cat21)
            cat1sim++;
        if( cat12 == cat22)
            cat2sim++;
        if( cat13 == cat23)
            cat3sim++;
    score1 = ((cat1sim / 6) * 100).toFixed(2);
    score2 = ((cat2sim / 6) * 100).toFixed(2);
    score3 = ((cat3sim / 6) * 100).toFixed(2);
    }
    res.json({
        score1,
        score2,
        score3
    })
});

app.listen(1000, () => {
    console.log("Server running on port 1000");
});