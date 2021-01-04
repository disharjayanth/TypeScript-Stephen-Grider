import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from "express";

interface RouteHandlerDescriptor extends PropertyDescriptor {
    value?: RequestHandler;
}

// Method decorator
// route binder with method: get, put, post, delete, patch
function routeBinder(method: string) {
    // Below custom decorator which returns factory decorator
    return function (path: string) {
        return function (target: any, key: string, desc: RouteHandlerDescriptor) {
            Reflect.defineMetadata(MetadataKeys.method, method, target, key);
            Reflect.defineMetadata(MetadataKeys.path, path, target, key);
        };
    };
}

// routeBinder returns decorator factory
export const get = routeBinder(Methods.get);
export const put = routeBinder(Methods.put);
export const post = routeBinder(Methods.post);
export const del = routeBinder(Methods.del);
export const patch = routeBinder(Methods.patch);