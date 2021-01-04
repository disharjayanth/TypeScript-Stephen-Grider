import bodyParser from "body-parser";
import express from "express";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";

import "./controllers/LoginController";
import "./controllers/RootController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["aaaa"] }));
app.use(AppRouter.getInstance());

app.listen(3000, () => {
    console.log("Listening @PORT:3000");
});