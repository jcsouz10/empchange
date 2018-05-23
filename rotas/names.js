const express = require('express');
const dao = require('../names.dao.js');
const router = express.Router();

router.get('/names', async (req, res) => {
  const response = await dao.getEmployee();
  res.send(
    response
  )

});

module.exports = router;