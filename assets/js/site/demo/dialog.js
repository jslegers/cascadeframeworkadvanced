$(function() {
    $("#dialog-confirm").dialog({
        resizable: true,
        modal: true,
        buttons: {
            "Delete all items": function() {
                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });
});



