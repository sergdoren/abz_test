angular.module('testApp.Banner', [])

.directive('banner', function () {
    return {
        restrict: "A",
        controller: "bannerCntr",
        templateUrl: "/component/Banner/Banner.html"
    }
})

.controller('bannerCntr', [function () {

}]);