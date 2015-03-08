angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, $location, Links, Auth) {
  // Your code here
  $scope.display = function () {
    Links.getShortenLink().then(function(data){
     $scope.data = data;

    });
  }
  $scope.logout = Auth.signout;
});
