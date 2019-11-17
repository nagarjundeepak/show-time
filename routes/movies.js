const express = require("express");
const router = express.Router();

const { Movies } = require("../models/Movies");

// Entire Rated Movies
router.get("/", async (req, res) => {
  try {
    // data from model
    const movies = await Movies.find();
    res.status(200).json({
      status: "Success",
      results: movies.length,
      data: {
        movies
      }
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
});

// Single movie by ID
router.get("/:id", async (req, res) => {
  try {
    // data from model
    const movie = await Movies.findById(req.params.id);
    res.status(200).json({
      status: "Success",
      data: movie
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
});

// add to global bucket
router.post("/", async (req, res) => {
  try {
    const newMovie = await Movies.create(req.body);
    res.status(200).json({
      status: "Success",
      data: newMovie
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
});

// Update the table
router.patch("/:id", async (req, res) => {
  try {
    const movie = await Movies.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: "Success",
      data: movie
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
});

// Delete my rating
router.delete("/:id", async (req, res) => {
  try {
    await Movies.findByIdAndRemove(req.params.id);
    res.status(200).json({
      status: "Success",
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err
    });
  }
});

module.exports = router;
