module.exports = function () {
    var mongoose = require('mongoose');
    var schema = mongoose.Schema;
    var schemaHeader = new schema({
        title: String,
        subtitle: String,
        logo: String
    });
    
    return mongoose.model('header', schemaHeader);
}




