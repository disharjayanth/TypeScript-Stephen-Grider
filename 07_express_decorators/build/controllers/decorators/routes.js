"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
// Method decorator
// route binder with method: get, put, post, delete, patch
function routeBinder(method) {
    // Below custom decorator which returns factory decorator
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
        };
    };
}
// routeBinder returns decorator factory
exports.get = routeBinder(Methods_1.Methods.get);
exports.put = routeBinder(Methods_1.Methods.put);
exports.post = routeBinder(Methods_1.Methods.post);
exports.del = routeBinder(Methods_1.Methods.del);
exports.patch = routeBinder(Methods_1.Methods.patch);
