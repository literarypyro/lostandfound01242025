var addItemModule=angular.module('addItemApp',['ui.select2']);
addItemModule.controller("addItemController",['$compile', '$scope',"$http",'$window', function addController($compile, $scope,$http,$window){

	var host=$window.hostName;

	
	
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
	
	$scope.addItem=function(){
	var url=host+"item";

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
