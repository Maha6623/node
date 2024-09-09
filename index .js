
/* const express= require("express");
const app =express();
const port=6623;
app.listen(port); */

//terminal msg

/* const express= require("express");
const app =express();
const port=8000;
app.listen(port, () => {
        console.log("server is running on:",port);
}); */

//msg customize

/* const express= require("express");
const app =express();
app.use("/",() =>{
res.send("server is alive")
});
const port=8000;
app.listen(port, () => {
        console.log("server is running on:",port);
}); */

//next page msg 

const express= require("express");
const app =express();
app.use("/next",(req,res)=>
{
    res.send("next page!")
})

app.use("/",(req,res) =>{
res.send("server is alive")
});
const port=8000;
app.listen(port, () => {
        console.log("server is running on:",port);
});