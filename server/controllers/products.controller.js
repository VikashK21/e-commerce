const ProductServ = require("../services/products.service");
const product_t = new ProductServ();

class ProductCtrl {
  async all_products(req, res) {
    try {
      const result = await product_t.allProducts();
      res.status(200).json({ result });
    } catch (err) {
      console.log(err.message);
      res.status(404).json(err.message);
    }
  }

  async add_product(req, res) {
    try {
      const result = await product_t.addProduct(req.body);
      res.status(201).json({ result });
    } catch (err) {
      res.status(400).json(err.message);
    }
  }

  async remove_product(req, res) {
    try {
      const result = await product_t.removeProduct(Number(req.params.id));
      res.status(202).json({ result });
    } catch (err) {
      res.status(400).json(err.message);
    }
  }
}

module.exports = ProductCtrl;
