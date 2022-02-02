// sanitization functions
const escapeHTML = (str) => String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeAttribute = (str) => String(str).replace(/&/g, "&amp;").replace(/"/g, "&quot;");

// generate opening tag with attributes
const openingTag = (tag, attributes) => `<${tag}${attributes ? " " + Object.entries(attributes).map(pair => pair[1] == null ? pair[0] : `${pair[0]}="${escapeAttribute(pair[1])}"`).join(" ") : ""}>`;

const convert = value => {

    // if the value was returned by another tag-generating method, return the raw HTML
    if(value?.html) {
        return value.html;   
    }

    // recursively join arrays
    if(Array.isArray(value)) {
        return value.map(convert).join("");
    }

    return escapeHTML(value);

};

// return html tags in an object so that they don't get escaped
const regularElement = (tag, content) => {
    const attributes = (typeof content[0] === "object" && !("html" in content[0])) && content.shift();
    const innerHTML = content.map(convert).join("");
    return {html: openingTag(tag, attributes) + innerHTML + `</${tag}>`};
};

const voidElement = (tag, attributes) => ({html: openingTag(tag, attributes)});

// helper functions
module.exports["tag"] = regularElement;
module.exports["raw"] = str => ({html: str});

/* --- code below this point is statically generated --- */
module.exports["a"] = (...content) => regularElement("a", content);
module.exports["abbr"] = (...content) => regularElement("abbr", content);
module.exports["address"] = (...content) => regularElement("address", content);
module.exports["article"] = (...content) => regularElement("article", content);
module.exports["aside"] = (...content) => regularElement("aside", content);
module.exports["audio"] = (...content) => regularElement("audio", content);
module.exports["b"] = (...content) => regularElement("b", content);
module.exports["bdi"] = (...content) => regularElement("bdi", content);
module.exports["bdo"] = (...content) => regularElement("bdo", content);
module.exports["blockquote"] = (...content) => regularElement("blockquote", content);
module.exports["body"] = (...content) => regularElement("body", content);
module.exports["button"] = (...content) => regularElement("button", content);
module.exports["canvas"] = (...content) => regularElement("canvas", content);
module.exports["caption"] = (...content) => regularElement("caption", content);
module.exports["cite"] = (...content) => regularElement("cite", content);
module.exports["code"] = (...content) => regularElement("code", content);
module.exports["colgroup"] = (...content) => regularElement("colgroup", content);
module.exports["data"] = (...content) => regularElement("data", content);
module.exports["datalist"] = (...content) => regularElement("datalist", content);
module.exports["dd"] = (...content) => regularElement("dd", content);
module.exports["del"] = (...content) => regularElement("del", content);
module.exports["details"] = (...content) => regularElement("details", content);
module.exports["dfn"] = (...content) => regularElement("dfn", content);
module.exports["dialog"] = (...content) => regularElement("dialog", content);
module.exports["div"] = (...content) => regularElement("div", content);
module.exports["dl"] = (...content) => regularElement("dl", content);
module.exports["dt"] = (...content) => regularElement("dt", content);
module.exports["em"] = (...content) => regularElement("em", content);
module.exports["fieldset"] = (...content) => regularElement("fieldset", content);
module.exports["figcaption"] = (...content) => regularElement("figcaption", content);
module.exports["figure"] = (...content) => regularElement("figure", content);
module.exports["footer"] = (...content) => regularElement("footer", content);
module.exports["form"] = (...content) => regularElement("form", content);
module.exports["h1"] = (...content) => regularElement("h1", content);
module.exports["h2"] = (...content) => regularElement("h2", content);
module.exports["h3"] = (...content) => regularElement("h3", content);
module.exports["h4"] = (...content) => regularElement("h4", content);
module.exports["h5"] = (...content) => regularElement("h5", content);
module.exports["h6"] = (...content) => regularElement("h6", content);
module.exports["head"] = (...content) => regularElement("head", content);
module.exports["header"] = (...content) => regularElement("header", content);
module.exports["html"] = (...content) => regularElement("html", content);
module.exports["i"] = (...content) => regularElement("i", content);
module.exports["iframe"] = (...content) => regularElement("iframe", content);
module.exports["ins"] = (...content) => regularElement("ins", content);
module.exports["kbd"] = (...content) => regularElement("kbd", content);
module.exports["label"] = (...content) => regularElement("label", content);
module.exports["legend"] = (...content) => regularElement("legend", content);
module.exports["li"] = (...content) => regularElement("li", content);
module.exports["main"] = (...content) => regularElement("main", content);
module.exports["map"] = (...content) => regularElement("map", content);
module.exports["mark"] = (...content) => regularElement("mark", content);
module.exports["math"] = (...content) => regularElement("math", content);
module.exports["menu"] = (...content) => regularElement("menu", content);
module.exports["meter"] = (...content) => regularElement("meter", content);
module.exports["nav"] = (...content) => regularElement("nav", content);
module.exports["noscript"] = (...content) => regularElement("noscript", content);
module.exports["object"] = (...content) => regularElement("object", content);
module.exports["ol"] = (...content) => regularElement("ol", content);
module.exports["optgroup"] = (...content) => regularElement("optgroup", content);
module.exports["option"] = (...content) => regularElement("option", content);
module.exports["output"] = (...content) => regularElement("output", content);
module.exports["p"] = (...content) => regularElement("p", content);
module.exports["picture"] = (...content) => regularElement("picture", content);
module.exports["portal"] = (...content) => regularElement("portal", content);
module.exports["pre"] = (...content) => regularElement("pre", content);
module.exports["progress"] = (...content) => regularElement("progress", content);
module.exports["q"] = (...content) => regularElement("q", content);
module.exports["rp"] = (...content) => regularElement("rp", content);
module.exports["rt"] = (...content) => regularElement("rt", content);
module.exports["ruby"] = (...content) => regularElement("ruby", content);
module.exports["s"] = (...content) => regularElement("s", content);
module.exports["samp"] = (...content) => regularElement("samp", content);
module.exports["script"] = (...content) => regularElement("script", content);
module.exports["section"] = (...content) => regularElement("section", content);
module.exports["select"] = (...content) => regularElement("select", content);
module.exports["slot"] = (...content) => regularElement("slot", content);
module.exports["small"] = (...content) => regularElement("small", content);
module.exports["span"] = (...content) => regularElement("span", content);
module.exports["strong"] = (...content) => regularElement("strong", content);
module.exports["style"] = (...content) => regularElement("style", content);
module.exports["sub"] = (...content) => regularElement("sub", content);
module.exports["summary"] = (...content) => regularElement("summary", content);
module.exports["sup"] = (...content) => regularElement("sup", content);
module.exports["svg"] = (...content) => regularElement("svg", content);
module.exports["table"] = (...content) => regularElement("table", content);
module.exports["tbody"] = (...content) => regularElement("tbody", content);
module.exports["td"] = (...content) => regularElement("td", content);
module.exports["template"] = (...content) => regularElement("template", content);
module.exports["textarea"] = (...content) => regularElement("textarea", content);
module.exports["tfoot"] = (...content) => regularElement("tfoot", content);
module.exports["th"] = (...content) => regularElement("th", content);
module.exports["thead"] = (...content) => regularElement("thead", content);
module.exports["time"] = (...content) => regularElement("time", content);
module.exports["title"] = (...content) => regularElement("title", content);
module.exports["tr"] = (...content) => regularElement("tr", content);
module.exports["u"] = (...content) => regularElement("u", content);
module.exports["ul"] = (...content) => regularElement("ul", content);
module.exports["var"] = (...content) => regularElement("var", content);
module.exports["video"] = (...content) => regularElement("video", content);
module.exports["area"] = (attributes) => voidElement("area", attributes);
module.exports["base"] = (attributes) => voidElement("base", attributes);
module.exports["br"] = (attributes) => voidElement("br", attributes);
module.exports["col"] = (attributes) => voidElement("col", attributes);
module.exports["embed"] = (attributes) => voidElement("embed", attributes);
module.exports["hr"] = (attributes) => voidElement("hr", attributes);
module.exports["img"] = (attributes) => voidElement("img", attributes);
module.exports["input"] = (attributes) => voidElement("input", attributes);
module.exports["link"] = (attributes) => voidElement("link", attributes);
module.exports["meta"] = (attributes) => voidElement("meta", attributes);
module.exports["param"] = (attributes) => voidElement("param", attributes);
module.exports["source"] = (attributes) => voidElement("source", attributes);
module.exports["track"] = (attributes) => voidElement("track", attributes);
module.exports["wbr"] = (attributes) => voidElement("wbr", attributes);