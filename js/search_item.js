var requestModule=angular.module('searchApp',[]);
requestModule.controller("searchController",['$compile', '$scope','$http', function searchController($compile, $scope,$http){

	var request_id = window.location.search.split("uid=")[1];	
	$scope.request_id=request_id;

	
		//alert(request_id);
		
		
//	var request_id=$rootScope.user_id;
//	var token=window.location.search.split("token=")[1];
	
	//$http.get("http://localhost/lnf_api_old/lnf_api/requests/userRequests/"+request_id+"/?api_token="+token)
	/*
	var url="http://localhost/lnf_api_old/lnf_api/requests/userRequests/"+request_id;
	
	
		$http.get(url)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
						
			//if login is illegal
			
			
			$scope.requests = response;
			//console.log(data);
		});

		*/
		
	$scope.searchItem=function (){
		//var request_id=$scope.request_id;
		var search_type=$scope.search_type;
		var search_term=$scope.search_term;
		
		
		
		
		var url="http://localhost/lnf_api_old/lnf_api/items/"+search_type+"/"+search_term;

//		var request_id=id;
		
//		var token=$scope.token;
		
		
		
		$http.get(url).then(function(resp, status, headers, config) {
			var response=resp.data;

			$scope.results=response;			
			
			

			//$scope.statuses = response["status"];
			
			
			
			
			
			
			
		});	
	};
	$scope.retrieveDetails=function (request){
		//var request_id=$scope.request_id;
		
		
			$scope.shape=request.shape;
			$scope.color=request.color;
			$scope.length=request.length;
			$scope.width=request.width;
			$scope.other_details=request.other_details;
		
	};
	$scope.logout=function (){
		$http.get("http://localhost/lnf_api_old/lnf_api/logout").
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			window.open("index.html","_SELF");
			
			
			
			
		});
	
	}			
		
		
		
		
		
		
		
		
		
		
		//		.error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
//		});	
	
//	$http.get(url).then(function(response, status, headers, config) { $scope.requests = response.data; });
	
	
//	.error(function(data, status, headers, config) { $scope.error=data.data; });	

				// called asynchronously if an error occurs
				// or server returns response with an error status.

	/*
	$scope.listUserRequests=function (){
		var request_id=$scope.request_id;
		$http.get("http://localhost/lnf_api/requests/userRequests/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	
	
	};
	$scope.retrieveItem=function (){
		var request_id=$scope.request_id;
		$http.get("http://localhost/lnf_api/request/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	
	};
	
	*/

}]);

