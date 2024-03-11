// console.log('Express Tutorial')
const express = require('express');
const app = express();

const { products } = require("./data");

app.use(express.static("./public"));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
});

app.get('/api/v1/products', (req, res) => {
    res.json(products);
});

app.get('/api/v1/products/:productID', (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);
  
    if (!product) {
      return res.status(404).json({ message: "That product was not found." });
    }
  
    res.json(product);
});

app.get('/api/v1/query', (req, res) => {
    const { search, limit, maxCost } = req.query;

    const maxCostNumeric = parseFloat(maxCost) || Number.MAX_VALUE;
  
    const searchRegex = search ? new RegExp(search, 'i') : null;

    const filteredProducts = products
      .filter(product => (!searchRegex || searchRegex.test(product.name)) && product.price <= maxCostNumeric)
      .slice(0, limit || products.length);
  
    res.json(filteredProducts);
});
  
app.use((req, res, next) => {
    res.status(404).send("404 Error: Page Not Found");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
