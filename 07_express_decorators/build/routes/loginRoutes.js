"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var requireAuth = function (req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Not permitted.");
};
var router = express_1.Router();
exports.router = router;
router.post("/login", function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === "test@test.com" && password === "123") {
        // mark this as logged in and redirect to root "/"
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Invalid email or password.");
    }
});
router.get("/", function (req, res) {
    // if user is logged in (req.session.loggedIn: true)
    if (req.session && req.session.loggedIn) {
        res.send("\n        <div>\n            <div>You are logged in </div>\n            <a href=\"/logout\">Logout</a>\n            <a href=\"/protected\">Protected Route</a>\n        </div>\n        ");
    }
    else {
        res.send("\n        <div>\n            <div>You are not logged in </div>\n            <a href=\"/login\">Login</a>\n            <a href=\"/protected\">Protected Route</a>\n        </div>\n        ");
    }
});
router.get("/logout", function (req, res) {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, function (req, res) {
    res.send("Welcome to protected route, logged in user. <a href=\"/\">Home</a>");
});
