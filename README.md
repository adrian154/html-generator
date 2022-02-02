# html-generator

html-generator is a lightweight HTML generator.

## Usage

```
const { html, body, head, title, meta, link, h1, p, a } = require(".");

console.log(html({lang: "en"},
    head(
        meta({charset: "utf-8"}),
        title("My Website"),
        link({rel: "stylesheet", href: "my-stylesheet.css"})
    ),
    body(
        h1("My Awesome Website"),
        p("Check out my cool new HTML generator."),
        p("<script>alert('It wonder if it's vulnerable to XSS...')</script>"),
        p("Check out the ", a({href: "https://github.com/adrian154/"}, "other stuff"), " that I'm working on.")
    )
).html);
```

**Result (prettified):**
```
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>My Website</title>
        <link rel="stylesheet" href="my-stylesheet.css">
    </head>
    <body>
        <h1>My Awesome Website</h1>
        <p>Check out my cool new HTML generator.</p>
        <p>&lt;script&gt;alert('It wonder if it's vulnerable to XSS...')&lt;/script&gt;</p>
        <p>Check out the <a href="https://github.com/adrian154/">other stuff</a> that I'm working on.</p>
    </body>
</html>
```

## Notes

* All HTML-generating functions return the generated markup as a field named `html` in an object.
    * Markup can't be passed to other HTML-generating functions as strings directly because all strings are escaped by default.
    * You can use this to insert 'unsafe' values into your templates.
    * This is done automatically by `raw()`, which accepts a string and outputs an HTML object.
* HTML-generating functions understand these types of inputs:
    * `object`: If the object contains a field named `html`, the value is directly inserted into the tag without escaping.
    * `string`: The value is escaped first.
    * `array`: The members of the array are recursively converted following these rules and joined together without spaces.
    * other:  If the value is null or undefined, nothing is outputted. Otherwise, the value is cast to a String.
* To set attributes on a tag, pass an object as the first argument.
    * A value of null or undefined (but not other falsey values) can be used to create an attribute with no value, which is sometimes desirable e.g. for attributes like `readonly`.