/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    'new': function(req, res) {
        res.view();
    },

    create: function(req, res, next) {
        if (req.method == 'POST') {
            Customer.create(req.params.all(), function customerCreated(err, customer) {
                        if (err) return next(err);

                        res.json(customer);

            //            res.redirect('/customer/show/' + customer.id);

                    });
        } else {
            res.json({"result": false})
        }

    },

    show: function(req, res, next) {
        Customer.findOne(req.param('id'), function foundCustomer(err, customer) {
            if (err) return next(err);
            if (!customer) return next();

            res.view( {
                customer: customer
            });
        });
    }

};

