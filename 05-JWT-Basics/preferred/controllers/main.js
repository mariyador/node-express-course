const jwt = require('jsonwebtoken');

const logon = async (req, res) => {
    const { name, password } = req.body;

    if (!name || !password) {
        return res.status(400).json( {msg: 'Provide name and password' })
    }

    const id = new Date().getDate();
    const token = jwt.sign({ id, name }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_LIFETIME} );

    res.status(200).json( {msg: 'User created', token })

};

const hello = async (req, res) => {
    res.status(200).json({ 
        msg: `Hello, ${req.user.name}! How are you today?`
    });
};

module.exports = {
    logon,
    hello
};