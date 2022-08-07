const express = require("express");
const app = express();
const createError = require("http-errors");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const MessageRoutes = require("./routes/message");
const path = require("path");
//middlewares
app.use(express.json());
app.use(cors());

//database connection
mongoose.connect(process.env.DATABASE).then(() => console.log("DB Connected"));

app.use("/message", MessageRoutes);

// --------------------------deployment------------------------------
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../front-end/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../front-end", "build", "index.html"))
  );
}
// --------------------------deployment------------------------------

//for errors
app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
