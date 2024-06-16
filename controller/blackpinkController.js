//call model
const Blackpink = require("../models/blackPink");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

class blackpinkController {
  getAll(req, res) {
    Blackpink.find({}).then((blackpink) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(blackpink);
    });
  }
  addBlackpink(req, res) {
    Blackpink.create(req.body).then((blackpink) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(blackpink);
    });
  }
  deleteBlackpink(req, res) {
    Blackpink.deleteOne({}).then(() => {
      res.status(200).json({ message: "Delete successfully" });
    });
  }
  updateBlackpink(req, res) {
    res.status(403).json({ message: "Not supported if you don't have id" });
  }

  detailBlackpink(req, res) {
    Blackpink.findById(req.params.blackpinkID).then((blackpink) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(blackpink);
    });
  }

  deleteMember(req, res) {
    Blackpink.findByIdAndDelete(req.params.blackpinkID).then((blackpink) => {
      res
        .status(200)
        .json({ message: "Delete member with that ID successfully" });
    });
  }

  updateMember(req, res) {
    Blackpink.findByIdAndUpdate(
      req.params.blackpinkID,
      { $set: req.body },
      { new: true }
    ).then((blackpink) => {
      res.status(200).json(blackpink);
    });
  }

  //Phần controller để gọi bên blackpinkViewRouter.js
  getBlackpink(req, res) {
    Blackpink.find({}).then((blackpinks) => {
      res.render("index", {
        title: "List of Blackpink",
        blackpinkData: blackpinks
      });
    });
  }
  createBlackpink(req, res) {
    // const bl = new Blackpink(req.body);
    // bl.save().then(() => {
    //   res.redirect("/blackpink");
    // });
    if (req.body.id) {
      Blackpink.findByIdAndUpdate(
        req.body.id,
        { $set: req.body },
        { new: true }
      ).then(() => {
        res.redirect("/blackpink");
      });
    } else {
      const bl = new Blackpink(req.body);
      bl.save().then(() => {
        res.redirect("/blackpink");
      });
    }
  }
  deleteMemberView(req, res) {
    Blackpink.findByIdAndDelete(req.params.blackpinkID).then(() => {
      res.redirect("/blackpink");
    });
  }
  getMemberDetail(req, res) {
    Blackpink.findById(req.params.blackpinkID).then((blackpink) => {
      res.status(200).json(blackpink);
    });
  }
}

module.exports = new blackpinkController();
