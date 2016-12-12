/**
 * StockController
 *
 * @description :: Server-side logic for managing stocks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    create: function(req, res, next) {
        if (req.method == 'POST'){
            Stock.create(req.params.all(), function stockCreated(err, stock) {
                        if (err) return next(err);
                        res.json(stock);

                    });
        } else {
            res.json({
                "result": false
            });
        }
    }

};

