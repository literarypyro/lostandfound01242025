(function() {


var requestModule=angular.module("requestApp",[]);
requestModule.controller("requestController",function($scope,$http){
		
	$scope.makeRequest=function (){
			 
			 var data = $.param({
                fName: $scope.firstName,
                lName: $scope.lastName
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/ServerRequest/PostDataResponse', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
	};
	
	$scope.listUserRequests=function (){
	
		var user_id=$scope.user_id;
		$http.get("http://localhost/lnf_api/lnf_api/requests/userRequests/"+user_id).success(function(response) {$scope.requests = response.requests;});	
	
	};
	$scope.retrieveItem=function (){
		
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/lnf_api/request/"+item_id).success(function(response) {$scope.requests = response.requests;});	

	};
	
	$scope.retrieveRequestStatus=function (){
		
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/lnf_api/request/"+item_id+"/status").success(function(response) {$scope.requests = response.requests;});	

	};
	
});
var itemModule=angular.module("itemApp",[]);
itemModule.controller("itemController",function($scope,$http){

	$scope.searchItem=function (){
		var search_type=$scope.search_type;
		var search_term=$scope.search_term;
		
		$http.get("http://localhost/lnf_api/lnf_api/items/"+search_type+"/"+search_term)
		.success(function(response) { 
			$scope.items = response.items; 
		});	

	
			 
	};
	$scope.retrieveItem=function (){
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/lnf_api/item/"+item_id).success(function(response) {$scope.items = response.items;});	


	};
	$scope.retrieveItemStatus=function (){
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/lnf_api/item/"+item_id+"/status").success(function(response) {$scope.requests = response.requests;});	


	};
		
	
});
})();