const userCtrl = require( './userCtrl' );

module.exports = app => {
    app.route( '/api/users' )
        .get( userCtrl.getUsers )
        .post( userCtrl.addUser );

    app.route( '/api/users/:id' )
        .put( userCtrl.addToUserCart )
        .get( userCtrl.getUserById );
};

// user
// 57ec86183b33d8a319e52573

// product ids
// 57ec35d312a13a9a0366b7e8
// xxxx 57ec35c912a13a9a0366b7e7

// cart item id
// 57ec633852bab3a1dc050b5d
