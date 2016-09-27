const express = require( 'express' );
const { json } = require( 'body-parser' );
const cors = require( 'cors' );
const mongoose = require( 'mongoose' );
const mongoUri = 'mongodb://localhost:27017/ecommerce'
const app = express();
const port = 4000;

const corsOptions = {
  origin: 'http://127.0.0.1:58977'
};

mongoose.connect( mongoUri );
mongoose.connection
  .on( 'error', ( err ) => console.log( 'Error: ', err ) )
  .once( 'open', () => console.log( `Connected to MongoDB at ${ mongoUri }` ) );

app.use( cors( corsOptions ) );
app.use( json() );

require( './productRoutes' )( app );

app.listen( port, () => console.log( `Listening on ${ port }`) );
