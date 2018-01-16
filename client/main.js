var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html',
      access: { restricted: true },
      controller:'homeController'
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/member/:Id', {
        templateUrl: 'partials/members/members.html',
        controller: 'membersAddEditCtrl',
        access: { restricted: false }
     
    })
    .when('/two', {
      template: '<h1>This is page two!</h1>',
      access: {restricted: false}
      })
      .when('/getMembers', {
          templateUrl: 'partials/members/members-list-page.html',
          controller: 'membersListCtrl',
          access: { restricted: false }
      })

    .otherwise({
      redirectTo: '/'
    });
});

myApp.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
      AuthService.getUserStatus()
      .then(function(){
        if (next.access.restricted && !AuthService.isLoggedIn()){
          $location.path('/login');
          $route.reload();
        }
      });
  });
});