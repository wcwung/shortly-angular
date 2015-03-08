angular.module('shortly.shorten', [])

  // Your code here
.controller('ShortenController', function ($scope, $window, $location, Links, Auth) {

  $scope.shorten = function () {
    $scope.url = $scope.shorten.url;
    return Links.postShortenLink({url: $scope.url});
  }

  $scope.logout = Auth.signout;
});
