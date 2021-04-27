const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRouter = require("./routes/user");
const userController = require("./controllers/users");

mongoose.connect("mongodb+srv://aguser:1gDpK7RgRbEKe51k@cluster0.pzstz.mongodb.net/test-db", { 
    useUnifiedTopology: true }).then(() => { 
    console.log("Connected to DB!");
});

app.use(express.json());
app.use(express.urlencoded());

app.post("/users", userController.create);
app.post("/users/login", userController.login);

app.use("/users", userRouter);

app.listen(3000, () => {
    console.log("Connected to server!")
});

