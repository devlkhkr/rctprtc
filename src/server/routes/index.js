const express = require('express');
const router = express();
 
router.get('/', (req,res) => {
    res.send({ main : "main"});
})

router.get('/test', (req,res) => {
    res.send({ test : "test"});
})
 
module.exports = router;