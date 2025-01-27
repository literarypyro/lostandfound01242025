var requestModule=angular.module('retrieveApp',['datatables','ngCookies','ngAnimate','ngFileUpload']);
requestModule.controller("retrieveController",['$compile', '$scope','$http','$window','$cookies','Upload', function retrieveController($compile, $scope,$http,$window,$cookies,Upload){

//	var host=$window.hostName;


		
	
	
	var host="https://oms.dotrmrt3.gov.ph/psilva/lnf_api/";
	var request_id = window.location.search.split("uid=")[1];	
	$scope.request_id=request_id;
	
	$scope.assetfolder2=host+"assets/images/items/";

    $scope.$watch('img', function (file) {
      if (!file.$error) {
        $scope.uploadFile($scope.img);
      }
    });	

	
	var url=host+"item/"+request_id;
		$http.get(url).then(function(resp, status, headers, config) {
			var response=resp.data;
			$scope.retrieveDetails(response['details']);
			
			$scope.item=response;
			$scope.description=$scope.item.description;
			$scope.picture=$scope.item.details.picture;
			var stat=$scope.item.latest_status;
			
			if(stat){
				$scope.status=stat.status_type.type;
			}
			
			
		});	


	
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
	/*	
    $scope.submit = function() {
      if ($scope.form.file.$valid && $scope.file) {
        $scope.upload($scope.file);
      }
    };
	
    $scope.upload = function (file) {
        Upload.upload({
            url: 'upload/url',
            data: {file: file}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };	
	
	*/
	
		var url2=host+"location";
			
			
		$http.get(url2)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
								
			//if login is illegal
					
					
			$scope.locations = response;
			//console.log(data);
		});	

	$scope.editDetails=function(){
		var request_id3 = window.location.search.split("uid=")[1];	
		
		var item_id=request_id3;
		var url=host+"edititem/"+item_id+"/details";
		
		var editField="details";
		var editValue="1";
		var dt=new Date($scope.edit_found_date);
		var year=dt.getFullYear();
		var mm=dt.getMonth();
		var day=dt.getDate();

		$scope.found_dt=year+"-"+(mm+1)+"-"+day;
		var payload = new FormData();
		payload.append('editField', editField);
		payload.append('editValue', editValue);
		payload.append('item_id', request_id3);

		payload.append('item_no', $scope.edit_item_no);
		payload.append('category', $scope.edit_category);
		payload.append('item_type', $scope.edit_item_type);
		payload.append('location', $scope.edit_location);
		payload.append('found_date', $scope.found_dt);

					
						
		$http({
			url: url,
			method: 'POST',
			data: payload,
			//assign content-type as undefined, the browser
			//will assign the correct boundary for us
			headers: { 'Content-Type': undefined },
							//prevents serializing payload.  don't do it.
				transformRequest: angular.identity
			})
			.then(function(response, status, headers, config) {
								
					var request=response.data;
					var request_id2 = window.location.search.split("uid=")[1];	
					
					var item_id=request_id2;
							
//							$scope.message="Item successfully recorded.";
								
							//window.open('admin_2.html','_SELF');
								
					var url4=host+"item/"+item_id;
					$http.get(url4).then(function(resp, status, headers, config) {
						var response2=resp.data;
						
						$scope.item=response2;
						
						
						
					});								
										
								
			});

		
		
	};
	$scope.editSpecifications=function(){
		var request_id2 = window.location.search.split("uid=")[1];	
		
		var item_id=request_id2;
		var url=host+"edititem/"+item_id+"/particulars";
		
		var editField="particulars";
		var editValue="1";

		var payload = new FormData();
		payload.append('editField', editField);
		payload.append('editValue', editValue);
		payload.append('item_id', request_id2);

		payload.append('color', $scope.edit_color);
		payload.append('shape', $scope.edit_shape);
		payload.append('length', $scope.edit_length);
		payload.append('width', $scope.edit_width);
		payload.append('other_details', $scope.edit_other_details);

					
						
		$http({
			url: url,
			method: 'POST',
			data: payload,
			//assign content-type as undefined, the browser
			//will assign the correct boundary for us
			headers: { 'Content-Type': undefined },
							//prevents serializing payload.  don't do it.
				transformRequest: angular.identity
			})
			.then(function(response, status, headers, config) {
								
					var request=response.data;

							
//							$scope.message="Item successfully recorded.";
								
							//window.open('admin_2.html','_SELF');
								
					$scope.shape=request.shape;
					$scope.color=request.color;
					$scope.length=request.length;
					$scope.width=request.width;
					$scope.other_details=request.other_details;								
										
								
			});

		
		
	};

	$scope.editDescription=function(){
		var request_id2 = window.location.search.split("uid=")[1];	
		
		var item_id=request_id2;
		var url=host+"edititem/"+item_id+"/description";
		
		var editField="description";
		var editValue="1";

		var payload = new FormData();
		payload.append('editField', editField);
		payload.append('editValue', editValue);
		payload.append('item_id', request_id2);

		payload.append('description', $scope.edit_description);

					
						
		$http({
			url: url,
			method: 'POST',
			data: payload,
			//assign content-type as undefined, the browser
			//will assign the correct boundary for us
			headers: { 'Content-Type': undefined },
							//prevents serializing payload.  don't do it.
				transformRequest: angular.identity
			})
			.then(function(response, status, headers, config) {
								
					var request=response.data;
												
					$scope.description=request;
					var itemurl=host+"item/"+request_id;
						$http.get(itemurl).then(function(resp, status, headers, config) {
							var response=resp.data;
						
							$scope.item=response;
							$scope.description=$scope.item.description;
							
							
						});						
								
			});

		
		
	};
	$scope.editStatus=function(){
	
		var request_id2 = window.location.search.split("uid=")[1];	
		
		var item_id=request_id2;
		var url=host+"editstatus";
		
		var editField="status";
		var editValue="1";


		var stat=$scope.edit_status_type;
		
		var stat_details="";
		if(stat==1){
			stat_details="Found Item Recorded";
		}		
		else if(stat==3){
			stat_details="Claimed";
		}		
		else if(stat==4){
			stat_details="Item Expired";
		}		
		else if(stat==5){
			stat_details="Item Disposed";
		}		
		


		var payload = new FormData();
		payload.append('editField', editField);
		payload.append('editValue', editValue);
		payload.append('item_id', request_id2);

		payload.append('status_type', stat);
		payload.append('details', stat_details);
		payload.append('received_by', "");

					
						
		$http({
			url: url,
			method: 'POST',
			data: payload,
			//assign content-type as undefined, the browser
			//will assign the correct boundary for us
			headers: { 'Content-Type': undefined },
							//prevents serializing payload.  don't do it.
				transformRequest: angular.identity
			})
			.then(function(response, status, headers, config) {
			
					var request=response.data;
										
					var stat=request.status;
					
					if(stat=="Found Item Recorded"){
						$scope.status="Active";
						
					}
					else if(stat=="Item Disposed"){
						$scope.status="Disposed/Transferred";
						
					}
					else if(stat=="Item Expired"){
						$scope.status="Expired";
						
					}
					else if(stat=="Claimed"){
						$scope.status="Claimed";
						
					}
										
					
								
			});

		
		
	};
	$scope.uploadFile=function(file){
		var item_id=$scope.request_id;

		var request_id3 = window.location.search.split("uid=")[1];	
		
		var item_id=request_id3;

		var edit_url=host+"edititem/"+item_id+"/picture";
		

		var photo=$scope.file;
				
		var payload = new FormData();
		payload.append("editField", "picture");
		payload.append('editValue', $scope.img);
		payload.append('file', $scope.img);


		Upload.upload({

			url: edit_url,
			method: 'POST',
            fields: {'editField': "picture",'editValue':''},
//			file: $scope.img,
			data: {file:$scope.img,'editField': "picture",'editValue':''}

		}).success(function(data) {
			
			$scope.picture=data.picture;	
			
			
//			console.log("SUCCESS: " + data);
		}).error(function(err) {
			console.log("ERROR: " + err.message);
		});		



		
		
		
	};
	
	
	$scope.uploadImage = function(files){
	    if (files && files.length) {
			$scope.img = files[0];
			var file = files[0];

		}

		 
	};
	
	


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
