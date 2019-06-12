var appRoot = angular.module("myModule");
appRoot.controller("usersDetailsController",['$http','$stateParams', function ($http, $stateParams) {
    var vm = this;
    $http({
        url: 'https://jsonplaceholder.typicode.com/users/',
        params: { id: $stateParams.id },
       
        method: 'get'
    })
        .then(function (response) {
            vm.usersDetails = response.data;
            // vm.usersDetails = vm.usersDetails.find(x=>id==1);
            
        })
    }]);