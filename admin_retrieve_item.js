var requestModule=angular.module('retrieveApp',['datatables','ngCookies','ngAnimate']);
requestModule.controller("retrieveController",['$compile', '$scope','$http','$window','$cookies', function searchController($compile, $scope,$http,$window,$cookies){

//	var host=$window.hostName;

	
		
	
	
	var host="https://oms.dotrmrt3.gov.ph/psilva/lnf_api/";
	var request_id = window.location.search.split("uid=")[1];	
	$scope.request_id=request_id;
	
	$scope.assetfolder2=host+"assets/images/items/";
	
	var url=host+"item/"+request_id;
	
	
	alert(url);
	
		$http.get(url).then(function(resp, status, headers, config) {
			var response=resp.data;

			$scope.retrieveDetails(response);
			
			$scope.item=response;
			
			
			
		});	
	
	







	$scope.retrieveDetails=function (request){
		//var request_id=$scope.request_id;
		
		
			$scope.shape=request.shape;
			$scope.color=request.color;
			$scope.length=request.length;
			$scope.width=request.width;
			$scope.other_details=request.other_details;
			$scope.picture=request.picture;
		
	};
		
	$scope.retrieveItemStatus=function (id){
		//var request_id=$scope.request_id;
		
		var request_id=id;
		
		$scope.request_status=request_id;
//		var token=$scope.token;
		
		
//		$http.get("http://localhost/lnf_api_old/lnf_api/request/"+request_id+"/status/?api_token="+token).then(function(resp, status, headers, config) {
		$http.get(host+"item/"+request_id+"/status").then(function(resp, status, headers, config) {
			
			var response=resp.data;

			
			$scope.statuses = response["status"];
			
			
			
			
			
			
		});	
	};		
		
	$scope.logout=function (){
		$http.get(host+"logout").
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

