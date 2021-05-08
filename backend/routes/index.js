const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("<h1>Api is running!!!</h1>");
=======
  res.send("<h1>Api is running!</h1>");
>>>>>>> 0622d9999b8dfd68651eb5fb955857ed9658b3d9
});

module.exports = router;
