# Signal

Switch to Signal, a CLI tool that enhances you to keep up with your content. Ditch `beacons.ai`, and use Signal. All you gotta do is 5 simple steps, a baby could do it.

1. Download this source code and set it as a CLI tool using `npm install -g`.
2. Create a `signal.config.json` file and write to it, using our docs as a reference.
3. Run the CLI tool along with the location of the path to the config file as an argument.
4. Buy a domain.
5. Smack your source code (that has been produced inside of a `out/` directory) onto some random hosting site and watch it in glory.

Signal essentially converts this `configuration` into a parsed HTML string and a CSS string; this is then stored into the `out/` directory.

---

## Full Explanatory | Docs

First what you'd do is create a `*.config.json`, where `*` can be replaced with anything. Next, copy the following JSON boilerplate into your file:
```json
{
    "signal": {
        // TO DO
    },
    "style: ""
}
```

