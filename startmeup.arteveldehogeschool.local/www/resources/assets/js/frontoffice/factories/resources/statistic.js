;(function () { 'use strict';

	angular.module('smuFactories').
		factory('StatisticResourceFactory', [ '$resource', 'apiUriFactory', function ($resource, apiUriFactory) {

			// https://code.angularjs.org/1.3.15/docs/api/ngResource/service/$resource
			return $resource(
				apiUriFactory.make('statistics/:statisticId'),
				{
					statisticId: '@statisticId'
				}
			);

		}]);

})();
