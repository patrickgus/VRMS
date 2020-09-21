const express = require("express");
const router = express.Router();

const TimeTracker = require("../models/timeTracker.model");

// GET api/logs/
router.get("/", (req, res) => {
  TimeTracker.find()
    .populate("user")
    .populate("project")
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

router.get("/user/:id", (req, res) => {
  TimeTracker.find({ user: req.params.id })
    .populate("user")
    .populate("project")
    .then((logs) => {
      res.json(logs);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500).json({
        message: `/GET Internal server error: ${err}`,
      });
    });
});

router.get("/project/:id", (req, res) => {
  TimeTracker.find({ project: req.params.id })
    .populate("user")
    .populate("project")
    .then((logs) => {
      res.json(logs);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500).json({
        message: `/GET Internal server error: ${err}`,
      });
    });
});

router.post("/", (req, res) => {
  TimeTracker.create(req.body, function (err, log) {
    if (err) {
      console.log(err.errmsg);
      res.json(err.errmsg);
    } else {
      const { id } = log;
      console.log("Created with id: " + id);
      res.status(201).json(id);
    }
  });
})

module.exports = router;
