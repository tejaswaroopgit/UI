myApp.factory('membersService', function ($http) {
    return {
        memberRegister: function (addMembers, success, error) {
            console.log(addMembers)
            $http({              
                url: '/members/addMembers',
                method: "POST",
                data: addMembers
            }).then(success, error)
        }
    }
})

myApp.controller('membersCtrl', function ($scope, $log, $http, membersService, $location) {
    $scope.user = {
        name: '',
        lastName: '',
        age: '',
        email: '',
        education: ''
    }

    $scope.onSubmit = function (users) {        
        console.log(users)
        membersService.memberRegister(users);
    }

    $scope.onClick = function() {
        $location.path('/member')
    }



})