## Remove Copy Watermark

<div>

<a href="https://github.com/google/gts">
  <img src="https://img.shields.io/badge/code%20style-google-blueviolet.svg"
    alt="Code Style: Google" />
</a>

<a href="https://opensource.org/licenses/MIT">
  <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg"
    alt="License: MIT" />
</a>

<a href="https://liberapay.com/jeffreytse">
  <img src="https://img.shields.io/liberapay/goal/jeffreytse.svg?logo=liberapay"
    alt="Donate (Liberapay)" />
</a>

<a href="https://patreon.com/jeffreytse">
  <img src="https://img.shields.io/badge/support-patreon-F96854.svg?style=flat-square"
    alt="Donate (Patreon)" />
</a>

<a href="https://ko-fi.com/jeffreytse">
<img height="20" src="https://www.ko-fi.com/img/githubbutton_sm.svg"
alt="Donate (Ko-fi)" />
</a>

</div>

A tool to automatically remove the copyright information carried when
copying text content on some websites, with this tool,  you no longer
have to manually remove those annoying little tails after pasting.

## Features

Supports:

- [x] TamperMonkey Script
- [ ] Chrome Extension
- ...

## Development

To set up your environment to develop this tool, run `npm install`.

Your environment is setup just like a normal node project! To test your
project, run `npm run build`. This builds the whole project and generate
all supported plugin scripts. You can edit the source code under `src`,
`plugins`, `test`, etc. like normal to test NodeJS project. As you make
modifications to the source code and configuration files, you need to
rerun the command and you should see the changes, just like normal.

## Contributing

Issues and Pull Requests are greatly appreciated. If you've never
contributed to an open source project before I'm more than happy to walk
you through how to create a pull request.

You can start by [opening an issue](https://github.com/jeffreytse/remove-copy-watermark/issues/new)
describing the problem that you're looking to resolve and we'll go from there.

## Browser Support

This library relies on both [Selection](https://developer.mozilla.org/en-US/docs/Web/API/Selection) and [execCommand](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand) APIs. The first one is [supported by all browsers](https://caniuse.com/#search=selection) while the second one is supported in the following browsers.

| <img src="https://clipboardjs.com/assets/images/chrome.png" width="48px" height="48px" alt="Chrome logo"> | <img src="https://clipboardjs.com/assets/images/edge.png" width="48px" height="48px" alt="Edge logo"> | <img src="https://clipboardjs.com/assets/images/firefox.png" width="48px" height="48px" alt="Firefox logo"> | <img src="https://clipboardjs.com/assets/images/ie.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://clipboardjs.com/assets/images/opera.png" width="48px" height="48px" alt="Opera logo"> | <img src="https://clipboardjs.com/assets/images/safari.png" width="48px" height="48px" alt="Safari logo"> |
| :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: |
|                                                   42+ ✔                                                   |                                                 12+ ✔                                                 |                                                    41+ ✔                                                    |                                                       9+ ✔                                                       |                                                  29+ ✔                                                  |                                                   10+ ✔                                                   |

## Credits

- [webpack](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for node.
- [tampermonkey](https://github.com/maxogden/websocket-stream) - WebSockets with the node stream API.

## License

This theme is licensed under the [MIT license](https://opensource.org/licenses/mit-license.php) © JeffreyTse.

<!-- External links -->
