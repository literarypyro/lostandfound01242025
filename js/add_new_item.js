var addItemModule=angular.module('addItemApp',[]);
addItemModule.controller("addItemController",['$compile', '$scope',"$http", function addController($compile, $scope,$http){

	var url="http://192.168.1.11/lnf_api_old/lnf_api/item";
	
	
	
	var found_record_id = window.location.search.split("fr=")[1];	
	$scope.found_record_id=found_record_id;

	if((found_record_id=="")||(found_record_id==null)){
		$scope.found_record_id="";
		
	}
	else {
		url="http://192.168.1.11/lnf_api_old/lnf_api/particular/"+found_record_id;
	}

	
	$scope.addItem=function(){

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
		
			var photo=$scope.file;
		
			var payload = new FormData();
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
	$scope.logout=function (){
		$http.get("http://192.168.1.11/lnf_api_old/lnf_api/logout").
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
