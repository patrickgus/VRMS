const express = require("express");
const router = express.Router();

const TimeTracker = require("../models/timeTracker.model");

// GET api/logs/
router.get("/", (req, res) => {
  TimeTracker.find()
    .then((logs) => {
      res.json(logs);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400).json({
        message: `/GET Internal server error:  ${err}`,
      });
    });
});
