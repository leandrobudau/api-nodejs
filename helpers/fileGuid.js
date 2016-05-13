var uuid = require('node-uuid');
module.exports = function (fileName) {
    return uuid.v1() + fileName.replace(/[\s\S]+?(\.[\S]{3})?$/,'$1');        
};