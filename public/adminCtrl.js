angular.module( 'eCommerceApp' )
    .controller( 'adminCtrl', function( $scope, $state, $stateParams, mainService ) {

      $scope.addProduct = ( newProduct, $event ) => {
        $event.preventDefault();
        mainService.addProduct( newProduct ).then( results => {
          $scope.products = results.data;
          console.log( $scope.products );
          $state.go( 'main' );
        } );
      };

      $scope.updateProduct = ( updatedProduct, $event ) =>  {
        $event.preventDefault();
        mainService.updateProduct( updatedProduct ).then( results => {
          $scope.products = results.data;
          console.log( $scope.products );
          $state.go( 'main' );
        } );
      };

      $scope.removeProduct = ( productId, $event ) =>  {
        $event.preventDefault();
        mainService.removeProduct( productId ).then( results => {
          $scope.products = results.data;
          console.log( $scope.products );
          $state.go( 'main' );
        } );
      };
} )
