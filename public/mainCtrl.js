angular.module( 'eCommerceApp' )
    .controller( 'mainCtrl', function( $scope, $state, mainService ) {

        mainService.getProducts().then( results => {
          $scope.products = results.data;
          console.log( $scope.products );
        } );

    } )
