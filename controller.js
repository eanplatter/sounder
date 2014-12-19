var app = angular.module('sounds');

app.controller('MainController', function($scope, soundService, $sce, ipCookie) {
  $scope.getArtist = function() {
    if($scope.searchArtist.indexOf(' ') !== -1) {
      $scope.searchArtist = $scope.searchArtist.replace(' ', '-')
    }
    soundService.getArtist($scope.searchArtist).then(function(data) {
      $scope.artist = data.data;
      console.log('get artist function ', $scope.artist);
    })
    $scope.searchArtist = '';
  }

  $scope.play = function(track_url) {
    console.log(track_url);
    SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
      $scope.$apply($scope.iFrame = $sce.trustAsHtml(oEmbed.html));
    });
  }



});