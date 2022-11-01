
const express = require("express");
const router = express.Router();

router.get("/test", (req,res, next)=>{
    res.send("This request is from logged user!");
})

module.exports = router;