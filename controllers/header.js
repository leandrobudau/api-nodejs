module.exports = function (app) {
    var modelo = app.models.header;

    var headerController = {
        index: function (req, res) {
            var documento = new modelo({
                title: "Titulo",
                subtitle: "subtitulo"
            });
            
            res.json(documento);
        },
        edit: function (req, res) {
            res.render('header/edit');
        },
        update: function (req, res) {
            var form = req.body
            modelo.update({
                title: form.txtTitle,
                subtitle: form.txtSubTitle,
                logotipo: form.txtLogo
            },
            {
                upsert: true
            }, 
                function (err, data) {
                res.json(data);
            });
            
        }
    };
    return headerController;
};