(function() {

    selectedEnv = APP_ENVIRONMENTS[APP_ENV_NAME];

    eel.expose(printOnJs);
    function printOnJs(x) {
        console.log(x);
    }

    eel.expose(setEnv);
    function setEnv(name) {
        APP_ENV_NAME = name;
        selectedEnv = APP_ENVIRONMENTS[name];
        console.log("ENV", selectedEnv);
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
        })
        .config(function($routeProvider, $locationProvider) {

            $routeProvider
                .when("/Login", {
                    templateUrl: "/components/login/login.html",
                    controller: "LoginController"
                })
                .when("/Book/:bookId", {
                    templateUrl: "/compontents/book/book.html",
                    controller: "BookController"
                })
                .when("/Book/:bookId/Chapter/:chapterId", {
                    templateUrl: "/components/chapter/chapter.html",
                    controller: "ChapterController"
                });

            $locationProvider.html5Mode(true); // configure html5 to get links working on jsfiddle
        });
})();