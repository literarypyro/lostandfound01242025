var addRequestModule=angular.module('addRequestApp',[]);
addRequestModule.controller("addRequestController",['$compile', '$scope',"$http","$rootScope", function addRequestController($compile, $scope,$http,$rootScope){
	var user_id = window.location.search.split("uid=")[1];	
	$scope.user_id=user_id;
	$scope.addRequest=function(){
		var url="http://localhost/lnf_api_old/lnf_api/request/"+user_id;
		var parameter = JSON.stringify({
							user_id:$scope.user_id,
				//			request_date:$scope.request_date, 
							color:$scope.color,
							shape:$scope.shape,
							length:$scope.length,
							width:$scope.width,
							other_details:$scope.other_details
						});
		$http.post(url, parameter).
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			
			
			
			
			$scope.resp=response.data;
			
			$scope.message="Request successfully added.";
			
			window.open('request_list.html?uid='+user_id,'_SELF');
			
			
			
			
			
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	}
		
}]);


