(function (angular) {
    'use strict';

    angular.module('app', ['ngRoute', 'ngResource'])

        .controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
            $scope.todos = Todos.query();
        }])

        .controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', function ($scope, $routeParams, Todos) {
            $scope.todo = Todos[$routeParams.id];
        }]);

})(angular);