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
        p("<script>alert('I wonder if it's vulnerable to XSS...')</script>"),
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
        <p>&lt;script&gt;alert('I wonder if it's vulnerable to XSS...')&lt;/script&gt;</p>
        <p>Check out the <a href="https://github.com/adrian154/">other stuff</a> that I'm working on.</p>
    </body>
</html>
```

# Notes

Functions generating regular elements have the following prototype:

```js
tag(attributes?: Object, ...content: Array | Object | String)
```

Each parameter passed as part of `content` is recursively processed according to the following rules:
- Strings are escaped
- If the value is an object and has a field named `html`, the value of that field is inserted without escaping
- Each element of an Array is processed according to these rules and joined with no spaces.

Functions generating void elements accept one optional argument, the attributes.

All functions return an object with a field called `html` containing the generated markup. This is done instead of returning a string because these methods are meant to be composed, and all strings are automatically escaped.

To create an attribute with no value, set the value to `null`.

## Sanitization

By default, html-generator sanitizes the following characters:

* **In Tag Body**
    * '&'
    * '<'
    * '>'
* **In Attributes**
    * '&'
    * '<'
    * '>'
    * '"'

You can insert values without sanitization by wrapping it in an object or using raw.

```js
// Example of bypassing sanitization
div(
    "<em>sanitized</em>",
    {html: "<em>not sanitized!</em>"},
    raw("<em>also not sanitized!</em>")
)
```

Output:

```html
<div>
    &lt;em&gt;sanitized&lt;/em&gt;
    <em>not sanitized!</em>
    <em>also not sanitized!</em>
</div>
```

**WARNING!** There are still edge cases where XSS could happen. Refrain from using unsafe strings in any of the following places:
- Tag names
- Attribute names
- `<style>` tag body
- `<script>` tag body
- Event handler attribute (e.g. `onclick`)
- `style` attribute

## Custom Tags

You can create custom tags using the `tag` function. For example:

```js
tag("guid", {isPermalink: true}, "https://google.com/")
```

Output:

```
<guid isPermalink="true">https://google.com/</guid>
```