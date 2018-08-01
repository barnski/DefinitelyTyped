import utmpl = require('uri-templates');
import URITemplate = utmpl.URITemplate;

let str: string;
let u: URITemplate;
const obj = {
    stringValue: 'test1',
    numberValue: 1,
    booleanValue: true,
    arrayOfStrings: ['test1', 'test2', 'test3'],
    arrayOfNumbers: [1, 3, 5],
    arrayOfBooleans: [true, false]
};

u = utmpl(str);

str = u.fillFromObject(obj);
str = u.fill(key => {
    return str;
});
str = u.fill(obj);
const newObj = u.fromUri(str);

let varNames: string[];

varNames = u.varNames;

let template: string;

template = u.template;
