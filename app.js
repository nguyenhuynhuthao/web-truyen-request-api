const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server run");
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("request");
  next();
});

app.get("/", (req, res) => {
  res.sendFile("public/index.html", {root: __dirname,});
});

var userRoute = require("./routers/usersRouter");
app.use("/users", userRoute);