$.SyntaxHighlighter.load = function() {
    // Prepare
    var SyntaxHighlighter = this,
        config = SyntaxHighlighter.config,
        prettifyBaseUrl = config.prettifyBaseUrl,
        baseUrl = config.baseUrl,
        themes = config.themes;

    // Append
    if ( !SyntaxHighlighter.loaded() ) {
        SyntaxHighlighter.loadedExtras = true;
    }

    // Chain
    return this;
}

var escapeNbsp = function(str) { return str.replace(/&nbsp;/g, "\x11"); }
var unEscapeNbsp = function(str) { return str.replace(/\x11/g, " "); }

$(function() {
    var applySyntaxHighlighter = function () {
        console.log("Applying SyntaxHighlighter from https://chrome.google.com/webstore/detail/gh-diff-highlight/gjljgldconccfbldbnnpbgahpckhjcfj")
        $(".blob-code").each(function() {
            var t = $(this);
            var commentButton = t.find("b.add-line-comment:first").detach();
            t.wrapInner("<pre class='highlight'></pre>");
            commentButton.prependTo(t)
        })
        $.SyntaxHighlighter.init({lineNumbers: false});
    }
    applySyntaxHighlighter()
    // set event-handler for pjax loading
    $(document).on('pjax:success', function() {
        setTimeout(applySyntaxHighlighter, 100);
    });
});
