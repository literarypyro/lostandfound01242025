var requestModule=angular.module('requestApp',['datatables','ngCookies','ngFileUpload']);
requestModule.controller("requestController",['$compile', '$scope','$http','$window','$cookies','Upload', function requestController($compile, $scope,$http,$window,$cookies,Upload){

//	var request_id = window.location.search.split("uid=")[1];	
//	$scope.request_id=request_id;

	
		//alert(request_id);
		
		
//	var request_id=$rootScope.user_id;
//	var token=window.location.search.split("token=")[1];
	
	//$http.get("http://localhost/lnf_api_old/lnf_api/requests/userRequests/"+request_id+"/?api_token="+token)
	
	var host="https://oms.dotrmrt3.gov.ph/psilva/lnf_api/public/";

	var host2="https://oms.dotrmrt3.gov.ph/psilva/lnfrequest/public_html/";


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
	
	$scope.retrieveItemDetails=function(request,request2,req_status,req){
			$scope.reqStatus=req_status;
			$scope.reqId=req.id;
			$scope.selectedReq=req;
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


			var filterurl=host+"filter";


			var dt=new Date($scope.selectedReq['request_date']);
			
			
			var year=dt.getFullYear();
			var mm=dt.getMonth();
			var day=dt.getDate();

			var dt2=new Date(year,mm+1,0);

			var year2=dt2.getFullYear();
			var mm2=dt2.getMonth();
			var day2=dt2.getDate();


			$scope.req_dt=year+"-"+(mm+1)+"-01";
			$scope.req_dt2=year2+"-"+(mm2+1)+"-"+day2;

			var request_date=$scope.req_dt+" to "+$scope.req_dt2;
			console.log(request_date);
			
			var payload = new FormData();
			payload.append("dateRange", request_date);
			payload.append("category", $scope.selectedReq['category_id']);
//			payload.append('itemType', $scope.selectedReq['item_type_id']);
			payload.append('itemType', "");

			payload.append('searchTerm', $scope.selectedReq['description']);
			payload.append('color', $scope.color);
			payload.append('shape', $scope.shape);
			payload.append('length', $scope.length);
			payload.append('width', $scope.width);
			payload.append('other_details', $scope.other_details);
			payload.append('advanced', true);
					
					
					
		
						
						
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
							if($scope.itemlength>0){
								
							$scope.filteredItems = $scope.itemList.filter(function(item) {
								return item && 
									   item.latest_stat && 
									   ((parseInt(item.latest_stat.status_type_id) == 1) || (parseInt(item.latest_stat.status_type_id) == 4)  );
							});
														
								
	
								
							}
							$scope.searchResults = "A preliminary database search yielded " + $scope.filteredItems.length + " results";
							
							
						})
						.catch(function(error) {
							console.error('Filter API error:', error);
							$scope.itemList = [];
							$scope.itemlength = 0;
							$scope.searchResults = "An error occurred while searching the database";
						});
			
			
			
		
	};
	
	$scope.openResults=function(){
		if($scope.filteredItems.length>0){
		   sessionStorage.setItem('itemList', JSON.stringify($scope.itemList));
			$cookies.put("fromsearch",JSON.stringify(false));

			window.open('admin_results.html','_SELF');
		}
	}
		
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
	
	};
	
$scope.addClaim = function() {
    var request_id = $scope.reqId;
    var claim_details = $scope.claim_details;
    
    // Date formatting
    var dt = new Date($scope.claim_date);
    var claim_date = dt.getFullYear() + "-" + 
                    (dt.getMonth() + 1) + "-" + 
                    dt.getDate();

    // File handling with ngf-select
    var uploadData = {
        request_id: request_id,
        claim_date: claim_date,
        details: claim_details
    };

    if ($scope.img) {
        uploadData.file = $scope.img;
    }

    Upload.upload({
        url: host + "addclaim",
        method: 'POST',
        data: uploadData
    }).then(function(response) {
        // Update requests list
        $http.get(host + "requests/recent/1").then(function(resp) {
            $scope.requests = resp.data;
            
            // Find and update request
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
            // Close modal after successful upload
            $('#modal_claim').modal('hide');
        });
    }, function(error) {
        console.error('Claim upload failed:', error);
    });
};
/*	
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
			data: {file:photo,'request_id': request_id,'claim_date':claim_date,'details':claim_details}

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


*/	
/*
	$scope.$watch('img', function (file) {
      if (!file.$error) {
        $scope.uploadFile($scope.img);
      }
    });		
		
	$scope.uploadFile=function(file){

		

		var photo=$scope.file;
				


		
		
		
	}
	*/
	// Watch for image changes
$scope.$watch('img', function(newFile) {
    if (newFile) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $scope.$apply(function() {
                $scope.imagePreview = e.target.result;
            });
        };
        reader.readAsDataURL(newFile);
    }
});
	/*
	
	$scope.uploadImage = function(files){
	    if (files && files.length) {
			$scope.img = files[0];
			var file = files[0];

		}

		 
	}			
	*/
// Update uploadImage function to handle file selection
$scope.uploadImage = function(files) {
    if (files && files.length) {
        $scope.file = files[0];
        $scope.img = files[0];  // Set both for compatibility
        
        // Preview image if needed
        var reader = new FileReader();
        reader.onload = function(e) {
            $scope.$apply(function() {
                $scope.imagePreview = e.target.result;
            });
        };
        reader.readAsDataURL(files[0]);
    }
};	
		
		
		
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

