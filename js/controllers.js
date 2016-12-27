app.controller('MainCtrl', function($scope, $rootScope, $window, $http, $location) {

  //ANIMATIONS
  $scope.aboutClicked = function() {
      if (window.location.pathname == "/") {
          $('html, body').animate({
              scrollTop: $("#about").offset().top
          }, 500);
      }
      else {
          setTimeout(function(){
              $('html, body').animate({
                  scrollTop: $("#about").offset().top
              }, 500);
          }, 10);
      }
  };
  $scope.projectsClicked = function() {
      if (window.location.pathname == "/") {
          $('html, body').animate({
              scrollTop: $("html").offset().top
          }, 200);
      }
      else {
          setTimeout(function(){
              $('html, body').animate({
                  scrollTop: $("html").offset().top
              }, 200);
          }, 10);
      }
  };
  $scope.contactClicked = function() {
      if (window.location.pathname == "/contact") {
          $('html, body').animate({
              scrollTop: $("html").offset().top
          }, 200);
      }
      else {
          setTimeout(function(){
              $('html, body').animate({
                  scrollTop: $("html").offset().top
              }, 200);
          }, 10);
      }
  };

})


app.controller('HomeCtrl', function($scope, $rootScope, $http, $location) {


})

app.controller('ProductsCtrl', function($scope, $rootScope, $http, $location) {

    // GET WAFFLE INFO
    $http({
      method: "GET",
      url: "/json/waffles.json",
    }).then(function successCallback(response) {

      //This is used in this partial/controller
      $scope.waffles = response.data.waffle_types;

      //This saves it to use in other partials so we dont have to make this call again
      $rootScope.waffles = response.data.waffle_types;

      //Default to showing the first waffle in the list
      $scope.activeWaffle = $scope.waffles[0];
    });

    // GO TO TRANSACTION PAGE ON PRODUCT CLICK
    $scope.waffleClicked = function(waffle) {
        $scope.activeWaffle = waffle;
    }
})

app.controller('AboutCtrl', function($scope, $rootScope) {

})

app.controller('RecipesCtrl', function($scope, $rootScope) {

})

app.controller('PurchaseCtrl', function ($scope, $rootScope, $http, $window, $location) {
    //Get query string from URL
    var qs = $window.location.pathname.split('/')[2];

    $http({
      method: "GET",
      url: "/json/waffles.json",
      cache: false,
    }).then(function successCallback(response) {

      var waffles = response.data.waffle_types;
      for (i in waffles) {

        if (qs == waffles[i].urlextension) {
          $scope.waffle = response.data.waffle_types[i];
          $scope.header_title = $scope.waffle.name;
        }
      }
      if (!$scope.waffle) {
        $location.url('/');
      }
    });
})
