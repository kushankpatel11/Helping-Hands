const mongoose =require("mongoose")

//creating a database
mongoose.connect("mongodb+srv://kushankpatel11:Kushankpatel11@cluster001.o16k0lt.mongodb.net/?retryWrites=true&w=majority",{

}).then(()=>{
    console.log("succesfully");
}).catch((error)=>{
    console.log("not connected");
})


