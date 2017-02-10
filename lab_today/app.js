
var validationApp = angular.module('ourApp',[]);

.controller('DIController', DIController);

function DIController ($scope,$filter) {
$scope.user.fname = "";

$scope.upper = function () {
  var upCase = $filter('uppercase');
  $scope.name = upCase($scope.name);
};
}


validationApp.controller('mainController', function($scope) {

$scope.submitForm = function(isValid) {

  if(isValid){
    alert('Form submitted Successfully');
  }
};

});
