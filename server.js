///SET UP EXPRESS VARIABLES////
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static("public"));

//////MIDDLE WARE FOR POST REQUESTS//////
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Set Handlebars.
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./controllers/burger_controller.js");

app.use(routes);

////////LISTEN FOR REQUESTS
app.listen(PORT, () => {
    console.log (`app listening on port ${PORT}`);
});