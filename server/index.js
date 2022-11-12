const express = require("express")

const app= express();

app.use(express.json());

const Databaseconnection=require("./connecter/dbconnection")
const NEWMODEL=require("./model/model1")

// data coming from frontend to backend 

app.post("/api/save",async(req,res)=>{
    try {
        const{category,headline,description,type}=req.body;
        const front =new NEWMODEL({
            category,
            headline,
            description,
            type,
            
        });
        await front.save();
        res.json({success:true})
        
    } catch (error) {
        console.log(error);
        
        return res.status(404).json({success:false,error:error.message});
    }
});

// now api for getting the data from backend
app.get("/api/news",async(req,res)=>{
    try {
        const newsdata=await NEWMODEL.find({type:"news"})
        res.json({ data:newsdata,success:true});
        
    } catch (error) {
        console.log(error);
        res.status(404).json({success:false,error:error.message});

        
    }
});

app.get("/api/quotes",async(req,res)=>{
    try {
        const quotesdata=await NEWMODEL.find({type:"quotes"})
        res.json({ data:quotesdata,success:true});
        
    } catch (error) {
        console.log(error);
        res.status(404).json({success:false,error:error.message});

        
    }
});


app.get("/api/jokes",async(req,res)=>{
    try {
        const jokesdata=await NEWMODEL.find({type:"jokes"})
        res.json({ data:jokesdata,success:true});
        
    } catch (error) {
        console.log(error);
        res.status(404).json({success:false,error:error.message});

        
    }
});



Databaseconnection().then(()=>{
    app.listen(6000,()=>console.log("server is created at port no 6000"))
    
});


