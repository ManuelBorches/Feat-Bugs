const router = require('express').Router();
const { Tool } = require("../models/index");

router.get("/", (req, res) => {
  Tool.findAll().then(tools => res.send(tools));
});

router.post('/', (req, res) => {
    Tool.create(req.body)
    .then(tool => res.send(tool))
    .catch(err => res.send(err))
})

// res.send(tool) for undo
router.post("/:id", (req, res) => {
    Tool.findByPk(req.params.id)
      .then((tool) => {
        return Tool.destroy({ where: { id: req.params.id } })
          .then((u) => res.send(tool));
      })
  })

module.exports = router;