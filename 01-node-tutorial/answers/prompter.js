const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let secretNumber = Math.floor(Math.random() * 100) + 1;
let message = "Guess a number from 1 to 100:";

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <p>${message}</p>
  <form method="POST">
  <input type="number" name="guess" min="1" max="100" required></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);

  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);

      if (body["guess"]) {
        const userGuess = parseInt(body["guess"]);

        if (!isNaN(userGuess)) {
          if (userGuess === secretNumber) {
            message = "Congratulations! You guessed the correct number.";
            secretNumber = Math.floor(Math.random() * 100) + 1;
          } else if (userGuess < secretNumber) {
            message = "Too low. Try again!";
          } else if (userGuess > secretNumber) {
            message = "Too high. Try again!";
          } 
        } else {
          message = "Invalid input. Please enter a number between 1 and 100.";
        }
      }
      // After handling the POST request, display the result message
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(form());
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(form());
  }
});

server.on("request", (req) => {  
  console.log("event received: ", req.method, req.url);  
});  

server.listen(3000);
console.log("The server is listening on port 3000.");