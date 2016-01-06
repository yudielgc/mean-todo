(function (angular) {
    'use strict';

    angular.module('app', ['ngRoute', 'ngResource'])

        .factory('Todos', ['$resource', function($resource) {
            return $resource('/todos/:id', null, {
                    'update': { method: 'PUT' }
                });
        }]);

})(angular);