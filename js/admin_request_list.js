var requestModule=angular.module('requestApp',[]);
requestModule.controller("requestController",['$compile', '$scope','$http', function requestController($compile, $scope,$http){

//	var request_id = window.location.search.split("uid=")[1];	
//	$scope.request_id=request_id;

	
		//alert(request_id);
		
		
//	var request_id=$rootScope.user_id;
//	var token=window.location.search.split("token=")[1];
	
	//$http.get("http://localhost/lnf_api_old/lnf_api/requests/userRequests/"+request_id+"/?api_token="+token)
	
	var url="http://localhost/lnf_api_old/lnf_api/requests/recent/1";
	
	
		$http.get(url)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
						
			//if login is illegal
			
			
			$scope.requests = response;
			//console.log(data);
		});

		
		
	$scope.retrieveRequestStatus=function (id){
		//var request_id=$scope.request_id;
		
		
		var request_id=id;
		$scope.request_status=request_id;
		var token=$scope.token;
		
		
		
//		$http.get("http://localhost/lnf_api_old/lnf_api/request/"+request_id+"/status/?api_token="+token).then(function(resp, status, headers, config) {
		$http.get("http://localhost/lnf_api_old/lnf_api/request/"+request_id+"/status").then(function(resp, status, headers, config) {
			var response=resp.data;

			$scope.statuses = response["status"];
			
			
			
			
			
			
			
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
		
	$scope.retrieveProfile=function (request){
		//var request_id=$scope.request_id;

			alert(request["user_info"]["profile"]["contact"][0]["landline"]);	
//			alert(request["contact"].landline);
		
//			$scope.shape=request.shape;
//			$scope.color=request.color;
//			$scope.length=request.length;
//			$scope.width=request.width;
//			$scope.other_details=request.other_details;
		
	};

		
	$scope.addStatus=function (){

		var url="http://localhost/lnf_api_old/lnf_api/request/"+$scope.request_status+"/status";

		
		var parameter = JSON.stringify({
							request_id:$scope.request_status,
							status_type:$scope.status_type,
							details:$scope.status_details
						});
	
	
		$http.post(url, parameter).
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			
			
			
			
			$scope.resp=response.data;
			
			var response=$scope.resp;
			
			$scope.retrieveRequestStatus($scope.request_status);
//			alert(response["status_type"]["type"]);
//			$scope.latest_stat=response["status_type"]["type"];
			
			
			
//			$scope.message="Item successfully recorded.";
			
//			window.open('admin_dashboard.html','_SELF');
			
			
			var url="http://localhost/lnf_api_old/lnf_api/requests/recent/1";
			
			
				$http.get(url)
				.then(function(resp, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					var response=resp.data;
								
					//if login is illegal
					
					
					$scope.requests = response;
					//console.log(data);
				});
			
			
			
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});

	}	
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

