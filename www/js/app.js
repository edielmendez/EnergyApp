var app = angular.module('appTBM', []);

app.controller('appController', function($scope, $http){
    // more angular JS codes will be here
    $scope.calorias;
    $scope.calcularTBM = function(){
    	
    	$scope.calorias = $scope.altura * $scope.peso * $scope.edad;
	}
});