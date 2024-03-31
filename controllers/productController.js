const db = require("../models");

const Product = db.products;
const Review = db.reviews;

const addProduct = async (req, res) => {
  let info = {
    title: req.body?.title,
    price: req.body?.price,
    description: req.body?.description,
    published: req.body?.published ? req.body?.published : false,
  };

  const product = await Product.create(info);
  res.status(200).send(product);
};

const getAllProduct = async (req, res) => {
  let products = await Product.findAll({
    attributes: ["title", "price", "description"],
  });
  res.status(200).send(products);
};

const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({
    where: { id: id },
  });
  res.status(200).send(product);
};

const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, {
    where: { id: id },
  });
  res.status(200).send(product);
};

const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(200).send("Product is deleted successfully !!");
};

const publishedProduct = async (req, res) => {
  const products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

const getProductReview = async (req, res) => {
  let id = req.params.id;
  const data = await Product.findAll({
    include: [{
        model: Review,
        as: "review"
      }],
     where: { id: id } ,
  });

  res.status(200).send(data)
};
module.exports = {
  addProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
  publishedProduct,
  getProductReview
};
