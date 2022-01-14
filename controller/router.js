const express = require("express");
const { get } = require("express/lib/request");
const router = express.Router();
const workersModel = require("../model/model");

router.get("/", async (req, res) => {
  try {
    const getData = await workersModel.find();
    res.status(200).json({
      message: "Data Sucessfully found",
      data: getData,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getDataByID = await workersModel.findById(req.params.id);
    res.status(200).json({
      message: "Data's ID sucesfully found",
      data: getDataByID,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const postData = await workersModel.create({
      name: req.body.name,
      email: req.body.email,
      job: req.body.job,
      phoneNo: req.body.phoneNo,
      data: Date.now(),
    });

    res.status(200).json({
      message: "Data Posted sucessfully",
      data: postData,
    });
  } catch (error) {
    res.status(404).json({
      message: "Could'nt post Info",
      data: error.message,
    });
  }
});

router.patch("/edit/:id", async (req, res) => {
  try {
    const updateByID = await workersModel.findByIdAndUpdate(
      req.params.id,
      res.body
    );
    res.status(200).json({
      message: "Edited Sucessfully",
      data: updateByID,
    });
  } catch (error) {
    res.status(404).json({
      message: "Couldnt perform edit",
      data: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteData = await workersModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "deleted sucessfully",
      data: deleteData,
    });
  } catch (error) {
    res.status(404).json({
      message: "error",
      data: error.message,
    });
  }
});

module.exports = router;
