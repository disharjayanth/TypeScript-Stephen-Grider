import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";

// give it as variadic strings and function will make it array of strings
export function bodyValidator(...keys: string[]) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
    };
}