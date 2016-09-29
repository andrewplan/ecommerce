const productCtrl = require( './productCtrl' );

module.exports = app => {
  app.route( '/api/products' )
      .post( productCtrl.postProduct )
      .get( productCtrl.getProducts );
  app.route( '/api/products/:id' )
      .get( productCtrl.getProductById )
      .put( productCtrl.updateProductById )
      .delete( productCtrl.removeProductById );
}
