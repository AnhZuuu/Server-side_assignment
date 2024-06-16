const express = require("express");
const blackpinkRouter = express.Router();

//call controller
const blackpinkController = require("../controller/blackpinkController");

blackpinkRouter
  .route("/")
  .get(blackpinkController.getAll)
  .post(blackpinkController.addBlackpink)
  .put(blackpinkController.updateBlackpink)
  .delete(blackpinkController.deleteBlackpink);

blackpinkRouter
  .route("/:blackpinkID")
  .get(blackpinkController.detailBlackpink)
  .delete(blackpinkController.deleteMember)
  .put(blackpinkController.updateMember);
module.exports = blackpinkRouter;
