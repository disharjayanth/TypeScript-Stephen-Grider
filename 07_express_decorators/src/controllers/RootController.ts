import { Request, Response, NextFunction } from "express";
import { controller, get, use } from "./decorators";

// Require Auth middleware checks whether use is authorized or not
const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Not permitted.");
};

@controller("")
class RootController {
    @get("/")
    getRoot(req: Request, res: Response) {
        // if user is logged in (req.session.loggedIn: true)
        if (req.session && req.session.loggedIn) {
            res.send(`
            <div>
                <div>You are logged in </div>
                <a href="/logout">Logout</a>
                <a href="/protected">Protected Route</a>
            </div>
            `);
        } else {
            res.send(`
            <div>
                <div>You are not logged in </div>
                <a href="/login">Login</a>
                <a href="/protected">Protected Route</a>
            </div>
            `);
        }
    }

    @get("/protected")
    @use(requireAuth)
    getProtected(req: Request, res: Response) {
        res.send(`Welcome to protected route, logged in user. <a href="/">Home</a>`);
    }
}