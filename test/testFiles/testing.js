var compile, scope, directiveElem;

beforeEach(function () {
    module('sampleDirectives');

    inject(function ($compile, $rootScope) {
        compile = $compile;
        scope = $rootScope.$new();
    });

    directiveElem = getCompiledElement();
});

function getCompiledElement() {
    var element = angular.element('<div first-directive></div>');
    var compiledElement = compile(element)(scope);
    scope.$digest();
    return compiledElement;
}







//describe('testingAngularJS', function () {

//    describe('testingAngularJSController', function () {

//        beforeEach(angular.module("myApp"));


       

//    });
//});


//it('itShouldInitilize', function () {
//    beforeEach(module('myApp'));
//    var scope = {};
//    var ctrl;
//    inject(function ($controller) {
//        ctrl = $controller('addEditClientsCtrl', { $scope: scope });
//    });
//    expect(scope.title).toBeDefined();
//    expect(scope.title).toBe();
//});