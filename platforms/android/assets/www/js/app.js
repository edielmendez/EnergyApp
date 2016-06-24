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
            "cantidad":"100",
            "proteina":"13",
            "grasa":"11",
            "carbohidratos":"1.1",
            "calorias":"155",
            "ruta":"img/huevo.jpg"

        },
        {
            "nombre":"Leche",
            "tipo":"Leche en polvo",
            "cantidad":"100",
            "proteina":"26",
            "grasa":"27",
            "carbohidratos":"38",
            "calorias":"496",
            "ruta":"img/leche.jpg"

        },
        {
            "nombre":"Carne de pescado",
            "tipo":"N/A",
            "cantidad":"100",
            "proteina":"27",
            "grasa":"14",
            "carbohidratos":"0",
            "calorias":"239",
            "ruta":"img/pollo.jpg"

        },
        {
            "nombre":"Carne de pescado",
            "tipo":"N/A",
            "cantidad":"100",
            "proteina":"25",
            "grasa":"11",
            "carbohidratos":"0",
            "calorias":"208",
            "ruta":"img/pescado.jpg"

        },
        {
            "nombre":"Carde de res",
            "tipo":"N/A",
            "cantidad":"100",
            "proteina":"12",
            "grasa":"27",
            "carbohidratos":"2",
            "calorias":"208",
            "ruta":"img/res.jpg"

        },
        {
            "nombre":"Lentejas",
            "tipo":"Hervidas",
            "cantidad":"100",
            "proteina":"9",
            "grasa":"0",
            "carbohidratos":"20",
            "calorias":"116",
            "ruta":"img/lentejas.jpg"

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


app.controller('SaveController', function($scope, $http){
    $scope.calorias = localStorage.getItem("calorias");
    $scope.TMB = localStorage.getItem("TMB");;
});