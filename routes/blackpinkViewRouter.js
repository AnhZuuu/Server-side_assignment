const express = require("express");
const blackpinkRouter = express.Router();

//call controller
const blackpinkController = require("../controller/blackpinkController");

blackpinkRouter
  .route("/")
  .get(blackpinkController.getBlackpink)
  .post(blackpinkController.createBlackpink);

blackpinkRouter
  .route("/:blackpinkID")
  .post(blackpinkController.deleteMemberView);

blackpinkRouter
  .route("/:blackpinkID/detail")
  .get(blackpinkController.getMemberDetail);

module.exports = blackpinkRouter;
