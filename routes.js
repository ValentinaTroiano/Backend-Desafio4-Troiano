const express = require("express"); // esta linea me la quiere cambiar a un import
const { Router } = express;

const router = Router();

const productos = [];

router
  .route("/.productos")

  .get((req, res) => {
    res.send(productos);
  })

  appp.get('/api/productos/:id'(req, res))
  console.log (req.params.id)

  app.post((req, res) => {
    const productos = req.body;
    productos.push(productos);
    res.sendStatus(201); //201 La petición ha sido completada y ha resultado en la creación de un nuevo recurso.
  });

  app.delete('/api/productos/:id'(req, res)  => {

    res.send(req.body),
    req.json({
      result:"ok",
      id: req.params.id
    })
  })


  module.exports = router;
