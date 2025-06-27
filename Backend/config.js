const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect("mongodb+srv://amarthisatya:Satya%40123@cluster0.4kw03ov.mongodb.net/complaint")
.then(() => console.log("✅ MongoDB Atlas connected"))
.catch((err) => console.error("❌ MongoDB Atlas connection error:", err));
