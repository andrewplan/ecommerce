const productRoutes = require( './features/products/productRoutes' );
const orderRoutes = require( './features/orders/orderRoutes' );
const userRoutes = require( './features/user/userRoutes' );
const cartRoutes = require( './features/carts/cartRoutes' );

module.exports = app => {
    productRoutes( app );
    orderRoutes( app );
    userRoutes( app );
    cartRoutes( app );
};
