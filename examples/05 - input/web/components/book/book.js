(function () {
    angular
        .module("BookModule", [])
        .controller("BookController", function($scope, $routeParams) {
            $scope.name = "BookController";
            $scope.params = $routeParams;
        });
})();