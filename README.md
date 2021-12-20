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

* The generated HTML is returned as a field named `html` in an object.
* To set attributes on a tag pass an object as the first argument.
* Strings are escaped by default unless `unsafe` is set to true in the attributes.
* A couple obscure elements whose names conflict with JS reserved words are omitted, but I don't really remember which ones...