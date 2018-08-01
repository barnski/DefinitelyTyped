// Type definitions for uri-templates 0.1.9
// Project: https://github.com/geraintluff/uri-templates
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>
//                 Bartek Szczepański <https://github.com/barnski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function utpl(template: string): utpl.URITemplate;

declare type UriFillObject = { [key: string]: boolean | string | number | boolean[] | string[] | number[] };

declare namespace utpl {
    export interface URITemplate {
        fillFromObject(vars: UriFillObject): string;
        fill(callback: (varName: string) => string): string;
        fill(vars: UriFillObject): string;
        fromUri(uri: string): UriFillObject;
        varNames: string[];
        template: string;
    }
}

export = utpl;
