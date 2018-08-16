//most simple test ever
describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(true);
    });
});

//false test
describe("A suite", function () {
    it("contains spec with an expectation", function () {
        expect(true).toBe(false);
    });
});

describe("Testing a controller", function () {

    beforeEach(angular.mock.module('app'));
    var $controller;
    var $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        // The injector unwraps the underscores (_) from around the parameter names when matching
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    describe('setting a scope and testing it', function () {

        it('sets a scope and tests it', function () {
            var $scope = {};
            var controller = $controller('MyController', {
                $scope: $scope
            })
            expect($scope.input.name).toEqual("Chris Mayer")

        })
    })


})