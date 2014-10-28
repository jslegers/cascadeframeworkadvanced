$(".draggable").draggable({handle: "p", containment: "#containment-wrapper"});
$(".draggable2").draggable({cancel: "p.ui-widget-header", containment: "#containment-wrapper"});
$("div, p").disableSelection();