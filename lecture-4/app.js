(function()
{
//'use strict';



angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {

// Calling By Value
$scope.name = "";

//Calling By Function Name
$scope.sayHello = function(){
  return "Hello Coursera!";
};


});

})();
