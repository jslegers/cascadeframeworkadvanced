switch (App.docPathEnd) {
    case 'dashboard.html':
        App.use([{
                dependencies: 'cascade',
                callback: function () {
                    App.use({
                        dependencies: 'chartcategories',
                        callback: function () {
                            Cascade.drawchart(
                                    "#flot-demo",
                                    1.6,
                                    [[["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9]]],
                                    {
                                        series: {
                                            bars: {
                                                show: true,
                                                barWidth: 0.5,
                                                align: "center"
                                            }
                                        },
                                        xaxis: {
                                            mode: "categories",
                                            font: {
                                                size: 12
                                            }
                                        },
                                        yaxis: {
                                            font: {
                                                size: 12
                                            }
                                        }
                                    });
                        }
                    });
                }
            }, {
                dependencies: 'jquery.ui.sortable',
                callback: function () {
                    $(".column").sortable({
                        connectWith: ".column",
                        start: function (e, ui) {
                            ui.placeholder.height(ui.item.height());
                        }
                    });

                    $(".column").disableSelection();
                }
            }, {
                dependencies: 'analytics'
            }]);
        break;
    default:
        App.docPathEndNoExtension = App.docPathEnd.substring(0, App.docPathEnd.indexOf('.'));
        App.demofile = App.docPathEndNoExtension + '-demo';

        if (App.docPathEndNoExtension != 'index') {
            App.define({
                id: App.demofile,
                name: App.docPathEndNoExtension + ' demo',
                dependencies: ['jquery.ui.' + App.docPathEndNoExtension],
                path: App.sitePath('demo/' + App.docPathEndNoExtension + '.js')
            });
        } else {
            App.define({
                id: App.demofile,
                name: App.docPathEndNoExtension + ' demo',
                path: App.sitePath('demo/' + App.docPathEndNoExtension + '.js')
            });
        }

        switch (App.docPathEndNoExtension) {
            case 'index':
                App.use({
                    dependencies: [
                        'cascade', 'jquery.ui.accordion', 'jquery.ui.autocomplete', 'jquery.ui.button',
                        'jquery.ui.datepicker', 'jquery.ui.dialog', 'jquery.ui.menu', 'jquery.ui.progressbar',
                        'jquery.ui.slider', 'jquery.ui.spinner', 'jquery.ui.tabs', 'jquery.ui.tooltip', App.demofile]
                });
                break;
            case 'button':
                App.use({
                    dependencies: ['cascade', 'jquery.ui.menu', App.demofile]
                });
                break;
            case 'tabs':
                App.use({
                    dependencies: ['cascade', 'jquery.ui.dialog', App.demofile]
                });
                break;
            case 'datepicker':
                App.use({
                    dependencies: ['cascade', 'jquery.ui.datepicker.fr', 'jquery.ui.datepicker.he', 'jquery.ui.datepicker.ar', 'jquery.ui.datepicker.zh-TW', App.demofile]
                });
                break;
            case 'droppable':
                App.asset['droppable-demo'].dependencies.push('jquery.ui.dialog');
                App.use({
                    dependencies: ['cascade', App.demofile]
                });
                break;
            default:
                App.use({
                    dependencies: ['cascade', App.demofile]
                });
        }
}