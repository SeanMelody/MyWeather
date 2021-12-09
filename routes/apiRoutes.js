// const axios = require("axios")
const router = require("express").Router()

// Test get request, sends back success
router.get("/test", (req, res) => {
    res.send({ msg: "success" });
});


// Export it all as router
module.exports = router