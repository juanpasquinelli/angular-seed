'use strict';

angular.module('Common.directives')
    .directive('forceIntegerValue', function ($parse) {
        return {
        require: 'ngModel',
        link: function(scope, ele, attr, ctrl){
            ctrl.$parsers.unshift(function(viewValue){
                return parseInt(viewValue, 10);
            });
        }
    };
});
