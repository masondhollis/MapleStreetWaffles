angular.module('myApp', ['ngAnimate','ui.router'])
  .config(['$stateProvider','$urlRouterProvider','$locationProvider',function($stateProvider,$urlRouterProvider,$locationProvider){



    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $stateProvider.state('home',{
        url:'/',
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
    });

    $stateProvider.state('products', {
        url: '/products',
        templateUrl: 'partials/products.html',
        controller: 'ProductsCtrl'
    });

    $stateProvider.state('about', {
      url: '/about',
      templateUrl: 'partials/about.html',
      controller: 'AboutCtrl'
    });

    $stateProvider.state('recipes', {
      url: '/recipes',
      templateUrl: 'partials/recipes.html',
      controller: 'RecipesCtrl'
    });

    $stateProvider.state('purchase', {
      url: '/purchase/:waffle',
      templateUrl: 'partials/purchase.html',
      controller: 'PurchaseCtrl'
    });


    $urlRouterProvider.otherwise('/');

}]);

var app =angular.module('myApp');
