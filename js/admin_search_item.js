var requestModule=angular.module('searchApp',['datatables','ngCookies','ngAnimate']);
requestModule.controller("searchController",['$compile', '$scope','$http','$window','$cookies', function searchController($compile, $scope,$http,$window,$cookies){

//	var host=$window.hostName;

	









	$('input[name="daterange"]').daterangepicker();


	var host="https://oms.dotrmrt3.gov.ph/psilva/lnf_api/";
	var request_id = window.location.search.split("uid=")[1];	
	$scope.request_id=request_id;
	$scope.assetfolder=host+"assets/images/items/";	
	$scope.user_name=$cookies.get("user_name");
	
	$scope.advanced=false;
	
	
		//alert(request_id);
		
//	var request_id=$rootScope.user_id;
//	var token=window.location.search.split("token=")[1];
	$scope.assetfolder2=host+"assets/images/items/";		
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
		
	$scope.enableAdvanced=function(){
		if($scope.advanced){ $scope.advanced=false; } else { $scope.advanced=true; }

	}		
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
	var url=host+"itemType/list";
	
	
		$http.get(url)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
						
			//if login is illegal
			
			
			$scope.item_types = response;
			//console.log(data);
	});			
		
	$scope.searchItem=function (){
		//var request_id=$scope.request_id;
		var search_term=$scope.search_term;
		$scope.itemList=[];

		$cookies.put("fromsearch",JSON.stringify(false));
		$cookies.put("itemList",JSON.stringify($scope.itemList));

		

		var range=$scope.daterange;
		var dates=range.split("-");

		var from=dates[0];

		var froms=from.split("/");
		
		var y=froms[2].split(" ");


		from=y[0]+"-"+froms[0]+"-"+froms[1];


		var to=dates[1];

		var tos=to.split("/");


		var y2=tos[2].split(" ");

		var m=tos[0].split(" ");
		

		to=y2[0]+"-"+m[1]+"-"+tos[1];


		range=from+" to "+to;

		//var request_id=$scope.request_id;
			$scope.picture="";
		
			$scope.shape="";
			$scope.color="";
			$scope.length="";
			$scope.width="";
			$scope.other_details="";
		


			var filterurl=host+"filter";


			
			var payload = new FormData();
			payload.append("dateRange", range);
			payload.append("category", $scope.category);
			payload.append('searchTerm', $scope.search_term);
			payload.append('itemType', $scope.item_type);
			payload.append('advanced', $scope.advanced);


//			if($scope.advanced==true){
				
			payload.append('color', $scope.color);
			payload.append('shape', $scope.shape);
			payload.append('length', $scope.length);
			payload.append('width', $scope.width);
			payload.append('other_details', $scope.other_details);
//			}		
					
					
		
						
						
						$http({
							url: filterurl,
							method: 'POST',
							data: payload,
							//assign content-type as undefined, the browser
							//will assign the correct boundary for us
							headers: { 'Content-Type': undefined },
							//prevents serializing payload.  don't do it.
							transformRequest: angular.identity
						})
						.then(function(response) {
							// Check if response.data is null, undefined, or empty
							$scope.itemList = response.data || [];
							$scope.itemlength = Array.isArray($scope.itemList) ? $scope.itemList.length : 0;
							
						   if ($scope.itemlength > 0) {
							   // Store data in sessionStorage instead of cookies
							   sessionStorage.setItem('itemList', JSON.stringify($scope.itemList));
							   $cookies.put('fromsearch', 'true');
							   window.open('admin_results.html', '_SELF');
						   }	
							else {
								$scope.searchResults = "An error occurred while searching the database";
								
								
								
							}

								
							
							
						})
						.catch(function(error) {
							console.error('Filter API error:', error);
							$scope.itemList = [];
							$scope.itemlength = 0;
							$scope.searchResults = "An error occurred while searching the database";
						
						});
			
			
			
	
//		var request_id=id;
		
//		var token=$scope.token;


	/*

		$scope.items={};		
		$http.get(url).then(function(resp, status, headers, config) {
			var response=resp.data;

			if($scope.search_type=="search"){
				const firstKey = Object.keys(response)[1];

				$scope.items=response[firstKey];
				

			}			
			else if($scope.search_type=="itemType"){

				const firstKey = Object.keys(response)[1];

				$scope.itemData=response[firstKey];

				const secondKey = Object.keys($scope.itemData)[0];

				$scope.itemList=$scope.itemData[secondKey];

				const thirdKey = Object.keys($scope.itemList)[5];

				$scope.items=$scope.itemList[thirdKey];



			}
			else {
				const firstKey = Object.keys(response)[1];

				$scope.itemData=response[firstKey];

				const secondKey = Object.keys($scope.itemData)[0];

				$scope.itemList=$scope.itemData[secondKey];

				const thirdKey = Object.keys($scope.itemList)[4];

				$scope.items=$scope.itemList[thirdKey];
				
				
				
			}

			//$scope.statuses = response["status"];
			
			
			
			
		});	
		*/
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

