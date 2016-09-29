const mongoose = require( 'mongoose' );
const productSchema = require( '../products/ProductSchema.js' );

const Order = new mongoose.Schema( {
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  , products: [ {
      item: productSchema
      , quantity: { type: Number, min: 1, required: true }
    } ]
  , ordered: { type: Date, default: new Date() }
} );

module.exports = mongoose.model( 'Order', Order );
