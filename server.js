const express = require( 'express' );
const { json } = require( 'body-parser' );
const cors = require( 'cors' );
const mongojs = require( 'mongojs' );
const ObjectId = mongojs.ObjectId;
const app = express();
const port = 4000;
const db = mongojs( 'ecommerce', [ 'products' ] );

const corsOptions = {
  origin: 'http://localhost:8000'
};

app.use( cors( corsOptions ) );
app.use( json() );

app.post( '/api/products', ( req, res ) => {
  db.products.save( req.body, ( err, response ) => {
    if ( err ) return res.status( 500 ).json( err );
    else return res.json( response );
  } );
  // res.send( 'POST products');
} );
app.get( '/api/products', ( req, res ) => {
  db.products.find( ( err, response ) => {
    if ( err ) return res.status( 500 ).json( err );
    else return res.json( response );
  } );
  // res.send( 'GET products' );
} );

app.get( '/api/products/:id', ( req, res ) => {
  db.products.findOne( { _id: ObjectId( req.params.id ) }, ( err, response ) => {
    if ( err ) return res.status( 500 ).json( err );
    else return res.json( response );
  } );
  // res.send( 'GET product by id; the id is ', req.params.id );
} );

app.put( '/api/products/:id', ( req, res ) => {
  // console.log( 'req.params.id is ', req.params.id, 'req.body is ', req.body );
  if ( !req.params.id ) return res.status( 400 ).send( 'id query needed' );
  db.products.update( { _id: ObjectId( req.params.id ) }, { title: req.body.title, color: req.body.color }, ( err, response ) => {
    if ( err ) return res.status( 500 ).json( err );
    else return res.json( response );
  } );
  // res.send( 'UPDATE product by id; the id is ', req.params.id );
} );
app.delete( '/api/products/:id', ( req, res ) => {
  if ( !req.params.id ) return res.status( 400 ).send( 'id query needed' );
  db.products.remove( { _id: ObjectId( req.params.id ) }, ( err, response ) => {
    if ( err ) return res.status( 500 ).json( err );
    else return res.json( response );
  } );
  // res.send( 'DELETE product by id; the id is ', req.params.id );
} );

app.listen( port, () => console.log( `Listening on ${ port }`) );
