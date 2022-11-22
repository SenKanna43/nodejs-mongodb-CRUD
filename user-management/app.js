const express = require("express")
const mongoose = require("mongoose")
const app = express()
const router = require("./routes/user-routes")

app.use(express.json())
app.use("/users",router)

mongoose
    .connect("mongodb+srv://admin:Tu8BwHqWpHvfgAin@cluster0.y5jps6y.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(()=>
    app.listen(5000,()=> console.log("connected and listening on port 5000"))
    )
    .catch((err)=> console.log(err))