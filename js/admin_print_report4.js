var requestModule=angular.module('itemsApp',['datatables']);
requestModule.controller("itemsController",['$compile', '$scope','$http','$window','$filter', function searchController($compile, $scope,$http,$window,$filter){

	var host=$window.hostName;

	var request_id = window.location.search.split("date=")[1];	
	$scope.request_id=request_id;
	$scope.assetfolder=host+"assets/images/items/";	

	var dateFrom=request_id.split("to")[0];
	var dateTo=request_id.split("to")[1];
	
	
	$scope.period=new Date(dateFrom.replace("%20"," "));
	$scope.period2=new Date(dateTo.replace("%20"," "));
//	$scope.period=$filter('date')(dateFrom.replace("%20"," "), "MM/yyyy");
	
//	$scope.period2=$filter('date')(dateTo.replace("%20"," "), "MM/yyyy");

		var url2=host+"items/expired/1/range/"+request_id;

		$http.get(url2).then(function(resp, status, headers, config) {
			var response=resp.data;
			
			
			
				/*		
			$scope.res = {};
			response.forEach(function(v) {
			  res[v["expired_items"][0]["category_id"]] = (res[v["expired_items"][0]["category_id"]] || 0) + 1;
			})			
			
			*/
			$scope.date=new Date();

			
			var res=[];
			var category=[];

			var items=[];
			Object.keys(response).forEach(function (key){

				i=0;
				Object.keys(response[key]["items"]).forEach(function (key2){
					if(i==0){
						if(res[response[key]["items"][key2]["category_id"]]==null){
							res[response[key]["items"][key2]["category_id"]]=0;
						}
						res[response[key]["items"][key2]["category_id"]]++;
						category[response[key]["items"][key2]["category_id"]]=response[key]["items"][key2]["category"]["type"];
						
						
						
						
						
						i++;
					}
					
					
				});
		



			});			

			Object.keys(res).forEach(function (key){
				var item={ name: category[key], count:res[key] }
				items.push(item);



			});
			
			
			$scope.items=items;	
			
			
				
			
//			$scope.res=res;
//			$scope.category=category;
//			$scope.keys=keys;
			
			

			
			
//			$scope.expired_items=response;		

		});	
	var url=host+"items/daterange/1/range/"+request_id;

		
	
//		var request_id=id;
		
//		var token=$scope.token;
		
		
		
		$http.get(url).then(function(resp, status, headers, config) {
			var response=resp.data;

			$scope.items=response;		

		});		
		
			
}]);

