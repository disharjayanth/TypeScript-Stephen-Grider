import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { NextFunction, RequestHandler, Request, Response } from "express";

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

// Class decorator (which returns factory decorator)
export function controller(routhPrefix: string) {
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
                router[method](`${routhPrefix}${path}`, [...middlewares], validator, routeHandler);
            }
        }
    };
}