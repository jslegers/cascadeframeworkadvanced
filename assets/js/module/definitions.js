App.define([{
        id: 'jquery',
        name: 'jQuery',
        path: Detector.jquerylegacy ? App.jqueryPath('jquery-1.10.2.min.js') : App.jqueryPath('jquery-2.0.3.min.js')
    }, {
        id: 'jquery.ui.core',
        name: 'jQuery UI core',
        dependencies: 'jquery',
        path: App.jqueryUIPath('core/jquery.ui.core.js')
    }, {
        id: 'jquery.ui.widget',
        name: 'jQuery UI widget',
        dependencies: 'jquery',
        path: App.jqueryUIPath('core/jquery.ui.widget.js')
    }, {
        id: 'jquery.ui.mouse',
        name: 'jQuery UI mouse',
        dependencies: ['jquery.ui.core', 'jquery.ui.widget'],
        path: App.jqueryUIPath('core/jquery.ui.mouse.js')
    }, {
        id: 'jquery.ui.position',
        name: 'jQuery UI position',
        dependencies: 'jquery',
        path: App.jqueryUIPath('core/jquery.ui.position.js')
    }, {
        id: 'jquery.ui.draggable',
        name: 'jQuery UI draggable',
        dependencies: 'jquery.ui.mouse',
        path: App.jqueryUIPath('interaction/jquery.ui.draggable.js')
    }, {
        id: 'jquery.ui.droppable',
        name: 'jQuery UI droppable',
        dependencies: 'jquery.ui.draggable',
        path: App.jqueryUIPath('interaction/jquery.ui.droppable.js')
    }, {
        id: 'jquery.ui.resizable',
        name: 'jQuery UI resizable',
        dependencies: 'jquery.ui.mouse',
        path: App.jqueryUIPath('interaction/jquery.ui.resizable.js')
    }, {
        id: 'jquery.ui.selectable',
        name: 'jQuery UI selectable',
        dependencies: 'jquery.ui.mouse',
        path: App.jqueryUIPath('interaction/jquery.ui.selectable.js')
    }, {
        id: 'jquery.ui.sortable',
        name: 'jQuery UI sortable',
        dependencies: 'jquery.ui.mouse',
        path: App.jqueryUIPath('interaction/jquery.ui.sortable.js')
    }, {
        id: 'jquery.ui.accordion',
        name: 'jQuery UI accordion',
        dependencies: ['jquery.ui.core', 'jquery.ui.widget'],
        path: App.jqueryUIPath('widget/jquery.ui.accordion.js')
    }, {
        id: 'jquery.ui.autocomplete',
        name: 'jQuery UI autocomplete',
        dependencies: 'jquery.ui.menu',
        path: App.jqueryUIPath('widget/jquery.ui.autocomplete.js')
    }, {
        id: 'jquery.ui.button',
        name: 'jQuery UI button',
        dependencies: ['jquery.ui.core', 'jquery.ui.widget'],
        path: App.jqueryUIPath('widget/jquery.ui.button.js')
    }, {
        id: 'jquery.ui.datepicker',
        name: 'jQuery UI datepicker',
        dependencies: 'jquery.ui.core',
        path: App.jqueryUIPath('widget/jquery.ui.datepicker.js')
    }, {
        id: 'jquery.ui.dialog',
        name: 'jQuery UI dialog',
        dependencies: ['jquery.ui.draggable', 'jquery.ui.resizable', 'jquery.ui.position', 'jquery.ui.button'],
        path: App.jqueryUIPath('widget/jquery.ui.dialog.js')
    }, {
        id: 'jquery.ui.menu',
        name: 'jQuery UI menu',
        dependencies: ['jquery.ui.core', 'jquery.ui.widget', 'jquery.ui.position'],
        path: App.jqueryUIPath('widget/jquery.ui.menu.js')
    }, {
        id: 'jquery.ui.progressbar',
        name: 'jQuery UI progressbar',
        dependencies: ['jquery.ui.core', 'jquery.ui.widget'],
        path: App.jqueryUIPath('widget/jquery.ui.progressbar.js')
    }, {
        id: 'jquery.ui.slider',
        name: 'jQuery UI slider',
        dependencies: 'jquery.ui.mouse',
        path: App.jqueryUIPath('widget/jquery.ui.slider.js')
    }, {
        id: 'jquery.ui.spinner',
        name: 'jQuery UI spinner',
        dependencies: 'jquery.ui.button',
        path: App.jqueryUIPath('widget/jquery.ui.spinner.js')
    }, {
        id: 'jquery.ui.tabs',
        name: 'jQuery UI tabs',
        dependencies: ['jquery.ui.core', 'jquery.ui.widget'],
        path: App.jqueryUIPath('widget/jquery.ui.tabs.js')
    }, {
        id: 'jquery.ui.tooltip',
        name: 'jQuery UI tooltip',
        dependencies: ['jquery.ui.core', 'jquery.ui.widget', 'jquery.ui.position'],
        path: App.jqueryUIPath('widget/jquery.ui.tooltip.js')
    }, {
        id: 'jquery.ui.datepicker.ar',
        name: 'jquery.ui.datepicker-ar',
        dependencies: 'jquery.ui.datepicker',
        path: App.jqueryUIPath('widget/i18n/jquery.ui.datepicker-ar.js')
    }, {
        id: 'jquery.ui.datepicker.fr',
        name: 'jquery.ui.datepicker-fr',
        dependencies: 'jquery.ui.datepicker',
        path: App.jqueryUIPath('widget/i18n/jquery.ui.datepicker-fr.js')
    }, {
        id: 'jquery.ui.datepicker.he',
        name: 'jquery.ui.datepicker-he',
        dependencies: 'jquery.ui.datepicker',
        path: App.jqueryUIPath('widget/i18n/jquery.ui.datepicker-he.js')
    }, {
        id: 'jquery.ui.datepicker.zh-TW',
        name: 'jquery.ui.datepicker-zh-TW',
        dependencies: 'jquery.ui.datepicker',
        path: App.jqueryUIPath('widget/i18n/jquery.ui.datepicker-zh-TW.js')
    }, {
        id: 'easing',
        name: 'Easing',
        dependencies: 'jquery',
        path: App.jqueryPath('jquery.easing.js')
    }, {
        id: 'flot',
        name: 'Flot',
        dependencies: 'jquery',
        path: App.jqueryPath('flot/jquery.flot.js')
    }, {
        id: 'cascade',
        name: 'Cascade',
        dependencies: ['jquery', 'easing'],
        path: App.jqueryPath('cascade/core.js')
    }, {
        id: 'charts',
        name: 'Charts',
        dependencies: ['cascade', 'flot'],
        path: App.jqueryPath('cascade/chart.js')
    }, {
        id: 'chartcategories',
        name: 'Chart Categories',
        dependencies: 'charts',
        path: App.jqueryPath('flot/jquery.flot.categories.js')
    }, {
        id: 'parsley',
        name: 'Parsley',
        dependencies: 'jquery',
        path: App.jqueryPath('parsley/parsley.min.js')
    }, {
        id: 'analytics',
        name: 'Google Analytics',
        path: (document.location.protocol === 'https:' ? '//ssl' : 'http://www') + '.google-analytics.com/ga.js',
        callback: function() {
            var _gaq = _gaq || [];
            _gaq.push(['_setAccount', App.trackingcode], ['_trackPageview']);
        }
    }]);