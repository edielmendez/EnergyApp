/*$(document).ready(function(){
	var calorias = localStorage.getItem('calorias');

	console.log(calorias);
});*/
var app = angular.module('appTBM', []);

app.controller('resultadoController', function($scope, $http){
    // more angular JS codes will be here
    $scope.calorias = localStorage.getItem("calorias");
    $scope.TMB = localStorage.getItem("TMB");;

});

