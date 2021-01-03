import { NextFunction, Request, Response, Router } from "express";

interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined;
    };
}

const requireAuth = (req: RequestWithBody, res: Response, next: NextFunction): void => {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Not permitted.");
};

const router = Router();

router.post("/login", (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body;
    if (email && password && email === "test@test.com" && password === "123") {
        // mark this as logged in and redirect to root "/"
        req.session = { loggedIn: true };
        res.redirect("/");
    } else {
        res.send("Invalid email or password.");
    }
});

router.get("/", (req: RequestWithBody, res: Response) => {
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
});

router.get("/logout", (req: RequestWithBody, res: Response) => {
    req.session = undefined;
    res.redirect("/");
});

router.get("/protected", requireAuth, (req: RequestWithBody, res: Response) => {
    res.send(`Welcome to protected route, logged in user. <a href="/">Home</a>`);
});

export { router };