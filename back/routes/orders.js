const router = require('express').Router();
const { Order, Tool, User } = require('../models/index');


router.get("/:toolId", (req, res) => {
  Order.findAll({
  order: [["id", "ASC"]],
  where: {toolId: req.params.toolId}
}).then((orders) => res.send(orders));
});

router.get("/votes/:userId", (req, res) => {
  User.findByPk(req.params.userId).then((user) => user.getOrders()).then(orders => res.send(orders))
});

router.post('/', (req, res) => {
    Order.create(req.body)
    .then(order => 
      Tool.findByPk(req.body.toolId)
      .then(tool => order.setTool(tool))
    )
    .then(order => 
      User.findByPk(req.body.userId)
      .then(user => order.setUser(user))
    )
    .then((order) => res.send(order))
    .catch(err => res.send(err))
})

// res.send(order) for undo
router.post("/:id", (req, res) => {
    Order.findByPk(req.params.id)
      .then((order) => {
        return Order.destroy({ where: { id: req.params.id } })
          .then((u) => res.send(order));
      })
})

// ruta para editar el status de una orden
router.put("/edit", (req, res) => {
    Order.update(
      { status: req.body.status },
      { where: { id: req.body.id }, returning: true, plain: true }
    )
      .then((order) => res.send(order[1]))
      .catch((err) => console.log(err));
});


// ruta para editar qVotes de un usuario a una orden
router.put("/vote", (req, res) => {
  Order.update(
    { qVotes: req.body.qVotes + 1 },
    { where: { id: req.body.id }, returning: true, plain: true }
  )
  .then(order => 
    User.findByPk(req.body.userId)
    .then(user => {
      user.addOrder(order[1])
      res.send(order[1])
    })
  )
    .catch((err) => console.log(err));
});


router.put("/quitvote", (req, res) => {
  Order.update(
    { qVotes: req.body.qVotes - 1 },
    { where: { id: req.body.id }, returning: true, plain: true }
  )
  .then(order => 
    User.findByPk(req.body.userId)
    .then(user => {
      user.removeOrder(order[1])
      res.send(order[1])
    })
  )
    .catch((err) => console.log(err));
});




module.exports = router;