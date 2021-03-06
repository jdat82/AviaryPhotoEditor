var currentView;
var $chooser = $('#open-dialog');

// Service that defines what happens when dragging a file over the window.
var ImportService = Base.extend({

    initialize: function () {
        Base.prototype.initialize.apply(this, arguments);
        _.bindAll(this, 'didChooseAFile', 'processFile', 'processUrl');
        $chooser.change(this.didChooseAFile);
    },

    processUrl: function (url) {
        console.info('Importing url: %s', url);
        this._process({url:url});
    },

    processFile: function (file) {
        console.info('Importing file: ', file);
        this._process({file:file});
    },

    _process: function (options) {
        if(currentView){
            currentView.hide().then(function () {
                currentView = null;
                createViewFn(options);
            });
        }
        else{
            createViewFn(options);
        }
    },

    // Open a native dialog that allows selecting a file or a photo from iPhoto.
    showOpenDialog: function () {
        $chooser.trigger('click');
    },

    // Callback that process the file selected in `#showOpenDialog`.
    didChooseAFile: function () {
        var path = $chooser.val();
        if(path){
            // Forced to wait the native dialog is hidden. Too bad.
            _.delay(this.processFile, 500, path);
            // Reset the selected value to empty ('') to avoid losing events
            // if the value doesn't change between two dialogs.
            $chooser.val('');
        }
    }

});

function createViewFn(options) {
    currentView = new ImportView(options);
    currentView.render().show().then(function () {
        currentView.import();
    });
}

module.exports = new ImportService();