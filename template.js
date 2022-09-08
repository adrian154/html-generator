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
