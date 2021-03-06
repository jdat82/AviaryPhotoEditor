
var PhotoModel = Backbone.Model.extend({

    initialize: function () {
        _.bindAll(this, 'destroy');
    },

    // Override the parent method to remove the photo on disk.
    destroy: function(){
        return fileService.removeFile(this.get('uri'));
    },

    saveTo: function(path){
        return fileService.copy(this.get('uri'), path);
    }

});

module.exports = PhotoModel;