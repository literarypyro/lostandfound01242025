var addItemModule=angular.module('addItemApp',[]);
addItemModule.controller("addItemController",['$compile', '$scope',"$http", function addController($compile, $scope,$http){

		var url="http://localhost/lnf_api_old/lnf_api/item";
	
	$scope.addItem=function(){

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
}
	$scope.logout=function (){
		$http.get("http://localhost/lnf_api_old/lnf_api/logout").
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			window.open("index.html","_SELF");
			
			
			
			
		});
	
	}	
 }]);
