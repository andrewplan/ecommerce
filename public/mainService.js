angular.module( 'eCommerceApp' )
    .service( 'mainService', function( $http ) {

        this.getProducts = () => {
            return $http.get( 'http://localhost:4000/api/products' );
        };

        this.addProduct = ( product ) => {
            return $http.post( 'http://localhost:4000/api/products', product );
        };

        this.updateProduct = ( product ) => {
            return $http( {
              method: 'PUT'
              , url: 'http://localhost:4000/api/products/' + product._id
              , data: product
            } );
        };

        this.removeProduct = ( productId ) => {
            return $http( {
              method: 'DELETE'
              , url: 'http://localhost:4000/api/products/' + productId
            } );
        };
    } )
