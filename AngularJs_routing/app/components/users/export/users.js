var appRoot = angular.module("myModule");
appRoot.controller("usersController",['$http','$state','userslist', function ($http,$state,userslist) {
    var vm = this;
        vm.reloadData = function () {
            $state.reload();
        }
    // $http.get('https://jsonplaceholder.typicode.com/users/')
    //     .then(function (response) 
    
            // debugger;
            // vm.users = response.data.userslist;
            vm.users = userslist;
        // })

}])