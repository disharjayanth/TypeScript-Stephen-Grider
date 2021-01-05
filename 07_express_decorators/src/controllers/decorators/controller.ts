import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { NextFunction, RequestHandler, Request, Response } from "express";

// bodyValidator takes in array of strings
function bodyValidators(keys: string[]): RequestHandler {
    return function (req: Request, res: Response, next: NextFunction) {
        if (!req.body) {
            res.status(422).send("Invalid request....");
            return;
        }

        for (let key of keys) {
            if (!(key in req.body)) {
                res.status(422).send(`Missing property key: ${key}`);
                return;
            }
        }

        next();
    };
}

// Class decorator (which returns factory decorator 
// factory decorator which is a custom decorator but need to return function 
// with same signature of class decorator: function(target: Function(functional constructor / type of class_name))
// (method decorator):function(target(is class or class.prototype): any, key(method or prop attached): string, desc: PropertyDescriptor)
// desc can specify what kind of parameters a method attached to it should accept like use interface and specify props.
export function controller(routePrefix: string) {
    return function (target: Function) {
        const router = AppRouter.getInstance();

        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
            const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || [];

            const validator = bodyValidators(requiredBodyProps);

            // path cannot be emptry string
            if (path) {
                router[method](`${routePrefix}${path}`, [...middlewares], validator, routeHandler);
            }
        }
    };
}