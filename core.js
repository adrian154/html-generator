// sanitization functions
const escapeHTML = (str) => str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeAttribute = (str) => escapeHTML(str).replace(/"/g, "&quot;");

// generate opening tag with attributes
const openingTag = (tag, attributes) => '<' + [tag, Object.entries(attributes || {}).map(pair => pair[1] == null ? pair[0] : `${pair[0]}="${escapeAttribute(String(pair[1]))}"`)].flat().join(" ") + '>';

const convert = value => {

    // value returned by other tag-generating methods: return raw HTML
    if(typeof value === "object" && "html" in value) {
        return value.html;   
    }

    // escape strings
    if(typeof value === "string") {
        return escapeHTML(value);
    }

    // recursively convert arrays
    if(Array.isArray(value)) {
        return value.map(convert).join("");
    }

    return value == null ? "" : String(value);

};

// return html tags in an object so that they don't get escaped
const regularElement = (tag, content) => {
    const attributes = (typeof content[0] === "object" && !("html" in content[0])) && content.shift();
    const innerHTML = content.map(convert).join("");
    return {html: openingTag(tag, attributes) + innerHTML + `</${tag}>`};
};

const voidElement = (tag, attributes) => ({html: openingTag(tag, attributes)});
module.exports = {regularElement, voidElement};