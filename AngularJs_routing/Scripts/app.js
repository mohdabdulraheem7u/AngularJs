// var appRoot = angular.module("myModule", ["ngRoute"]) // one way of doing route
var appRoot = angular.module("myModule", ["ui.router"])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        //   $routeProvider.caseInsensitiveMatch = true
        // $routeProvider
        $urlRouterProvider.otherwise("/home");
        // $urlMatchFactoryProvider.caseInsensitive(true);
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "app/components/home/export/home.html",
                controller: "homeController",
                controllerAs: "homeCtrl",
                data: {
                    customData1: "Home State Custom Data 1",
                    customData2: "Home State Custom Data 2"
                }
            })
            .state("courses", {
                url: "/courses",
                templateUrl: "app/components/courses/export/courses.html",
                controller: "coursesController",
                controllerAs: "coursesCtrl",
                data: {
                    customData1: "Courses State Custom Data 1",
                    customData2: "Courses State Custom Data 2"
                }
            })
            .state("users", {
                url: "/users",
                templateUrl: "app/components/users/export/users.html",
                controller: "usersController",
                controllerAs: "usersCtrl",
                resolve:{
                    userslist: function($http){
                        return $http.get('https://jsonplaceholder.typicode.com/users/')
                        .then(function (response) {
                            // debugger;
                            return response.data;
                        })
                    }
                }
            })
            .state("usersDetails", {
                url: "/users/:id",
                templateUrl: "app/components/usersDetails/export/usersDetails.html",
                controller: "usersDetailsController",
                controllerAs: "usersDetailsCtrl"
            })
        //     .when("/users/:name?", {
        //         templateUrl: "app/components/usersDetails/export/usersSearch.html",
        //         controller: "usersSearchController",
        //         controllerAs: "usersSearchCtrl"
        //     })
        //     .otherwise({
        //         redirectTo: "/home"
        //     })
        // $locationProvider.html5Mode(true);
    }]);
    // .controller("homeController", function ($state) {
    //     this.message = "Home Page";
    //     this.homeCustomData1 = $state.current.data.customData1;
    //     this.homeCustomData2 = $state.current.data.customData2;

    //     this.coursesCustomData1 = $state.get("courses").data.customData1;
    //     this.coursesCustomData2 = $state.get("courses").data.customData2;
    // })
    // .controller("coursesController",[function () {
    //     this.courses = ["C#", "VB.NET", "SQL Server", "ASP.NET"];
    // }])
    // .controller("usersController",[ function ($http, $scope, $state) {
        // $scope.$on("$routeChangeStart", function (event, next, current) {
        // if (!confirm("Are you sure want to navigate away from this page" + next.$$route.originalPath)) {

        //     $scope.$on("$locationChangeStart", function (event, next, current) {
        //     if (!confirm("Are you sure want to navigate away from this page" + next)) {
        //         event.preventDefault();
        //     }
        // });
        // vm.searchUser = function () {
        //     if (vm.name) {
        //         $location.url('https://jsonplaceholder.typicode.com/users/' + vm.name);
        //     }
        //     else {
        //         $location.url('https://jsonplaceholder.typicode.com/users/');
        //     }
        // }
    //     var vm = this;
    //     vm.reloadData = function () {
    //         $state.reload();
    //     }
    //     $http.get('https://jsonplaceholder.typicode.com/users/')
    //         .then(function (response) {
    //             // debugger;
    //             vm.users = response.data;
    //         })

    // }])
    // .controller("usersDetailsController", function ($http, $stateParams) {
    //     var vm = this;
    //     $http({
    //         url: 'https://jsonplaceholder.typicode.com/users/',
    //         params: { id: $stateParams.id },

    //         method: 'get'
    //     })
    //         .then(function (response) {
    //             vm.usersDetails = response.data;
    //             vm.usersDetails = vm.usersDetails.find(x=>id==1);

    //         })
    // })
    // .controller("usersSearchController", function ($http, $routeParams) {
    //     var vm = this;
    //     if ($routeParams.name) {
    //         $http({
    //             url: 'https://jsonplaceholder.typicode.com/users/',
    //             method: 'get',
    //             params: { id: $routeParams.id }
    //         })
    //             .then(function (response) {
    //                 vm.users = response.data;
    //                 // vm.usersDetails = vm.usersDetails.find(x=>id==1);

    //             })
    //     }
    //     else {
    //         $http.get('https://jsonplaceholder.typicode.com/users/')
    //             .then(function (response) {
    //                 // debugger;
    //                 vm.users = response.data;
    //             })
    //     }

    // });