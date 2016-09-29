const mongoose = require( 'mongoose' );
const CartSchema = require( '../carts/CartSchema' );

const User = new mongoose.Schema( {
    name: { type: String, required: true, trim: true }
    , email: { type: String, required: true, unique: true, index: true }
    , password: { type: String, required: true }
    , cart: [ CartSchema ]
    , orders: []
} );

module.exports = mongoose.model( 'User', User );
