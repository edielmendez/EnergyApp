var app = angular.module('appTBM', []);

app.controller('appController', function($scope, $http){
    // more angular JS codes will be here
    $scope.calorias = 0;
    $scope.TMB = 0;
    //$scope.alimentos = [];
   
    
    $scope.alimentos = [
        {
            "nombre":"Huevo",
            "tipo":"hervido",
            "cantidad":"200g",
            "proteina":"12",
            "grasa":"23",
            "carbohidratos":"23",
            "calorias":"100",
            "ruta":"img/huevo.jpg"

        },
        {
            "nombre":"Leche",
            "tipo":"hervido",
            "cantidad":"200g",
            "proteina":"12",
            "grasa":"23",
            "carbohidratos":"23",
            "calorias":"100",
            "ruta":"img/leche.jpg"

        }

    ];

    //$scope.alimentos.push(obj);

     

    //console.log($scope.alimentos);

    $scope.calcularTBM = function(){

        if($scope.peso == undefined){
            Materialize.toast("Introduzca su peso", 4000);
            return;
        }
        if($scope.altura == undefined){
            Materialize.toast("Introduzca su altura", 4000);
            return;
        }
        if($scope.edad == undefined){
            Materialize.toast("Introduzca su edad", 4000);
            return;
        }
        if($scope.sexo == undefined){
            Materialize.toast("Introduzca su sexo", 4000);
            return;
        }

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

    $scope.clearSearch = function(){

        //$("#search").val('');
        
    }


});