declare module Backbone {
    export class Model {
        //initialize: any;
        get(attribute: string): any;
        set(attributes: any, options? ): void;
        escape(attribute: string): any;
        has(attibute: string): bool;
        unset(attribute: string, options? ): void;
        id: string;
        //idAttribute: string;
        cid: string;
        //attributes: { };
        //changed: { };
        //undefined defaults: any;
        toJSON(): any;
        fetch(options? ): void;
        save(attributes? , options? ): void;
        destroy(options? ): void;
        //undefined validate(): bool; 
        isValid(): bool;
        url(): string;
        //undefined urlRoot: any;
        parse(response: any): void;
        clone(): Model;
        isNew(): bool;
        change(): void;
        hasChanged(attribute? ): bool;
        changedAttributes(attributes? ): any;
        previous(attribute: string): any;
        previousAttributes(): any;
    }

    // underscore extension have to be included
    export class Collection {
        model: Model;
        //initialize
        models: Model[];
        toJSON: any[];
        //underscore...
        add(models: any, options? ): void;
        remove(models: any, options? ): void;
        get(id: string): Model;
        getByCid(cid: string): Model;
        at(index: number);
        push(model: Model, options? ): void;
        pop(options? ): void;
        unshift(model: Model, options? ): void;
        shift(options? ): void;
        length: number;
        //undefined comparator();
        //sort(options?): void;
        pluck(attribute: string): any;
        where(attributes: any): any;
        url: any;
        parse(response: any): void;
        fetch(options? ): void;
        reset(models? , options? ): void;
        create(attributes? , options? ): void;
    }

    export class Router {
        routes: any;
        //initialize
        route(route: string, name: string, callback: Function): void;
        navigate(fragment: string, options? ): void;
    }

    declare var history: any;

    export class View { 
        //initialize
        el: HTMLElement;
        $el: any;
        setElement(element: HTMLElement): void;
        attributes: any;
        $(selector: string): any;
        render(): void;
        remove(): void;
        make(tagName: string, attributes?: any, content?: any): HTMLElement;
        delegateEvents(events? ): void;
        undelegateEvents(events? ): void;
    }

    declare function noConflict(): any;

    declare function setDomLibrary(any): void;

}