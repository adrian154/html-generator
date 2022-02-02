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
