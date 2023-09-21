(function () {
    angular
        .module("LoginModule", [  ])
        .component("login", {
            templateUrl: "/login/login.html",
            controller: function FormLogin() {
                this.prova = "prova";
                this.handle = function() {
                    eel.print_on_python("hey");
                };
            }
        })
})();