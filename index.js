const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const expressSession = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();

const newPostController = require("./controllers/newPost");
const homeController = require("./controllers/home");
const storePostController = require("./controllers/storePost");
const getPostController = require("./controllers/getPost");
const validateMiddleware = require("./middleware/validationMiddleware");
const newUserController = require("./controllers/newUser");
const storeUserController = require("./controllers/storeUser");
const loginController = require("./controllers/login");
const loginUserController = require("./controllers/loginUser");
const authMiddleware = require("./middleware/authMiddleware");
const redirectIfAuthenticatedMiddleware
  = require("./middleware/redirectIfAuthenticatedMiddleware");
const logoutController = require("./controllers/logout");

global.loggedIn = null;

mongoose.connect("mongodb+srv://PauloMongoDB:962752692@cluster0.nmiwd.mongodb.net/my_database",
  { useNewUrlParser: true });

const app = new express();

app.set("view engine", "ejs");

app.use(expressSession({ secret: "keyboard cat" }));
app.use(express.json());
app.use(express.urlencoded())
app.use(express.static("public"));
app.use(fileUpload());
app.use("/posts/store", validateMiddleware);
app.use("*", (req, res, next) => {
  loggedIn = req.session.userId;
  next();
});
app.use(flash());

app.get("/", homeController);
app.get("/index", homeController);
app.get("/post/:id", getPostController);
app.post("/post/store", authMiddleware, storePostController);
app.get("/create", authMiddleware, newPostController);
app.get("/auth/register", redirectIfAuthenticatedMiddleware, newUserController);
app.post("/users/register", redirectIfAuthenticatedMiddleware, storeUserController);
app.get("/auth/login", redirectIfAuthenticatedMiddleware, loginController);
app.post("/users/login", redirectIfAuthenticatedMiddleware, loginUserController);
app.get("/auth/logout", logoutController);
app.use((req, res) => res.render("notfound"));;

let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000
}
app.listen(port, () => {
  console.log(`Server is listening on port ${4000}`);
});