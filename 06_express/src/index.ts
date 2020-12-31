import bodyParser from "body-parser";
import express, { Request, Response } from "express";
import cookieSession from "cookie-session";
import { router } from "./routes/loginRoutes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["aaaa"] }));
app.use(router);

app.listen(3000, () => {
    console.log("Listening @PORT:3000");
});