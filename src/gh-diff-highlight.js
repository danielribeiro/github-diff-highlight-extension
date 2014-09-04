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
            t.html(escapeNbsp(t.html()))
            var text = unEscapeNbsp(t.text());
            t.contents().filter(function() { return this.nodeType == Node.TEXT_NODE; }).remove()
            t.contents().filter(function() { return this.nodeName == "SPAN"; }).remove()
            t.append("<pre></pre>");
            t.find("pre").text(text);
        })
        $(".blob-code pre").addClass("highlight");
        $.SyntaxHighlighter.init({lineNumbers: false});
    }
    applySyntaxHighlighter()
    // set event-handler for pjax loading
    $(document).on('pjax:success', function() {
        setTimeout(applySyntaxHighlighter, 100);
    });
});
