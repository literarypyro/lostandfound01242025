var addRequestModule=angular.module('addRequestApp',[]);
addRequestModule.controller("addRequestController",['$compile', '$scope',"$http","$rootScope",'$window', function addRequestController($compile, $scope,$http,$rootScope,$window){
	var user_id = window.location.search.split("uid=")[1];	
	$scope.user_id=user_id;
	
	var host=$window.hostName;


	var request_id = user_id;	
	$scope.request_id=request_id;
	
	var url=host+"category";
		$http.get(url)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
						
			//if login is illegal
			
			
			$scope.categories = response;
			//console.log(data);
		});	



	
	$scope.addRequest=function(){




		var url=host+"request/"+user_id;
		var parameter = JSON.stringify({
							user_id:$scope.user_id,
							description:$scope.description,
							category:$scope.category,
							request_date:$scope.request_date, 
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
		$scope.logout=function (){
		$http.get(host+"logout").
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			window.open("index.html","_SELF");
			
			
			
			
		});
	
	}	
		
}]);


