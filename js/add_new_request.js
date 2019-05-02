var addRequestModule=angular.module('addRequestApp',[]);
addRequestModule.controller=controller("addRequestController",['$compile', '$scope',"$http", function addController($compile, $scope,$http){

	var url="http://localhost/lnf_api/request/?api_token"+token;
	var parameter = JSON.stringify({
						type:"user", 
						username:user_email, 
						password:user_password
					});
    $http.post(url, parameter).
    success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.response=data;
    }).
    error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

		  
}]);


