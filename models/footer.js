module.exports = function () {
    var mongoose = require('mongoose');
    var schema = mongoose.Schema;
    
    var schemaTopo = new schema({
        title: String,
        subtitle: String,
        logo: String,
    });
    
    return mongoose.model('footer', schemaTopo);
}




