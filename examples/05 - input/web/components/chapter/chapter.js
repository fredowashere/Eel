(function() {
    angular
        .module("ChapterModule", [])
        .controller("ChapterController", function($scope, $routeParams, $location) {

            $scope.name = "ChapterController";
            $scope.params = $routeParams;

            $scope.navigateToABook = function() {
                console.log("Clicked!");
                $location.url("/Book/Moby");
            };
        });
})();