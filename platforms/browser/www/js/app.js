var app = angular.module('appTBM', []);

app.controller('appController', function($scope, $http){
    // more angular JS codes will be here
    $scope.calorias = 0;
    $scope.TMB = 0;
    $scope.calcularTBM = function(){

        if($scope.actividad_fisica == undefined){
            Materialize.toast("Seleccione su actividad física", 4000)
        }else{
            if($scope.sexo == 5){

                $scope.calorias = (10 * $scope.peso) + (6.25 * $scope.altura) - (5 * $scope.edad) + 5;
                $scope.TMB = $scope.calorias;
                $scope.calorias *= $scope.actividad_fisica;

            }else{
                $scope.calorias = (10 * $scope.peso) + (6.25 * $scope.altura) - (5 * $scope.edad) - 161;
                $scope.TMB = $scope.calorias;
                $scope.calorias *= $scope.actividad_fisica; 
            }


            localStorage.setItem('calorias',$scope.calorias);
            localStorage.setItem('TMB',$scope.TMB);
            window.location.href = "resultado.html";
            
        }
       
        //Materialize.toast($scope.actividad_fisica, 4000) 
        /*
    	$scope.calorias = $scope.altura * $scope.peso * $scope.edad;
    	localStorage.setItem('calorias',$scope.calorias);
    	
    	window.location.href = "resultado.html";*/
	    
	    
    	
    	
    
	}

    /*$scope.getIndiceActividadFisica = function(){
        switch($scope.actividad_fisica){
            case 
        }
    }*/
});