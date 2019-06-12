var appRoot = angular.module("myModule");
appRoot.controller("homeController", ['$state', function ($state) {
    this.message = "Home Page";
    this.homeCustomData1 = $state.current.data.customData1;
    this.homeCustomData2 = $state.current.data.customData2;

    this.coursesCustomData1 = $state.get("courses").data.customData1;
    this.coursesCustomData2 = $state.get("courses").data.customData2;
    // alert('test');
}]);