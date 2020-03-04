///SET UP EXPRESS VARIABLES////
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

//////MIDDLE WARE FOR POST REQUESTS//////
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

////////LISTEN FOR REQUESTS
app.listen(PORT, () => {
    console.log (`app listening on port ${PORT}`);
});