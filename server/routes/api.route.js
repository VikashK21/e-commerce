const router = require("express").Router();
const Products = new (require("../controllers/products.controller"))();

router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.get("/allpro", Products.all_products);
router.post("/addpro", Products.add_product);
router.delete("/remove/:id", Products.remove_product);

module.exports = router;
