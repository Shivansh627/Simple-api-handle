const express = require("express");
const cors= require("cors");
const conn = require("../mongodb/connectdb");
const Model = require("../mongodb/model");
require("dotenv").config();

const app = express();
const port =process.env.PORT ||3000;

app.use(express.json());

// app.use(express.static("public"));
app.use(cors());



conn();

app.get("/", async (req, res) => {
  try {
   
    const data = await Model.find();
    res.json(data); 
  } catch (err) {
    
    res.status(500).json({ error: err.message });
  }
});
app.post("/", async (req, res) => {
  try {
   
    const { name, address } = req.body;
    const data = await Model.create({
        name,address
    });
    res.json(data);
  } catch (err) {
  
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
