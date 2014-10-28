$("#progressbar").progressbar({
    value: false
});
$("button").on("click", function(event) {
    var target = $(event.target),
            progressbar = $("#progressbar"),
            progressbarValue = progressbar.find(".ui-progressbar-value");
    if (target.is("#numButton")) {
        progressbar.progressbar("option", {
            value: Math.floor(Math.random() * 100)
        });
    } else if (target.is("#colorButton")) {
        progressbarValue.css({
            "background": '#' + Math.floor(Math.random() * 16777215).toString(16)
        });
    } else if (target.is("#falseButton")) {
        progressbar.progressbar("option", "value", false);
    }
});