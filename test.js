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