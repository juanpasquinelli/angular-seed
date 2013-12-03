'use strict';

describe('Controller: SectionCtrl', function () {

    // load the controller's module
    beforeEach(module('App'));

    var SectionCtrl,
    scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        SectionCtrl = $controller('SectionCtrl', {
            $scope: scope
        });
    }));

});
