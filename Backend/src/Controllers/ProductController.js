const Product = require("../Models/productModel");
const domain = "http://localhost:3000";

// Helper function to send error responses
const sendErrorResponse = (res, error) => {
  console.log(error);
  res.status(500).json({ msg: error.message });
};

// Create a new product (Admin Only)
const createProduct = async (req, res) => {
  try {
    const {
      category,
      name,
      price,
      description,
      countInStock,
    } = req.body;
    let productData = {
      category,
      name,
      price,
      description,
      countInStock,
    };

    if (req.file) {
      const productImage = `${domain}/uploads/products/${req.file.filename}`;
      productData.productImage = productImage;
    }

    const product = new Product(productData);
    await product.save();

    res.status(201).json({
      msg: "Product created successfully",
      product: product,
      success: true,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Update a product (Admin Only)
const updateProduct = async (req, res) => {
  try {
    const {
      category,
      name,
      price,
      description,
      countInStock,
    } = req.body;
    let updateData = {
      category,
      name,
      price,
      description,
      countInStock,
    };

    if (req.file) {
      const productImage = `${domain}/uploads/products/${req.file.filename}`;
      updateData.productImage = productImage;
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json({
      msg: "Product updated successfully",
      product: product,
      success: true,
    });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get all products (Public)
const getProducts = async (req, res) => {
  try {
    const { search, sort } = req.query;
    let query = {};

    // Handle search
    if (search) {
      query.name = { $regex: search, $options: "i" }; // Case-insensitive search by name
    }

    let products = await Product.find(query);

    // Handle sorting
    if (sort) {
      const sortOrder = sort === "asc" ? 1 : -1;
      products = products.sort((a, b) => (a.price - b.price) * sortOrder);
    }

    res.json(products);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get all products by category (Public)
const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.categoryId });
    res.status(200).json(products);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Get a single product by ID (Public)
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Delete a product (Admin Only)
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json({ msg: "Product deleted successfully", success: true });
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// Filter products (Public)
const productFiltersController = async (req, res) => {
  try {
    const { checked, radio } = req.body;
    let args = {};
    if (checked.length > 0) args.category = { $in: checked };
    if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };

    const products = await Product.find(args);
    res.status(200).send({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: 'Error while filtering products',
      error,
    });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  getProducts,
  getProduct,
  deleteProduct,
  productFiltersController,
};
