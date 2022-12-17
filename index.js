const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/",(_req,res)=> {
    res.send("Welcome to the server");
})

const server = app.listen(PORT, () => {
    console.log("Server started in Port = "+PORT);
});
