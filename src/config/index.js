const dotenvSafe = require("dotenv-safe");

dotenvSafe.config({
  path: ".env",
  sample: ".env.example",
  allowEmptyValues: true,
});

module.exports = {
  application: {
    PORT: process.env.PORT,
  },
};
