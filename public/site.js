(function (angular) {
    
    angular.module('app', ['ngRoute', 'ngResource'])
        .config(['$routeProvider', function ($routeProvider) {
          $routeProvider
            .when('/', {
              templateUrl: '/todos.html',
              controller: 'TodoController'
            })

            .when('/:id', {
              templateUrl: '/todoDetails.html',
              controller: 'TodoDetailCtrl'
           });
        }]);
})(angular);