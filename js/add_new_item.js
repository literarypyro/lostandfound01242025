var addItemModule=angular.module('addItemApp',[]);
addItemModule.controller("addItemController",['$compile', '$scope',"$http", function addController($compile, $scope,$http){

	var url="http://localhost/lnf_api/item/?api_token"+token;
	var parameter = JSON.stringify({
						//found_date:found_date, 
						color:$scope.color,
						shape:$scope.shape,
						length:$scope.length,
						width:$scope.width,
						other_details:$scope.other_details
					});
    $http.post(url, parameter).
    success(function(response, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.response=response.data;
    }).
    error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
	  
}]);
