var spinner = $("#spinner").spinner();
$("#disable").click(function() {
    if (spinner.spinner("option", "disabled")) {
        spinner.spinner("enable");
    } else {
        spinner.spinner("disable");
    }
});
$("#destroy").click(function() {
    if (spinner.data("ui-spinner")) {
        spinner.spinner("destroy");
    } else {
        spinner.spinner();
    }
});
$("#getvalue").click(function() {
    alert(spinner.spinner("value"));
});
$("#setvalue").click(function() {
    spinner.spinner("value", 5);
});
$("button").button();