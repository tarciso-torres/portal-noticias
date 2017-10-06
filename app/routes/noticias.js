var connection = require('../../config/DBConnection')();

module.exports = function (app) {

    app.get('/noticias', function (req, res) {

        connection.query('select * from noticias', function (error, result) {
            res.render("noticias/noticias", {noticias: result});
        });
            // res.render('noticias/noticias');
    });
};


