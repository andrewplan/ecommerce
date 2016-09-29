const Cart = require( './Cart' );
const User = require( '../user/User');

module.exports = {
    addToUserCart( req, res ) {
      // console.log( 'req.params.id is ', req.params.id, 'req.body is ', req.body );
      User.findByIdAndUpdate( req.params.id, { $push: { cart: req.body } }, ( err, user ) => {
          if ( err ) {
              return res.status( 500 ).json( err );
          }
          return res.status( 201 ).json( user );
          console.log( 'err is: ', err, 'user is: ', user );
      } );
    }
    , updateCartByUserId( req, res ) {
          console.log( 'updateCart executing!, req.params.id is ', req.params.id, 'req.query is ', req.query )
          User.findById( req.params.id, ( err, user ) => {
              if ( err ) {
                  return res.status( 500 ).json( err );
              }
              let myUser = user;
              for ( let i = 0; i < myUser.cart.length; i++ ) {
                  if ( myUser.cart[ i ]._id.toString() === req.query.itmId ) {
                      if ( req.query.qty === 0 ) {
                          myUser.cart.splice( i, 1 );
                      }
                      else {
                          myUser.cart[ i ].quantity = req.query.qty;
                          // console.log( 'myUser.cart[ i ].products.quantity is ', myUser.cart[ i ].quantity)
                      }
                  }
              }

              saveUser( myUser, req, res );

              function saveUser( userToSave, req, res ) {
                  userToSave.save( ( err, result ) => {
                      if ( err ) {
                          return res.status( 500 ).json( err );
                      }
                      return res.status( 200 ).json( user );
                  } );
              }
          } )
    }
};
