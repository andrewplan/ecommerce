const Order = require( './Order' );
const User = require( '../user/User' );
const mongoose = require( 'mongoose' );

module.exports = {
    addOrderToUser( req, res ) {
        User.findById( req.params.id )
            .populate( 'cart.item' )
            .exec( ( err, user ) => {

                if ( err ) {
                    return res.status( 500 ).json( err );
                }
                let userObj = user;
                console.log( 'userObj is ', userObj );

                const userOrder = {};
                userOrder.products = userObj.cart;
                userOrder.user = req.params.id;

                new Order( userOrder ).save( ( err, order ) => {
                    if ( err ) {
                        return res.status( 500 ).json( err );
                    }

                    userObj.cart = [];
                    userObj.orders.push( mongoose.Types.ObjectId( order._id ) );
                    userObj.save( ( err, user ) => {
                        if ( err ) {
                            return res.status( 500 ).json( err );
                        }
                        return res.status( 200 ).json( user );
                    } );
                } );
            } );


    }
    , getOrders( req, res ) {
        Order.find( req.query, ( err, orders ) => {
            if ( err ) {
                return res.status( 500 ).json( err );
            }
            return res.status( 200 ).json( orders );
        } );
    }
};
