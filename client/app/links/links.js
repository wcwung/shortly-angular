angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links) {
  // Your code here
  $scope.display = function () {
    Links.getShortenLink().then(function(data){
     $scope.data = data;
    });
  }
});
