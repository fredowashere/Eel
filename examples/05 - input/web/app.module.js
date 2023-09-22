(function() {

    eel.expose(printOnJs);
    function printOnJs(x) {
        console.log(x);
    }

    eel.expose(setEnv);
    function setEnv(name) {
        APP_ENV_NAME = name;
        env = APP_ENVIRONMENTS[name];
        console.log("ENV", env);
    }

    eel.print_on_python("Hello from JavaScript!");

    angular
        .module(
            "AppModule",
            [
                "ngRoute",
                "LoginModule",
                "BookModule",
                "ChapterModule",
            ]
        )
        .controller("MainController", function($scope, $route, $routeParams, $location) {

            $scope.$route = $route;
            $scope.$location = $location;
            $scope.$routeParams = $routeParams;

            $location.url("/login");
        })
        .config(function($routeProvider, $locationProvider) {

            $routeProvider
                .when("/login", {
                    templateUrl: "/components/login/login.html",
                    controller: "LoginController"
                })
                .when("/book/:bookId", {
                    templateUrl: "/components/book/book.html",
                    controller: "BookController"
                })
                .when("/book/:bookId/chapter/:chapterId", {
                    templateUrl: "/components/chapter/chapter.html",
                    controller: "ChapterController"
                });

            $locationProvider.html5Mode(true); // configure html5 to get links working on jsfiddle
        });
})();