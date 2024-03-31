const db = require("../models");

const Reviews = db.reviews;

const addReviews = async (req, res) => {
//   let id = req.param.id;
  let info = {
    rating: req.body?.rating,
    description: req.body?.description,
    // product_id : id
  };

  const reviews = await Reviews.create(info);
  res.status(200).send(reviews);
};

const getOneReview = async (req, res) => {
  let id = req.params.id;
  const reviews = await Reviews.finOne({ where: { id: id } });
  res.status(200).send(reviews);
};

const getAllReview = async (req, res) => {
  const reviews = await Reviews.findAll({
    attributes: ["rating", "description"],
  });
  res.status(200).send(reviews);
};

const updateReview = async (req, res) => {
  let id = req.params.id;
  const updated = await Reviews.update(req.body, { where: { id: id } });
  res.status(200).send(updated);
};

const deleteOneReview = async (req, res) => {
  let id = req.params.id;
  await Reviews.destroy({ where: { id: id } });
  res.status(200).send("Deleted succssfully !!");
};

module.exports = {
  addReviews,
  getOneReview,
  getAllReview,
  deleteOneReview,
  updateReview,
};
