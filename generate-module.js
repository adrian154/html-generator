// generate all the tag-generating functions statically to play nice with IDEs
const {regularElements, voidElements} = require("./data.json");

const generatedCode = [
    regularElements.map(tag => `module.exports["${tag}"] = (...content) => generateElement("${tag}", content);`),
    voidElements.map(tag => `module.exports["${tag}"] = (attributes) => generateVoidElement("${tag}", attributes);`)
].flat().join("\n");

const fs = require("fs");
const template = fs.readFileSync("template.js", {encoding: "utf-8"});
fs.writeFileSync("index.js", template + generatedCode, {encoding: "utf-8"});