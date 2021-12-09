// Required Consts!
const express = require("express")
const app = express();
const path = require("path");



//Port 5005 cause I'm crazy!
const PORT = process.env.PORT || 5005;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// API Routes start with API and live at apiRoutes.js
app.use("/api", require("./routes/apiRoutes"))
app.use("/user", require("./routes/userRoutes"))


// Let the user know the server is running, and which port.  Yeay!
app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});