var addRequestModule=angular.module('addRequestApp',[]);
addRequestModule.controller=controller("addRequestController",['$compile', '$scope',"$http","$rootScope", function addController($compile, $scope,$http,$rootScope){

	var user_id=$rootScope.user_id;
	var url="http://localhost/lnf_api/request/?api_token"+token;
	var parameter = JSON.stringify({
						user_id:user_id,
						request_date:request_date, 
						color:color,
						shape:shape,
						length:length,
						width:width,
						other_details:other_details
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


