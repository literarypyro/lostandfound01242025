var addItemModule=angular.module('addItemApp',[]);
addItemModule.controller("addItemController",['$compile', '$scope',"$http", function addController($compile, $scope,$http){

	var url="http://localhost/lnf_api/item/?api_token"+token;
	var parameter = JSON.stringify({
						found_date:found_date, 
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
