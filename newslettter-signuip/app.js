const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", function(req , res){
    res.sendFile(__dirname + "/signup.html");
    // res.sendFile(__dirname + "/styles.css");
})


app.post("/", function(req , res){
    
    const firstName = req.body.fName ;
    const lastName = req.body.lName ;
    const email = req.body.email ;

    const data = {
        members: [
            {
            email_address: email,
            status: "subscribed",
            merger_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us1.api.mailchimp.com/3.0/lists/8ad625cecb";

    const options = {
        method: "POST",
        auth: "imohitpant:25ce8db26952967d498fae80f90ff894-us1"
    }

    const request = https.request(url, options, function(response){
        
        if(response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
        
        
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })

    })

    request.write(jsonData);
    request.end();    

});

app.post("/failure", function(req , res){
    res.redirect("/");
});




app.listen(process.env.PORT || 3000, function(){
    console.log("server is active at port 3000");
})

// api key mailchimp
// 25ce8db26952967d498fae80f90ff894-us1

// List id
// 8ad625cecb