(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope' ];
function LunchCheckController($scope) {
	$scope.items = "";
	$scope.msg="";
	$scope.checkIfTooMuch = function () {
		if ($scope.items.length == 0) {
			$scope.msg="Please enter data first";
		}
		else if ($scope.items.split(',').length <= 3) {
			$scope.msg="Enjoy!";
		}
		else {
			$scope.msg="Too much!";
		}
  	};
};

})();
