(function (angular) {
    'use strict';

    angular.module('app')
	    
	    .factory('Todos', ['$resource', function($resource) {
	        return $resource('/todos/:id', null, {
	            'update': { method: 'PUT' }
	        });
	    }]);

})(angular);