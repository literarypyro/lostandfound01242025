var requestModule=angular.module('itemsApp',['datatables','ngCookies']);
requestModule.controller("itemsController",['$compile', '$scope','$http','$window','$cookies', function itemsController($compile, $scope,$http,$window,$cookies){

//	var request_id = window.location.search.split("uid=")[1];	
//	$scope.request_id=request_id;

	
		//alert(request_id);
		
		
		
		
//	var request_id=$rootScope.user_id;
//	var token=window.location.search.split("token=")[1];
	
	//$http.get("http://localhost/lnf_api_old/lnf_api/requests/userRequests/"+request_id+"/?api_token="+token)

	$scope.user_name=$cookies.get("user_name");

	var host=$window.hostName;

	$scope.assetfolder=host+"assets/images/items/";


	var url=host+"expired";
	
	
		$http.get(url)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
						
			//if login is illegal
			
			
			$scope.expired_items = response;
			//console.log(data);
	});
	
		var url=host+"items/disposed/1";
	
	
		$http.get(url)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
						
			//if login is illegal
			
			
			$scope.items = response;
			//console.log(data);
		});

		
		
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

	$scope.listParticular=function (item){
		//var request_id=$scope.request_id;
		
		
		$scope.found_record_id=item.id;
		
		var url=host+"items/found_record/"+item.id;
		$http.get(url)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available


			var response=resp.data;
			//if login is illegal
			
			
			$scope.item_particulars = response[0]["items"];
			//console.log(data);
		});



//		var request_id=id;
//		$scope.request_status=request_id;
	

	
//		var token=$scope.token;
		
		
//		$http.get("http://localhost/lnf_api_old/lnf_api/request/"+request_id+"/status/?api_token="+token).then(function(resp, status, headers, config) {



//		$http.get("http://localhost/lnf_api_old/lnf_api/item/"+request_id+"/status").then(function(resp, status, headers, config) {
			
//			var response=resp.data;

			
//			$scope.statuses = response["status"];
			
//		});		
			
			
			
	};
	$scope.addParticular=function (record){


			window.open("add_new_item.html?fr="+record,"_SELF");
	}
	$scope.retrieveDetails=function (request){
		//var request_id=$scope.request_id;
		
		
			$scope.shape=request.shape;
			$scope.color=request.color;
			$scope.length=request.length;
			$scope.width=request.width;
			$scope.other_details=request.other_details;
			$scope.picture=request.picture;
		
	};
		
	$scope.getImage=function (request){
		//var request_id=$scope.request_id;
		
		
			$scope.picture_part=request.picture;
		
	};

		
	$scope.addStatus=function (){

		var url=host+"item/"+$scope.request_status+"/status";

		
		var parameter = JSON.stringify({
							item_id:$scope.request_status,
							status_type:$scope.status_type,
							details:$scope.status_details
						});
	
	
		$http.post(url, parameter).
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			
			
			
			
			$scope.resp=response.data;
			
			var response=$scope.resp;
			
			
			$scope.retrieveItemStatus($scope.request_status);
			
			var url=host+"items/disposed/1";
	
	
			$http.get(url)
			.then(function(resp, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				var response=resp.data;
							
				//if login is illegal
				
				
				$scope.items = response;
				//console.log(data);
			});		
			
			
//			$scope.message="Item successfully recorded.";
			
//			window.open('admin_dashboard.html','_SELF');
			
			
			
			
			
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

