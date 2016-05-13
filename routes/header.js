var multer = require('multer');
var fileGuid = require('../helpers/fileGuid.js')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    console.log(file, req.file);
    cb(null, fileGuid(file.originalname));
  }
});

var file = multer({storage: storage});

module.exports = function (app) {
   var header = app.controllers.header;
   app.get('/header', header.index);
   app.put('/header',file.single('file'), header.update);
};