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

// ids
// 57ec35c912a13a9a0366b7e7
// 57ec35d312a13a9a0366b7e8
