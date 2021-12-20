// sanitization functions
const escapeHTML = (str) => str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escapeAttribute = (str) => escapeHTML(str).replace(/"/g, "&quot;");

// generate opening tag with attributes
const openingTag = (tag, attributes) => '<' + [tag, Object.entries(attributes || {}).map(pair => pair[1] ? `${pair[0]}="${escapeAttribute(pair[1])}"` : pair[0])].flat().join(" ") + '>';

// return html tags in an object so that they don't get escaped
const regularElement = (tag, content) => {

    // check if the first element is an attributes object
    const attributes = (typeof content[0] === "object" && !("html" in content[0])) && content.shift();
    const innerHTML = content.map(value => {
        
        // if it's a tag, return the raw HTML
        if(typeof value === "object" && "html" in value) {
            return value.html;
        }

        const text = String(value);
        if(attributes?.unsafe) {
            return text;
        }

        return escapeHTML(text);

    }).join("");

    return {
        html: openingTag(tag, attributes) + innerHTML + `</${tag}>`
    };

};

const voidElement = (tag, attributes) => ({html: openingTag(tag, attributes)});

module.exports = {regularElement, voidElement};