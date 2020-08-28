# Fork Me GitBook Plugin

在原仓库基础上，修改 fork-me-on-github 图片的地址，提高国内用户访问图片的速度。插件的用法不变。

Display a ribbon linked to your GitHub repo in your gitbook.

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[Plugin Page][plugin-url]

## Image

### Longer Page Width

![ribbon with long width][longver-png-url]

### Short Page Width

![button with short width][shortver-png-url]

## Usage

Put this in your `book.json`:

```
{
  "plugins": [ "forkmegithub" ],
  "pluginsConfig": {
    "forkmegithub": {
      "url": "https://github.com/your/repo"
    }
  }
}
```

### Properties

 * url: Your github repository
 * color: Ribbon color (default: gray)
   * gray, darkblue, red, green, orange

## Contributing

Hope your request!

Fork [me][github-url] on GitHub, and [request][github-pr-url] your fix in this!

[github-url]: https://github.com/wangding/gitbook-plugin-forkmegithub
[github-pr-url]: https://github.com/wangding/gitbook-plugin-forkmegithub/pulls
[npm-image]: https://img.shields.io/npm/v/gitbook-plugin-forkmegithub.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gitbook-plugin-forkmegithub-cn
[license-image]: https://img.shields.io/npm/l/gitbook-plugin-forkmegithub.svg?style=flat-square
[license-url]: https://github.com/wangding/gitbook-plugin-forkmegithub/blob/master/LICENSE
[downloads-image]: http://img.shields.io/npm/dm/gitbook-plugin-forkmegithub-cn.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/gitbook-plugin-forkmegithub-cn
[plugin-url]: https://plugins.gitbook.com/plugin/forkmegithub-cn
[longver-png-url]: https://cdn.jsdelivr.net/gh/wangding/gitbook-plugin-forkmegithub@master/docs/assets/longver.png
[shortver-png-url]: https://cdn.jsdelivr.net/gh/wangding/gitbook-plugin-forkmegithub@master/docs/assets/shortver.png

