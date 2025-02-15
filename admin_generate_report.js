var requestModule=angular.module('searchApp',['datatables','ngCookies']);
requestModule.controller("searchController",['$compile', '$scope','$http','$window','$cookies', function searchController($compile, $scope,$http,$window,$cookies){

	var host=$window.hostName;

	var request_id = window.location.search.split("uid=")[1];	
	$scope.request_id=request_id;
	$scope.assetfolder=host+"public/assets/images/items/";	
	$scope.user_name=$cookies.get("user_name");

	$scope.baseModel={};
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
	$scope.generateReport=function (){

	
		var range=$scope.daterange;
		var search_type=$scope.baseModel.search_type;
		var prepared_by=$scope.baseModel.prepared_by;
		var prepared_position=$scope.baseModel.prepared_position;
		

		if(search_type=="monthly"){
			window.open("print_report2.html?date="+range,"_BLANK");
		}
		else if(search_type=="daily"){
			window.open("print_report3.html?date="+range+"&prepared_by="+prepared_by+"&prep_pos="+prepared_position+"&ref_no="+ref_no,"_BLANK");
			
		}
		else if(search_type=="charity"){
			window.open("print_report.html?date="+range,"_BLANK");
			
		}
		else if(search_type=="disposal"){
			window.open("print_report4.html?date="+range,"_BLANK");

		
		}
		
	
	
	}		
	$scope.searchItem=function (){
		//var request_id=$scope.request_id;
		var search_type=$scope.search_type;
		var search_term=$scope.search_term;
		
		
		var range=$scope.daterange;
		
		var url=host+"items/"+search_type+"/"+search_term+"/range/"+range;

		
	
//		var request_id=id;
		
//		var token=$scope.token;
		
		
		
		$http.get(url).then(function(resp, status, headers, config) {
			var response=resp.data;

			if(search_type=="search"){
				$scope.items=response;		
			}			
			else {
				var res=response;
				$scope.items=res[0]["items"];
			}
			

			//$scope.statuses = response["status"];
			
			
			
			
			
			
			
		});	
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
			
			
			
			
//			$scope.message="Item successfully recorded.";
			
//			window.open('admin_dashboard.html','_SELF');
			
			
			
			
			
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	
	
	
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

