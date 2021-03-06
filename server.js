const express = require("express");
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
const path = require("path");
const config = require("config");

// const items = require("./routes/api/items");
//var cors = require("cors");
const app = express();

//body-parser middleware
app.use(express.json());

//db config
const db = config.get("mongoURI");

//connect to mongo
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
	})
	.then(() => console.log("connect to mongo"))
	.catch((err) => console.log(err));

//app.use(cors());
//use routes
app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

//app.use("/",items)

//Serve static asserts if inproduction
if (process.env.NODE_ENV === "production") {
	//Set stattic folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server lissten on port ${port}`));
