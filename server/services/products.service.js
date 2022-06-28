const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ProductServ {
  async allProducts() {
    try {
      return await prisma.products.findMany();
    } catch (err) {
      return err.message;
    }
  }

  async addProduct(data) {
    try {
      return await prisma.products.create({ data });
    } catch (err) {
      return err.message;
    }
  }

  async removeProduct(id) {
    try {
      return await prisma.products.delete({ where: { id } });
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = ProductServ;
