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
    var applySyntaxHighlighter = function(){
      $(".diff-line-pre").addClass("highlight");
      $.SyntaxHighlighter.init({lineNumbers: false});
    };

    applySyntaxHighlighter();

    // set event-handler for pjax loading
    $(document).on('pjax:success', function(){
      setTimeout(applySyntaxHighlighter, 100);
    });
});
