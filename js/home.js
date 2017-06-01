angular.module('app').controller('homeCtrl', function($scope, svc) {

    $scope.shoes = svc.shoes
    $scope.test = "test"
    $scope.test1 = svc.test
})