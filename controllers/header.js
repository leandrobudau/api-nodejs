module.exports = function (app) {
    var modelTopo = app.models.header;

    var headerController = {
        index: function (req, res) {
            modelTopo.findOne({}, function (err, data) {
                res.json(data);   
            });
        },
        update: function (req, res) { 
            req.body.logo = req.file.filename;
            
            modelTopo.update({},
                req.body,
                {
                    upsert: true
                },
                function (err, data) {
                    if (err) throw err;
                    res.json(data);
                });
        }
    };
    return headerController;
};