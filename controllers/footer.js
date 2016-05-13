module.exports = function (app) {
    var modelFooter = app.controllers.footer;

    var footerController = {
        index: function (req, res) {
            modelFooter.findOne({}, function (err, data) {
                res.json(data);   
            });
        },
        update: function (req, res) {   
            modelFooter.update({},
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
    return footerController;
};