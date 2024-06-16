const express = require("express");
const blackpinkRouter = express.Router();

//call controller
const brandController = require("../controller/brandController");

blackpinkRouter
  .route("/")
  .get(brandController.getAll)
  .post(brandController.createBrand);

blackpinkRouter
  .route("/:brandID")
  .get(brandController.deleteBrand);

  blackpinkRouter
  .route("/:brandID/detail")
  .get(brandController.getBrandrDetail);

module.exports = blackpinkRouter;
