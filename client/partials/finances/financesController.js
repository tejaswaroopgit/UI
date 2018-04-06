


myApp.controller('financeCtrl', function ($scope, $log, $http, membersService, $location, $routeParams, clientsService) {
    var val1=0;
    var val2=0;
    clientsService.getClients(function (success) {
        console.log(success.data[0].noOfParts)
    
        for (var i = 0; i <= (success.data.length - 1); i++) {
            console.log(i)
            val1 += (success.data[i].noOfParts);
            val2 += (success.data[i].pricePerPart);
            console.log(val1)
        }
        console.log(val1 * val2)
        $scope.value = (val1 * val2)
       
    });  


})

