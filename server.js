const express=require('express')
const app=express();
app.use(express.json())


app.get('/',(req,res) => {
    res.send("Fetching the data");
})

app.listen(3000,()=>{
    console.log("Server running on port number 3000");
})