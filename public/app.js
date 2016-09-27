angular.module( 'eCommerceApp', [ 'ui.router' ] )
    .config( function( $stateProvider, $urlRouterProvider ) {
        $urlRouterProvider.otherwise( '/' );

        $stateProvider
            .state( 'main', {
                url: '/'
                , templateUrl: './components/main/main-view-tmpl.html'
                , controller: 'mainCtrl'
            } )
            .state( 'admin', {
                url: '/admin'
                , templateUrl: './components/admin/admin-view-tmpl.html'
                , controller: 'adminCtrl'
            } )
    } )
