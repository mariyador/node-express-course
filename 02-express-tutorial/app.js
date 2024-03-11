// console.log('Express Tutorial')

const express = require('express');
const app = express();

app.use(express.static("./public"));

app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
  });
  
app.use((req, res, next) => {
    res.status(404).send("404 Error: Page Not Found");
  });

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
