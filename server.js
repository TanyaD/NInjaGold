var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var mongoose=require("mongoose");
var session=require("express-session")

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(session({secret:"cogingdojo"}));
app.use(express.static( __dirname + '/Ngold/dist' ));


mongoose.connect('mongodb://localhost/gold_db');
var GoldSchema=new mongoose.Schema({
    gold_amount:{type: Number},
    log:{type: String}
})
var Gold=mongoose.model('Gold', GoldSchema)

app.get('/gold',function(request,response){
    Gold.find({}).exec(function(err,gold){
        response.json({gold})
        })
}),

app.post('/gold',function(request,response){
    Gold.insert({gold_amount:request.body.gold_amount, log:request.body.logs}), function(err,data){
        if (data) {
            response.json({ message: "Success", data: data })
        } 
        else if (err) {
            console.log(err);
            response.json({ message: "error", err: err });
        }
    }});


app.listen(8000,function(){
    console.log("listening on port 8000")
})




