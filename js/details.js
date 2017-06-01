angular.module('app').controller('detailsCtrl', function($scope, svc, $stateParams) {

    $scope.shoe = svc.findShoe($stateParams.shoeID)

})