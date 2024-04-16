const CustomAPIError = require("./custom-error");
class Unauthentificated extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = Unauthentificated;
