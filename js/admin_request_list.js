var requestModule=angular.module('requestApp',['datatables','ngCookies','ngFileUpload']);
requestModule.controller("requestController",['$compile', '$scope','$http','$window','$cookies','Upload', function requestController($compile, $scope,$http,$window,$cookies,Upload){

//	var request_id = window.location.search.split("uid=")[1];	
//	$scope.request_id=request_id;

	
		//alert(request_id);
		
		
//	var request_id=$rootScope.user_id;
//	var token=window.location.search.split("token=")[1];
	
	//$http.get("http://localhost/lnf_api_old/lnf_api/requests/userRequests/"+request_id+"/?api_token="+token)
	
	var host="https://oms.dotrmrt3.gov.ph/psilva/lnf_api/public/";

	var host2="https://oms.dotrmrt3.gov.ph/psilva/lnfclient/laravel/public/";


	$scope.assetfolder2=host2+"images/";

	//var host=$window.hostName;
	$scope.user_name=$cookies.get("user_name");

	
	var url=host+"requests/recent/1";
	
	
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
		$http.get(host+"request/"+request_id+"/status").then(function(resp, status, headers, config) {
			var response=resp.data;

			$scope.statuses = response["status"];
			
			
			
			
			
			
			
		});	
	};
	
	$scope.retrieveItemDetails=function(request,request2,req_status,reqId){
			$scope.reqStatus=req_status;
			$scope.reqId=reqId;
			$scope.reqDetails=request;
			$scope.userProfile=request2;

			$scope.retrieveDetails(request);


			$scope.retrieveProfile(request2);
			
	}
	
	
	$scope.retrieveDetails=function (request){
		//var request_id=$scope.request_id;
			$scope.picture="";
		
			$scope.shape="";
			$scope.color="";
			$scope.length="";
			$scope.width="";
			$scope.other_details="";
		
		
			$scope.picture=request.picture;
		
			$scope.shape=request.shape;
			$scope.color=request.color;
			$scope.length=request.length;
			$scope.width=request.width;
			$scope.other_details=request.other_details;
			
			
		
	};
		
	$scope.retrieveProfile=function (request){
		//var request_id=$scope.request_id;
			$scope.first_name="";		
			$scope.last_name="";		
			$scope.landline="";		
			$scope.mobile="";		
			$scope.email="";		


			$scope.first_name=request["profile"]["first_name"];		
			$scope.last_name=request["profile"]["last_name"];		
			$scope.landline=request["profile"]["contact"]["landline"];		
			$scope.mobile=request["profile"]["contact"]["mobile"];		
			$scope.email=request["profile"]["contact"]["email"];		
			
//			alert(request["contact"].landline);
		
//			$scope.shape=request.shape;
//			$scope.color=request.color;
//			$scope.length=request.length;
//			$scope.width=request.width;
//			$scope.other_details=request.other_details;
		
	};

	// In your controller
	$scope.currentPage = 1;
	$scope.itemsPerPage = 5;

	$scope.totalPages = function() {
		return Math.ceil($scope.requests.length / $scope.itemsPerPage);
	};

	$scope.paginatedRequests = function() {
		var start = ($scope.currentPage - 1) * $scope.itemsPerPage;
		return $scope.requests.slice(start, start + $scope.itemsPerPage);
	};		
	$scope.addStatus=function (){

		var url=host+"request/"+$scope.request_status+"/status";

		
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
			
			
			var url=host+"requests/recent/1";
			
			
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
		$http.get(host+"logout").
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			window.open("index.html","_SELF");
			
			
			
			
		});
	
	}			
	$scope.addClaim=function (){
		var request_id=$scope.reqId;
		var claim_details=$scope.claim_details;
		var dt=new Date($scope.claim_date);
		var year=dt.getFullYear();
		var mm=dt.getMonth();
		var day=dt.getDate();

		$scope.claim_dt=year+"-"+(mm+1)+"-"+day;
		var claim_date=$scope.claim_dt;
		var photo=$scope.file;
		var claim_img=$scope.img;

		var claim_url=host+"addclaim";

		
		Upload.upload({

			url: claim_url,
			method: 'POST',
            fields: {'request_id': request_id,'claim_date':claim_date,'details':claim_details},
//			file: $scope.img,
			data: {file:$scope.img,'request_id': request_id,'claim_date':claim_date,'details':claim_details}

		}).then(function(response) {
        // Update requests list
        $http.get(host + "requests/recent/1").then(function(resp) {
            $scope.requests = resp.data;
            
            // Find updated request
            var updatedRequest = resp.data.find(r => r.id === request_id);
            if (updatedRequest) {
                $scope.reqStatus = 'Claimed';
                $scope.retrieveItemDetails(
                    updatedRequest.details,
                    updatedRequest.user_info,
                    'Claimed',
                    request_id
                );
            }
        });
    }).error(function(err) {
			console.log("ERROR: " + err.message);
		});			
		
		
		
	}		
	$scope.$watch('img', function (file) {
      if (!file.$error) {
        $scope.uploadFile($scope.img);
      }
    });		
		
	$scope.uploadFile=function(file){

		

		var photo=$scope.file;
				


		
		
		
	}
	
	
	$scope.uploadImage = function(files){
	    if (files && files.length) {
			$scope.img = files[0];
			var file = files[0];

		}

		 
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

