const User = require( './User' );

module.exports = {
    getUsers( req, res ) {
        User
          .find()
          .populate( 'products' )
          .exec( ( err, users ) => {
            if ( err ) {
                return res.status( 500 ).json( err );
            }
            return res.status( 200 ).json( users );
        } );
    }
    , addUser( req, res ) {
        new User( req.body ).save( ( err, user ) => {
            if ( err ) {
                return res.status( 500 ).json( err );
            }
            return res.status( 201 ).json( user );
        } );
    }
    , addToUserCart( req, res ) {
        User.findByIdAndUpdate( req.params.id, { $push: { cart: req.body } }, ( err, user ) => {
            if ( err ) {
                return res.status( 500 ).json( err );
            }
            return res.status( 201 ).json( user );
        } );
    }
    , getUserById( req, res ) {
        User
          .findById( req.params.id, console.log( 'User ') )
          .populate( 'cart.item' )
          .exec( ( err, user ) => {
              if ( err ) {
                  return res.status( 500 ).json( err );
              }
              return res.status( 200 ).json( user );
          } );
    }
}
