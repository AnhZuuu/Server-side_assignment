var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const mongoose = require("mongoose");
// const blackpinkRouter = require("./routes/blackpinkRouter");
const blackpinkRouter = require("./routes/blackpinkViewRouter");
const userRouter = require("./routes/userViewRouter");
const watchRouter = require("./routes/watchRouter");
const brandRouter = require("./routes/brandRouter");

const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
require("./middleware/passport")(passport);

var app = express();

const url = "mongodb://127.0.0.1:27017/blackpinkInVN";
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("connect successfully");
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//phan quyen, xac thuc
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/blackpink", blackpinkRouter); // Add this line to use the blackpinkRouter
app.use("/user", userRouter);

app.use("/", userRouter);
app.use("/users", usersRouter);
app.use("/watches", watchRouter );
app.use("/watch", watchRouter );
app.use("/brands", brandRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
