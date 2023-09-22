(function () {
    angular
        .module("LoginModule", [])
        .controller("LoginController", function($scope, $http) {

            $scope.nav = "host";
            $scope.orgs = [];

            $http
                .get("/assets/mocks/orgs.json")
                .then(function(response) {
                    $scope.orgs = response.data;
                });

            $scope.handle = function() {
                eel.print_on_python("hey");
            };
        });
})();