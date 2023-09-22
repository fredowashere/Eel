(function() {
    angular
        .module("ChapterModule", [])
        .controller("ChapterController", function($scope, $routeParams) {
            $scope.name = "ChapterController";
            $scope.params = $routeParams;
        });
})();