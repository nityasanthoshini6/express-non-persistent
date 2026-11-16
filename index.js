import express from "express";

const app = express();

app.use(express.json());

// Non-persistent array
const products = [];

// 1. CREATE PRODUCT - POST
app.post("/products", (req, res) => {
    const newProduct = req.body;

    products.push(newProduct);

    res.status(201).json({
        message: "Product created successfully",
        data: newProduct
    });
});


// 2. READ ALL PRODUCTS - GET
app.get("/products", (req, res) => {
    res.status(200).json({
        message: "All products fetched successfully",
        data: products
    });
});


// 3. READ PRODUCT BY ID - GET
app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const product = products.find(
        (prod) => prod.id === productId
    );

    if (product) {
        res.status(200).json({
            message: "Product fetched successfully",
            data: product
        });
    } else {
        res.status(404).json({
            message: "Product not found"
        });
    }
});


// 4. UPDATE PRODUCT - PUT
app.put("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const productIndex = products.findIndex(
        (prod) => prod.id === productId
    );

    if (productIndex !== -1) {

        products[productIndex] = {
            ...products[productIndex],
            ...req.body,
            id: productId
        };

        res.status(200).json({
            message: "Product updated successfully",
            data: products[productIndex]
        });

    } else {
        res.status(404).json({
            message: "Product not found"
        });
    }
});


// 5. DELETE PRODUCT - DELETE
app.delete("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const productIndex = products.findIndex(
        (prod) => prod.id === productId
    );

    if (productIndex !== -1) {

        const deletedProduct = products.splice(productIndex, 1);

        res.status(200).json({
            message: "Product deleted successfully",
            data: deletedProduct[0]
        });

    } else {
        res.status(404).json({
            message: "Product not found"
        });
    }
});


// Start server
app.listen(4000, () => {
    console.log("Server running at http://localhost:4000");
});