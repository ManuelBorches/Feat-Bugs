const router = require("express").Router();
const passport = require("passport");
const { User } = require("../models/index");

router.post("/register", (req, res) => {
  User.create(req.body)
  .then((user) => res.status(201).send(user))
  .catch((err) => res.send(err));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  if (req.isAuthenticated()) req.logout()
  res.sendStatus(200)
});

router.get('/me', (req, res) => {
  res.send(req.user)
})

module.exports = router;