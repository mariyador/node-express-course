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
  
app.use((req, res, next) => {
    res.status(404).send("404 Error: Page Not Found");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
