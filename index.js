require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const expressSwagger = require("express-swagger-generator")(app);

app.use(express.json());
app.use("/api/", require("./routes/routes"));

const database = process.env.MONGOLAB_URI;
const PORT = process.env.PORT || 3002;
mongoose
  .connect(database, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Connected successfully to DB"))
  .catch((err) => console.log(err));

let options = {
  swaggerDefinition: {
    info: {
      description: "This is a CRUD API app",
      title: "Swagger",
      version: "1.0.0",
    },
    host: `localhost:${PORT}`,
    basePath: "/api",
    produces: ["application/json"],
    schemes: ["http"],
    securityDefinitions: {},
  },
  basedir: __dirname, //app absolute path
  files: ["./routes/**/*.js", "./models/**/*.js", "./controllers/**/*.js"], //Path to the API handle folder
};
expressSwagger(options);
app.listen(PORT, console.log("Server started on port: " + PORT));
