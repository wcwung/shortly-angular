angular.module('shortly.shorten', [])

  // Your code here
.controller('ShortenController', function ($scope, $window, $location, Links) {

  $scope.shorten = function () {
    $scope.url = $scope.shorten.url;
    return Links.postShortenLink({url: $scope.url});

    // console.log($scope.shorten + "scope");
    // console.log($location + "location");
    // console.log(Links + "links");
  }


});
