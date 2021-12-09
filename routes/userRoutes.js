// const axios = require("axios")
const router = require("express").Router()


// Test route unused later
router.get("/test", (req, res) => {
    res.send({ msg: "user test route" });
})


// Export it all as router
module.exports = router