const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet"); // for secure express connections
const morgan = require("morgan"); // for secure Http logger
const BlogRoute = require("./routes/blogs");
const UserRoute = require("./routes/user");
const AuthRoute = require("./routes/auth");

const app = express();
require("dotenv/config");

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/blogs", BlogRoute);
app.use("/auth", AuthRoute);
app.use("/users", UserRoute);

app.get("/", (req, res) => {
  res.send("We are on Home!");
});

mongoose
  .connect(
    "mongodb+srv://user123:user123@cluster0.huyua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  )
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  app.listen(8800);
