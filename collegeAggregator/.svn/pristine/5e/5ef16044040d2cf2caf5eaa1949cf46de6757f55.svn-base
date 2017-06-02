/**
 * Created by Nitin on 4/13/2017.
 */
/**
 * Created by Nitin on 4/13/2017.
 */

function ResetPasswordController($scope, $http) {
    alert("Insert into js");

    $scope.feedback = '';

    $scope.postResetPasswordFunction = function(passwordUrl, successUrl) {

        alert("Inerst into js function");
        $scope.data = {
            password: $scope.password,

        };
        //alert("email " + $scope.email)


        alert("data" + JSON.stringify($scope.data) )
        console.log($scope.data);

        $http({
            method: 'POST',
            url: '/',
            data: $scope.data,
            headers : { 'Content-Type': 'application/json' }
        }).then(function mySucces(response) {
            alert("password changed successfully!");
            $scope.myWelcome = response.data;
        }, function myError(response) {
            alert("Erorr");
            $scope.myWelcome = response.statusText;
            alert($scope.myWelcome);
        });



    };
}