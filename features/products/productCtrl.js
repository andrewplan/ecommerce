const Product = require( './Product' );

module.exports = {
  postProduct( req, res ) {
    new Product( req.body ).save( ( err, product ) => {
      if ( err ) {
        return res.status( 500 ).json( err );
      }
      return res.status( 201 ).json( product );
    } );
  }
  , getProducts( req, res ) {
      Product.find( {}, ( err, products ) => {
          if ( err ) {
            return res.status( 500 ).json( err );
          }
          return res.status( 200 ).json( products );
      } );
  }
  , getProductById( req, res ) {
      Product.findById( req.params.id, ( err, product ) => {
          if ( err ) {
            return res.status( 500 ).json( err );
          }
          return res.status( 200 ).json( product );
      } );
  }
  , updateProductById( req, res ) {
      Product.findByIdAndUpdate( req.params.id, { $set: req.body }, ( err, product ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }
        return res.status( 200 ).json( product );
      } );
  }
  , removeProductById( req, res ) {
      Product.remove( req.params.id, ( err, product ) => {
        if ( err ) {
          return res.status( 500 ).json( err );
        }
        return res.status( 200 ).json( product );
      } );
  }
}
