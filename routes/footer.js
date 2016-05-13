module.exports = function (app) {
   var footer = app.controllers.footer;
   app.get('/footer', footer.index);
   app.put('/footer', footer.update);
};