const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const logger = require("morgan");
const fileUpload = require("express-fileupload");

const UsersRouter = require("./routes/users");
const ShoppingItemsRouter = require("./routes/shoppingItems");
const EventsRouter = require("./routes/events");
const NotesRouter = require("./routes/notes");
const UnsplashRouter = require("./routes/unsplash");
const RequestsRouter = require("./routes/requests");
const FriendsRouter = require("./routes/friends");
const InvitesRouter = require("./routes/invites");

const app = express();
app.use(fileUpload());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", UsersRouter);
app.use("/shopping", ShoppingItemsRouter);
app.use("/events", EventsRouter);
app.use("/notes", NotesRouter);
app.use("/unsplash", UnsplashRouter);
app.use("/requests", RequestsRouter);
app.use("/friends", FriendsRouter);
app.use("/invites", InvitesRouter);

module.exports = app;