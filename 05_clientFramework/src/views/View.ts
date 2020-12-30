import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    regions: { [key: string]: Element; } = {};

    template = (): string => { return ""; };

    regionsMap = (): { [key: string]: string; } => {
        return {};
    };

    eventsMap = (): { [key: string]: () => void; } => { return {}; };

    bindModel = (): void => {
        this.model.on("change", () => {
            this.render();
        });
    };

    bindEvents(fragments: DocumentFragment): void {
        const eventsMap = this.eventsMap();
        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(":");

            fragments.querySelectorAll(selector).forEach(element => {
                element.addEventListener(eventName, eventsMap[eventKey]);
            });
        }
    }

    mapRegions(fragment: DocumentFragment): void {
        const regionMaps = this.regionsMap();
        for (let key in regionMaps) {
            const selector = regionMaps[key];
            const element = fragment.querySelector(selector);
            if (element) {
                this.regions[key] = element;
            }
        }
    }

    onRender = () => { };

    render(): void {
        this.parent.innerHTML = "";
        const templateElement = document.createElement("template");
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.mapRegions(templateElement.content);

        this.onRender();

        this.parent.append(templateElement.content);
    }
}