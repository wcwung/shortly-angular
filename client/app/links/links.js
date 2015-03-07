angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links) {
  // Your code here
  $scope.display = function () {
    $scope.data = [];
    $scope.links = Links.getShortenLink();
    // console.log(Links.getShortenLink());
  }
});
