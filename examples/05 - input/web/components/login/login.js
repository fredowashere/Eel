(function () {
    angular
        .module("LoginModule", [])
        .controller("LoginController", function($scope, $http) {

            $scope.loading = false;

            $scope.error = {
                showError: false,
                message: undefined
            };

            $scope.nav = "host";
            $scope.orgs = [];

            $scope.host = {
                email: undefined,
                password: undefined
            };

            $scope.hostLogin = async function() {

                $scope.loading = true;

                try {

                    const token = await $http.post(
                        `${env.apiRoot}/hosts/sign-in`,
                        {
                            email: $scope.host.email,
                            password: $scope.host.password
                        }
                    );

                    eel.print_on_python(token.data);
                    $scope.error.showError = false;
                }
                catch(ex) {
                    $scope.error.showError = true;
                    $scope.error.message = ex.data;
                }
                finally {
                    $scope.loading = false;
                    $scope.$apply();
                }
            };

            $scope.guest = {
                email: undefined,
                password: undefined,
                host: undefined
            };

            $scope.getHosts = async function(email) {
                const hosts = await $http.post(`${env.apiRoot}/guests/hosts`, { email });
                $scope.orgs = hosts.data;
            };

            $scope.guestLogin = async function() {

                $scope.loading = true;

                try {

                    const token = await $http.post(
                        `${env.apiRoot}/guests/host/${$scope.guest.host._id}/sign-in`,
                        {
                            email: $scope.guest.email,
                            password: $scope.guest.password
                        }
                    );

                    eel.print_on_python(token.data);
                    $scope.error.showError = false;
                }
                catch(ex) {
                    $scope.error.showError = true;
                    $scope.error.message = ex.data;
                }
                finally {
                    $scope.loading = false;
                    $scope.$apply();
                }
            };
        });
})();