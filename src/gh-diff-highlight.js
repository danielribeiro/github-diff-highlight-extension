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

$(function() {
    $(".diff-line-pre").addClass("highlight");
    $.SyntaxHighlighter.init({lineNumbers: false});
});
