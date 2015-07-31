# github-diff-highlight-extension

**Important:** this project is deprecated, since GitHub supports this natively: https://github.com/blog/1932-syntax-highlighted-diffs

[Chrome Extension](https://chrome.google.com/webstore/detail/gh-diff-highlight/gjljgldconccfbldbnnpbgahpckhjcfj) syntax highlight diffs on GitHub:

![](https://github.com/danielribeiro/github-diff-highlight/raw/master/docs/example.png)

## Hacking

The project is based on [jquery-syntaxhighlighter](http://balupton.github.com/jquery-syntaxhighlighter/demo/), which is itself based on [Google's Prettify](http://code.google.com/p/google-code-prettify/).

My fork of [jquery-syntaxhighlighter](https://github.com/balupton/jquery-syntaxhighlighter) is included inline in the project. It essentially removes borders on the highlighted pre elements.

To build the extension, just run

```bash
$ ./package.sh
```


## Meta

Created by [Daniel Ribeiro](http://metaphysicaldeveloper.wordpress.com/about-me). 

Released under the MIT License: http://www.opensource.org/licenses/mit-license.php

https://github.com/danielribeiro/github-diff-highlight-extension
