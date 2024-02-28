const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(`
        <h1>Hello! This your home page.</h1>
        <a href="/about">Go to about page</a>
        `)
    }
    else if (req.url === '/about') {
        res.end('This is about page.')
    } else {
        res.end(`
        <h1>Sorry!</h1>
        <p>We can't find this page.</p>
        <a href="/">Back</a>
        `)
    }  
})

server.listen(3000);