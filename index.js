// sanitization functions
const escapeHTML = str => String(str).replace(/&/g, "&amp;")
                                       .replace(/</g, "&lt;")
                                       .replace(/>/g, "&gt;");

const escapeAttribute = str => escapeHTML(str).replace(/"/g, "&quot;");

// generate opening tag with attributes
const generateOpenTag = (tag, attributes) => {
    if(attributes) {
        return `<${tag} ${Object.entries(attributes).map(entry => entry[0] === null ? entry[0] : `${entry[0]}="${escapeAttribute(entry[1])}"`).join(" ")}>`
    }
    return `<${tag}>`
};

const convert = value => {

    // ignore null, undefined
    if(value == null) {
        return "";
    }

    // handle raw markup
    if(value?.html) {
        return value.html;   
    }

    // recursively join arrays
    if(Array.isArray(value)) {
        return value.map(convert).join("");
    }

    return escapeHTML(value);

};

const generateElement = (tag, content) => {
    let attributes = null;
    if(content[0] && typeof content[0] === "object" && !("html" in content[0])) {
        attributes = content.shift();
    }
    const innerHTML = content.map(convert).join("");
    return {html: generateOpenTag(tag, attributes) + innerHTML + `</${tag}>`};
};

const generateVoidElement = (tag, attributes) => ({html: generateOpenTag(tag, attributes)});

module.exports["tag"] = (tag, ...content) => generateRegularElement(tag, content);
module.exports["raw"] = str => ({html: str});

/* --- code below this point is statically generated --- */
module.exports["a"] = (...content) => generateElement("a", content);
module.exports["abbr"] = (...content) => generateElement("abbr", content);
module.exports["address"] = (...content) => generateElement("address", content);
module.exports["article"] = (...content) => generateElement("article", content);
module.exports["aside"] = (...content) => generateElement("aside", content);
module.exports["audio"] = (...content) => generateElement("audio", content);
module.exports["b"] = (...content) => generateElement("b", content);
module.exports["bdi"] = (...content) => generateElement("bdi", content);
module.exports["bdo"] = (...content) => generateElement("bdo", content);
module.exports["blockquote"] = (...content) => generateElement("blockquote", content);
module.exports["body"] = (...content) => generateElement("body", content);
module.exports["button"] = (...content) => generateElement("button", content);
module.exports["canvas"] = (...content) => generateElement("canvas", content);
module.exports["caption"] = (...content) => generateElement("caption", content);
module.exports["cite"] = (...content) => generateElement("cite", content);
module.exports["code"] = (...content) => generateElement("code", content);
module.exports["colgroup"] = (...content) => generateElement("colgroup", content);
module.exports["data"] = (...content) => generateElement("data", content);
module.exports["datalist"] = (...content) => generateElement("datalist", content);
module.exports["dd"] = (...content) => generateElement("dd", content);
module.exports["del"] = (...content) => generateElement("del", content);
module.exports["details"] = (...content) => generateElement("details", content);
module.exports["dfn"] = (...content) => generateElement("dfn", content);
module.exports["dialog"] = (...content) => generateElement("dialog", content);
module.exports["div"] = (...content) => generateElement("div", content);
module.exports["dl"] = (...content) => generateElement("dl", content);
module.exports["dt"] = (...content) => generateElement("dt", content);
module.exports["em"] = (...content) => generateElement("em", content);
module.exports["fieldset"] = (...content) => generateElement("fieldset", content);
module.exports["figcaption"] = (...content) => generateElement("figcaption", content);
module.exports["figure"] = (...content) => generateElement("figure", content);
module.exports["footer"] = (...content) => generateElement("footer", content);
module.exports["form"] = (...content) => generateElement("form", content);
module.exports["h1"] = (...content) => generateElement("h1", content);
module.exports["h2"] = (...content) => generateElement("h2", content);
module.exports["h3"] = (...content) => generateElement("h3", content);
module.exports["h4"] = (...content) => generateElement("h4", content);
module.exports["h5"] = (...content) => generateElement("h5", content);
module.exports["h6"] = (...content) => generateElement("h6", content);
module.exports["head"] = (...content) => generateElement("head", content);
module.exports["header"] = (...content) => generateElement("header", content);
module.exports["html"] = (...content) => generateElement("html", content);
module.exports["i"] = (...content) => generateElement("i", content);
module.exports["iframe"] = (...content) => generateElement("iframe", content);
module.exports["ins"] = (...content) => generateElement("ins", content);
module.exports["kbd"] = (...content) => generateElement("kbd", content);
module.exports["label"] = (...content) => generateElement("label", content);
module.exports["legend"] = (...content) => generateElement("legend", content);
module.exports["li"] = (...content) => generateElement("li", content);
module.exports["main"] = (...content) => generateElement("main", content);
module.exports["map"] = (...content) => generateElement("map", content);
module.exports["mark"] = (...content) => generateElement("mark", content);
module.exports["math"] = (...content) => generateElement("math", content);
module.exports["menu"] = (...content) => generateElement("menu", content);
module.exports["meter"] = (...content) => generateElement("meter", content);
module.exports["nav"] = (...content) => generateElement("nav", content);
module.exports["noscript"] = (...content) => generateElement("noscript", content);
module.exports["object"] = (...content) => generateElement("object", content);
module.exports["ol"] = (...content) => generateElement("ol", content);
module.exports["optgroup"] = (...content) => generateElement("optgroup", content);
module.exports["option"] = (...content) => generateElement("option", content);
module.exports["output"] = (...content) => generateElement("output", content);
module.exports["p"] = (...content) => generateElement("p", content);
module.exports["picture"] = (...content) => generateElement("picture", content);
module.exports["portal"] = (...content) => generateElement("portal", content);
module.exports["pre"] = (...content) => generateElement("pre", content);
module.exports["progress"] = (...content) => generateElement("progress", content);
module.exports["q"] = (...content) => generateElement("q", content);
module.exports["rp"] = (...content) => generateElement("rp", content);
module.exports["rt"] = (...content) => generateElement("rt", content);
module.exports["ruby"] = (...content) => generateElement("ruby", content);
module.exports["s"] = (...content) => generateElement("s", content);
module.exports["samp"] = (...content) => generateElement("samp", content);
module.exports["script"] = (...content) => generateElement("script", content);
module.exports["section"] = (...content) => generateElement("section", content);
module.exports["select"] = (...content) => generateElement("select", content);
module.exports["slot"] = (...content) => generateElement("slot", content);
module.exports["small"] = (...content) => generateElement("small", content);
module.exports["span"] = (...content) => generateElement("span", content);
module.exports["strong"] = (...content) => generateElement("strong", content);
module.exports["style"] = (...content) => generateElement("style", content);
module.exports["sub"] = (...content) => generateElement("sub", content);
module.exports["summary"] = (...content) => generateElement("summary", content);
module.exports["sup"] = (...content) => generateElement("sup", content);
module.exports["svg"] = (...content) => generateElement("svg", content);
module.exports["table"] = (...content) => generateElement("table", content);
module.exports["tbody"] = (...content) => generateElement("tbody", content);
module.exports["td"] = (...content) => generateElement("td", content);
module.exports["template"] = (...content) => generateElement("template", content);
module.exports["textarea"] = (...content) => generateElement("textarea", content);
module.exports["tfoot"] = (...content) => generateElement("tfoot", content);
module.exports["th"] = (...content) => generateElement("th", content);
module.exports["thead"] = (...content) => generateElement("thead", content);
module.exports["time"] = (...content) => generateElement("time", content);
module.exports["title"] = (...content) => generateElement("title", content);
module.exports["tr"] = (...content) => generateElement("tr", content);
module.exports["u"] = (...content) => generateElement("u", content);
module.exports["ul"] = (...content) => generateElement("ul", content);
module.exports["var"] = (...content) => generateElement("var", content);
module.exports["video"] = (...content) => generateElement("video", content);
module.exports["area"] = (attributes) => generateVoidElement("area", attributes);
module.exports["base"] = (attributes) => generateVoidElement("base", attributes);
module.exports["br"] = (attributes) => generateVoidElement("br", attributes);
module.exports["col"] = (attributes) => generateVoidElement("col", attributes);
module.exports["embed"] = (attributes) => generateVoidElement("embed", attributes);
module.exports["hr"] = (attributes) => generateVoidElement("hr", attributes);
module.exports["img"] = (attributes) => generateVoidElement("img", attributes);
module.exports["input"] = (attributes) => generateVoidElement("input", attributes);
module.exports["link"] = (attributes) => generateVoidElement("link", attributes);
module.exports["meta"] = (attributes) => generateVoidElement("meta", attributes);
module.exports["param"] = (attributes) => generateVoidElement("param", attributes);
module.exports["source"] = (attributes) => generateVoidElement("source", attributes);
module.exports["track"] = (attributes) => generateVoidElement("track", attributes);
module.exports["wbr"] = (attributes) => generateVoidElement("wbr", attributes);