var requestModule=angular.module('requestApp');


requestModule.controller=controller("requestController",['$compile', '$scope',"$http", function requestController($compile, $scope,$http){
	$scope.listUserRequests=function (){
		var user_id=$scope.user_id;
		$http.get("http://localhost/lnf_api/requests/userRequests/"+user_id).then(function(response) {$scope.requests = response.requests;});	
	
	};
	$scope.retrieveItem=function (){
		
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/request/"+item_id).then(function(response) {$scope.requests = response.requests;});	

	};
	
	$scope.retrieveRequestStatus=function (){
		
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/request/"+item_id+"/status").then(function(response) {$scope.requests = response.requests;});	

	};


	$http.get("http://localhost/lnf_api/requests/userRequests/1").then(function(response) {$scope.requests = response.data; });	
		  
}]);

var requestDetailsModule=angular.module('detailsApp');

requestDetailsModule.controller=controller("requestDetailsController",['$compile','$scope',"$http", function requestDetailsController($compile, $scope,$http){

	$http.get("http://localhost/lnf_api/request/1").then(function(response) {$scope.requests = response.data; });	
		  
}]);


var addRequestModule=angular.module('addRequestApp');

addRequestModule.controller=controller("addRequestController",['$compile', '$scope',"$http", function addController($compile, $scope,$http){


	var url="http://localhost/lnf_api/request";
	
	
	
	var parameter = JSON.stringify({type:"user", username:user_email, password:user_password});
    $http.post(url, parameter).
    success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

//	$http.get("http://localhost/lnf_api/request/1").then(function(response) {$scope.requests = response.data; });	
		  
}]);






var addItemModule=angular.module('addItemApp');

addItemModule.controller=controller("addController",['$compile', '$scope',"$http", function addController($compile, $scope,$http){

	
	
	var url="http://localhost/lnf_api/item";
	
	
	
	var parameter = JSON.stringify({type:"user", username:user_email, password:user_password});
    $http.post(url, parameter).
    success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(data);
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

		  
}]);


var itemDetailsModule=angular.module('itemDetailsApp');

itemDetailsModule.controller=controller("itemDetailsController",['$compile','$scope',"$http", function itemDetailsController($compile, $scope,$http){

	var item_id=$scope.item_id;
		
	$http.get("http://localhost/lnf_api/item/"+item_id).then(function(response) {$scope.requests = response.data; });	

	$scope.retrieveItemStatus=function (){
		
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/item/"+item_id+"/status").then(function(response) {$scope.requests = response.requests;});	

	};
	
}]);



var itemListModule=angular.module('itemListApp');

itemListModule.controller=controller("itemListController",['$compile','$scope',"$http", function itemListController($compile, $scope,$http){


	//Introduce Tagging


	var category=$scope.category;
	var search_id=$scope.search_id;


	$http.get("http://localhost/lnf_api/items/"+category+"/"+search_id).then(function(response) {$scope.items = response.data; });	

	$scope.retrieveItemStatus=function (){
		
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/item/"+item_id+"/status").then(function(response) {$scope.requests = response.requests;});	

	};
		  
}]);




var loginModule=angular.module('loginApp');

loginModule.controller=controller("loginController",['$compile','$scope',"$http", function loginController($compile, $scope,$http){


	//Introduce Tagging
	var url="http://localhost/lnf_api/user/login";

	
	$scope.loginUser=function (){
	
		var parameter = JSON.stringify({type:"user", username:user_email, password:user_password});
		$http.post(url, parameter).
		success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			
			
			//if login is illegal
			
			
			console.log(data);
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	};
	
	
	
	

		  
}]);

var registrationModule=angular.module('registrationApp');

registrationModule.controller=controller("registrationController",['$compile','$scope',"$http", function registrationController($compile, $scope,$http){

	var url="http://localhost/lnf_api/register";


	$scope.registerUser=function (){
	
		var parameter = JSON.stringify({type:"user", username:user_email, password:user_password});
		$http.post(url, parameter).
		success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			console.log(data);
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	};

}]);



