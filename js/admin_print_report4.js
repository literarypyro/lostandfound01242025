var requestModule=angular.module('itemsApp',['datatables']);
requestModule.controller("itemsController",['$compile', '$scope','$http','$window','$filter', function searchController($compile, $scope,$http,$window,$filter){

	var host=$window.hostName;

	var request_id = window.location.search.split("date=")[1];	
	$scope.request_id=request_id;
	$scope.assetfolder=host+"public/assets/images/items/";	

	var dateFrom=request_id.split("to")[0];
	var dateTo=request_id.split("to")[1];
	
	
	$scope.period=$filter('date')(dateFrom.replace("%20"," "), "MM/yyyy");
	
	$scope.period2=$filter('date')(dateTo.replace("%20"," "), "MM/yyyy");


	var url=host+"items/daterange/1/range/"+request_id;

		
	
//		var request_id=id;
		
//		var token=$scope.token;
		
		
		
		$http.get(url).then(function(resp, status, headers, config) {
			var response=resp.data;

			$scope.items=response;		

		});		
		

}]);

