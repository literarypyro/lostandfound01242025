var addItemModule=angular.module('addItemApp',['ui.select2','ngCookies']);
addItemModule.controller("addItemController",['$compile', '$scope',"$http",'$window','$cookies', function addController($compile, $scope,$http,$window,$cookies){

	var host=$window.hostName;
	$scope.receiver=null;
	$scope.user_name=$cookies.get("user_name");
	var addToggle=false;
	
	
	
	var found_record_id = window.location.search.split("fr=")[1];	
	$scope.found_record_id=found_record_id;

	if((found_record_id=="")||(found_record_id==null)){
		$scope.found_record_id="";
		
	}
	else {
		url=host+"particular/"+found_record_id;
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
	var url=host+"itemType";
	
	
		$http.get(url)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
						
			//if login is illegal
			
			
			$scope.item_types = response;
			//console.log(data);
	});	
	
	
	$scope.$watch('category', function (newVal, oldVal) {
		if (oldVal == newVal){
			return;
		}
		else if(newVal==""){
			return;
		}
		else if((newVal=="4")||(newVal=="21")){
			$('#modal-identification').modal("show");
//			alert("Identification");
			
			
		}
		else {
			return;
		}

		}, true);	
	
	$scope.enterIdentification=function(){
		$scope.ref_identification=$scope.identification_ref_no;
		$scope.id_type=$scope.identification_type;
	
	
	
	}	
	$scope.addReceiver=function(){

		var url=host+"receivers";		


	
		var payload = new FormData();
		payload.append("firstName", $scope.receiver_firstName);
		payload.append("lastName", $scope.receiver_lastName);
		payload.append('position', $scope.receiver_position);
					
		$http({
			url: url,
			method: 'POST',
			data: payload,
						//assign content-type as undefined, the browser
						//will assign the correct boundary for us
			headers: { 'Content-Type': undefined},
						//prevents serializing payload.  don't do it.
			transformRequest: angular.identity
		})
		.then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
							

			var url2=host+"receivers";
			
			
				$http.get(url2)
				.then(function(resp, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					var response=resp.data;
								
					//if login is illegal
					
					
					$scope.receivers = response;
					//console.log(data);
			});	

							
			$scope.resp=response.data;
			//$scope.ref_identification="";
			//$scope.id_type="";
			//$scope.message="Item successfully recorded.";
			//window.open('admin_dashboard.html','_SELF');
							
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	
	
	
	}	
	$scope.listReceivers=function(){
		var url2=host+"receivers";
			
			
		$http.get(url2)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
								
			//if login is illegal
					
					
			$scope.receivers = response;
			//console.log(data);
		});	


	}
	
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



	
	$scope.addReceiverDetails=function(){
		
		$scope.receiver=$scope.receiver_details;


		
	
	
	}		
	$scope.addItem=function(){
		var url=host+"item";
		var newVal=$scope.category;
		
		if((newVal=="4")||(newVal=="21")){
			
			if(($scope.ref_identification==null)||($scope.id_type==null)){
				alert("Specify Identification Details first");
				$('#modal-identification').modal("show");
				return false;
				
			}
		
		}
		
		
		
		addToggle=true;
		/*
		var parameter = JSON.stringify({
							user_id:$scope.user_id,
							description:$scope.description,
							category:$scope.category,
							item_type:$scope.item_type,
				//			request_date:$scope.request_date, 
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
			
			$scope.message="Item successfully recorded.";
			
			window.open('admin_dashboard.html','_SELF');
			
			
			
			
			
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
		*/
		if(($scope.item_type=="")||($scope.item_type==null)){
			alert("Error: Item Type Missing");
			
		}
		else if(($scope.category=="")||($scope.category==null)){
			alert("Error: Category Missing");
		}
		else {
		
			if($scope.found_date!==""){

				var photo=$scope.file;
			
				var payload = new FormData();
				payload.append("found_date", $scope.found_date);
				payload.append("user_id", $scope.user_id);
				payload.append('description', $scope.description);
				payload.append('category', $scope.category);
				payload.append('item_type', $scope.item_type);
				payload.append('color', $scope.color);
				payload.append('shape', $scope.shape);
				payload.append('length', $scope.length);
				payload.append('width', $scope.width);
				payload.append('other_details', $scope.other_details);
				payload.append('file', $scope.img);
				payload.append('receiver_id', $scope.receiver);
				payload.append('location_id', $scope.item_location);

				
				
				
				if((newVal=="4")||(newVal=="21")){
					
					payload.append('identification_ref_no', $scope.ref_identification);
					payload.append('identification_type', $scope.id_type);

					
				}	
					
					
					
					$http({
						url: url,
						method: 'POST',
						data: payload,
						//assign content-type as undefined, the browser
						//will assign the correct boundary for us
						headers: { 'Content-Type': undefined},
						//prevents serializing payload.  don't do it.
						transformRequest: angular.identity
					})
					.then(function(response, status, headers, config) {
							// this callback will be called asynchronously
							// when the response is available
							
							
							
							
						$scope.resp=response.data;

						$scope.ref_identification="";
						$scope.id_type="";
						
						$scope.message="Item successfully recorded.";
							
						window.open('admin_dashboard.html','_SELF');
							
							
							
							
							
					}).
					error(function(data, status, headers, config) {
						// called asynchronously if an error occurs
						// or server returns response with an error status.
					});
				
			}
		}
	}
	$scope.logout=function (){
		$http.get(host+"logout").
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			window.open("index.html","_SELF");
			
			
			
			
		});
	
	}	


	$scope.addCategory=function (){
	var url=host+"category";		
	var parameter = JSON.stringify({
							type:$scope.category_add
						});
		$http.post(url, parameter).
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			$scope.resp=response.data;
			
			$scope.message="Category successfully recorded.";
			
			//window.open('admin_dashboard.html','_SELF');
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
			
			
			
			
			
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	
	}	

	$scope.addItemType=function (){
	var url=host+"itemType";		
	var parameter = JSON.stringify({
							name:$scope.itemtype_add,
							duration:$scope.duration_add
						});
		$http.post(url, parameter).
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			
			
			
			
			$scope.resp=response.data;
			
			$scope.message="Item Type successfully recorded.";
			
			//window.open('admin_dashboard.html','_SELF');
			var url=host+"itemType";
			$http.get(url)
			.then(function(resp, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				var response=resp.data;
							
				//if login is illegal
				
				
				$scope.item_types = response;
				//console.log(data);
			});	

		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	
	}	

	$scope.image = "";

	$scope.imageUpload = function(event){
		 var files = event.target.files; //FileList object


		 var file = files[0];
		
		 $scope.img=files[0];
		
		 var reader = new FileReader();
		 reader.onload = $scope.imageIsLoaded; 
		 reader.readAsDataURL(file);
		 
		 
	}

	$scope.imageIsLoaded = function(e){
		$scope.$apply(function() {
			$scope.image=e.target.result;
		});
	}	
}]);
