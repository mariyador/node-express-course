const express = require('express');
const app = express();
const peopleRouter = require('./routes/people.js');
const logger = require('./logger.js');

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.send('Home');
});

app.use('/api/v1/people', peopleRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
