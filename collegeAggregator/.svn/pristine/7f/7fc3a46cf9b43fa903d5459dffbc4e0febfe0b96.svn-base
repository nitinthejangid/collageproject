/**
 * Created by Nitin on 4/13/2017.
 */

function LoginController( $scope, $http ){
    //alert("Insert into js");

    $scope.feedback = '';
    $scope.flagg = false;
    $scope.errormessage = "";

    $scope.postLoginFunction = function( loginUrl, successUrl ) {

        //alert("Inerst into js function");
        $scope.data = {
            emailId: $scope.email,
            password: $scope.password,

        };
        //alert("email " + $scope.email)


        //alert("data" + JSON.stringify($scope.data) )
        console.log($scope.data);
        $scope.successUrl = successUrl;
        $http({
            method: 'POST',
            url: '/login',
            data: $scope.data,
            headers: { 'Content-Type': 'application/json'}
        }).then(function mySucces( response ) {
            //alert("Got Response!");
            $scope.myWelcome = {};
            $scope.myWelcome = response.data;
            console.log(response.data);
            //alert("data" + JSON.stringify($scope.myWelcome))
            //alert($scope.myWelcome.status)
            //alert($scope.myWelcome[0].status)
            //alert($scope.myWelcome[0].sessionid)
            if($scope.myWelcome.status == "Success" )
            {
                //checking block flag
                if($scope.myWelcome.blockFlag == 0) {
                    //save the session id in cookie
                    document.cookie = "sessionId=" + $scope.myWelcome.sessionid;
                    var x = document.cookie;
                    //alert(x);

                    c = document.cookie.split( ';' );
                    var cookies = {};

                    for(i = c.length - 1; i >= 0; i--){
                        C = c[i].split( '=' );
                        C[0] = C[0].replace( " ", "" );
                        console.log(C[0]);
                        C[0].trim();
                        console.log(C[0]);
                        if(C[0] == "sessionId"){
                            cookies[C[0]] = C[1];
                        }
                    }
                    //alert(cookies["sessionId"]);

                    //$cookieStore.put('sesssionId','ASDERTFDFV123')
                    //var value = $cookies.get("sesssionId");
                    //alert(value);
                    window.location = successUrl;
                    //alert("Login done")
                }
                else{
                    $scope.flagg = true;
                    $scope.errormessage = "User has been forbidden! Please contact to SuperAdmin";
                }

            }
            else
            {
                //alert($scope.myWelcome.error);
                $scope.flagg = true;
                $scope.errormessage = "Username and password do not match. Please try again!";


            }

        }, function myError( response ) {
            //alert("Erorr");
            $scope.myWelcome = response.statusText;
            //alert($scope.myWelcome);
        });



    };
}