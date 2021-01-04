import { Request, Response } from "express";
import { bodyValidator, controller, get, post } from "./decorators";

@controller("/")
class LoginController {
    @get("login")
    getLogin(req: Request, res: Response): void {
        res.send(`
        <form method="POST">
            <div>
            <label>Email:</label>
            <input name="email" />
            </div>
            <div>
            <label>Password:</label>
            <input name="password" />
            </div>
            <button>Submit</button>
        </form>
        `);
    }

    @post("login")
    @bodyValidator("email", "password")
    postLogin(req: Request, res: Response): void {
        const { email, password } = req.body;
        if (email === "test@test.com" && password === "123") {
            // mark this as logged in and redirect to root "/"
            req.session = { loggedIn: true };
            res.redirect("/");
        } else {
            res.send("Invalid email or password.");
        }
    }

    @get("logout")
    getLogout(req: Request, res: Response): void {
        req.session = undefined;
        res.redirect("/");
    }
}