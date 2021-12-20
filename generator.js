// generate all the tag-generating functions statically so that 
const regularElements = ["a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","html","i","iframe","ins","kbd","label","legend","li","main","map","mark","math","menu","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","portal","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","slot","small","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","u","ul","var","video"];
const voidElements = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];

const generatedCode = [
    regularElements.map(tag => `module.exports["${tag}"] = (...content) => regularElement("${tag}", content);`),
    voidElements.map(tag => `module.exports["${tag}"] = (attributes) => voidElement("${tag}", attributes);`)
].flat().join("\n");

const fs = require("fs");
fs.writeFileSync("index.js", "const {regularElement, voidElement} = require('./core.js');\n" + generatedCode);