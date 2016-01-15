(function (angular) {
    'use strict';

    angular.module('app')

        .controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
            $scope.editing = [];
            $scope.todos = Todos.query();
        
            $scope.save = function() {
                if(!$scope.newTodo || $scope.newTodo.length < 1) return;
                var todo = new Todos({ name: $scope.newTodo, completed: false });

                todo.$save(function(){
                  $scope.todos.push(todo);
                  $scope.newTodo = ''; // clear textbox
                });
            }

            $scope.update = function(index) {
                var todo = $scope.todos[index];
                Todos.update({id: todo._id}, todo);
                $scope.editing[index] = false;
            }

            $scope.edit = function(index) {
                $scope.editing[index] = angular.copy($scope.todos[index]);
            }

            $scope.cancel = function(index) {
                $scope.todos[index] = angular.copy($scope.editing[index]);
                $scope.editing[index] = false;
            }
    }])

    .controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', '$location', function ($scope, $routeParams, Todos, $location) {
        $scope.todo = Todos.get({id: $routeParams.id});

      $scope.update = function(){
        Todos.update({id: $scope.todo._id}, $scope.todo, function(){
          $location.url('/');
        });
      }
    }]);

})(angular);