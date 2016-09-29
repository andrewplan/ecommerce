const orderCtrl = require( './orderCtrl' );

module.exports = app => {
    app.route( '/api/orders' )
        .get( orderCtrl.getOrders );

    app.route( '/api/orders/:id' )
        .post( orderCtrl.addOrderToUser );
}
