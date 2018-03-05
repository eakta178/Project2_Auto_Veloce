var db = require("../models");
var express = require("express");
var router = express.Router();

router.get("/autoveloce", function(req, res) {
  db.Autoveloce.findAll({
  }).then(function(car_data) {
    console.log(car_data);
    res.render("index", {car_data});
  });
});
router.get("/autoveloce/:category/:color/:mpg/:budget?", function(req, res) {
  db.Autoveloce.findAll({
    where: {
      category: req.params.category,
      exterior_color: req.params.color,
      free_miles: req.params.mpg,
      price: {
        $lte: req.params.budget
      }
    }
  }).then(function(results) {
    res.json(results);
  });
  
});

router.get("/autoveloceC/:category/:color/:type/:budget", function(req, res) {
  db.Autoveloce.findAll({
    where: {
      category: req.params.category,
      exterior_color: req.params.color,
      vehicle_type: req.params.type,
      price: {
        $lte: req.params.budget
      }
    }
  }).then(function(results) {
    //res.render(results);
    res.json(results);
  });
  
});

router.get("/autoveloceR/:category/:color/:engine/:budget", function(req, res) {
  db.Autoveloce.findAll({
    where: {
      category: req.params.category,
      exterior_color: req.params.color,
      cylinders: req.params.engine,
      price: {
        $lte: [req.params.budget],
      }
    }
  }).then(function(results) {
    //res.render(results);
    res.json(results);
  });
  
});

router.post("/customer/create", function(req, res) {
  db.Customer.create(req.body.customer_name).then(function(result) {
    
    console.log(result);
    res.redirect('/');
  });
});


// Export routes for server.js to use.
module.exports = router;
  
  
  



