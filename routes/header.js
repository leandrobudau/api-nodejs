module.exports = function (app) {
   var header = app.controllers.header;
   
   app.get('/header', header.index);
   app.get('/header/edit', header.edit);
    
};