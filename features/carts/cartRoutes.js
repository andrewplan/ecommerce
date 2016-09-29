const cartCtrl = require( './cartCtrl' );

module.exports = app => {
    app.route( '/api/cart/:id' )
        .post( cartCtrl.addToUserCart )
        .put( cartCtrl.updateCartByUserId );
};
