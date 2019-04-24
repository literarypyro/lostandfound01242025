
/**
Functionality for the Client side of the System
*/

var requestModule=angular.module('requestApp');
requestModule.controller=controller("requestController",['$compile', '$scope',"$http","$rootScope", function requestController($compile, $scope,$http,$rootScope){

	var request_id=$rootScope.user_id;
	var token=$rootScope.token;
	
	$http.get("http://localhost/lnf_api/requests/userRequests/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	


	$scope.listUserRequests=function (){
		var request_id=$scope.request_id;
		$http.get("http://localhost/lnf_api/requests/userRequests/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	
	
	};
	$scope.retrieveItem=function (){
		
		var request_id=$scope.request_id;
		$http.get("http://localhost/lnf_api/request/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	

	};
	
	$scope.retrieveRequestStatus=function (){
		
		var request_id=$scope.request_id;
		$http.get("http://localhost/lnf_api/request/"+item_id+"/status/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	

	};

		  
}]);

var requestDetailsModule=angular.module('detailsApp');
requestDetailsModule.controller=controller("requestDetailsController",['$compile','$scope',"$http","$rootScope", function requestDetailsController($compile, $scope,$http,$rootScope){

	var item_id=$scope.item_id;
	var token=$rootScope.token;
	$http.get("http://localhost/lnf_api/request/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.data; });	
		  
}]);

/**
Admin Side, for Listing of Items
*/


var itemListModule=angular.module('itemListApp');
itemListModule.controller=controller("itemListController",['$compile','$scope',"$http","$rootScope", function itemListController($compile, $scope,$http,$rootScope){


	//Introduce Tagging
	var token=$rootScope.token;


	var category=$scope.category;
	var search_id=$scope.search_id;


	$http.get("http://localhost/lnf_api/items/"+category+"/"+search_id+"/?api_token="+token).then(function(response) {$scope.items = response.data; });	

	$scope.retrieveItemStatus=function (){
		
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/item/"+item_id+"/status/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	

	};
		  
}]);



var itemDetailsModule=angular.module('itemDetailsApp');

itemDetailsModule.controller=controller("itemDetailsController",['$compile','$scope',"$http", function itemDetailsController($compile, $scope,$http){

	var item_id=$scope.item_id;
	var token=$rootScope.token;

	
	$http.get("http://localhost/lnf_api/item/"+item_id+"/?api_token="+token).then(function(response) {$scope.requests = response.data; });	

	$scope.retrieveItemStatus=function (){
		
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/item/"+item_id+"/status/?api_token="+token").then(function(response) {$scope.requests = response.requests;});	

	};
	
}]);



/**
For both Client Side and Admin side, for adding Items

*/


var addRequestModule=angular.module('addRequestApp');
addRequestModule.controller=controller("addRequestController",['$compile', '$scope',"$http", function addController($compile, $scope,$http){


	var url="http://localhost/lnf_api/request/?api_token"+token;
	
	var parameter = JSON.stringify({
						type:"user", 
						username:user_email, 
						password:user_password
					});
    $http.post(url, parameter).
    success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.response=data;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

		  
}]);


var addItemModule=angular.module('addItemApp');
addItemModule.controller=controller("addController",['$compile', '$scope',"$http", function addController($compile, $scope,$http){

	
	
	var url="http://localhost/lnf_api/item/?api_token"+token;
	
	var parameter = JSON.stringify({
						type:"user", 
						username:user_email, 
						password:user_password
					});
    $http.post(url, parameter).
    success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.response=data;
      }).
      error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });

		  
}]);



/**
For login/authentication
*/


var loginModule=angular.module('loginApp');

loginModule.controller=controller("loginController",['$compile','$scope',"$http", function loginController($compile, $scope,$http,$rootScope){


	var url="http://localhost/lnf_api/user/login";
	
	
	$scope.loginUser=function (){

		var username=$scope.username;
		var password=$scope.password;
	
		var parameter = JSON.stringify({username:username, password:password});
		$http.post(url, parameter).
		success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=data;
						
			//if login is illegal
			if(response["confirm"]==false){
				$scope.error_message=response["message"];
			}
			else {
				$scope.error_mesage=response["message"];
				$rootScope.username=response["username"];
				$rootScope.name=response["name"];
				$rootScope.token=response["token"];
				
			}
			
			
			
			//console.log(data);
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	};
	
	
	
	

		  
}]);

var registrationModule=angular.module('registrationApp');

registrationModule.controller=controller("registrationController",['$compile','$scope',"$http", function registrationController($compile, $scope,$http){



	$scope.registerUser=function (){

		var url="http://localhost/lnf_api/register";
	
		var username=$scope.username;
		var name=$scope.name;
		var password=$scope.password;
	
	
		var parameter = JSON.stringify({username:username, password:password, name:name});
		$http.post(url, parameter).
		success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			
			
			var response=data;
			
			$scope.user_id=response["user_id"];
			
			
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
		
	};
	
	$scope.enterProfileDetails=function(){
		

		var profile_parameter = JSON.stringify({
									first_name:first_name, 
									last_name:last_name, 
									middle_name:middle_name
								});
		var address_parameter = JSON.stringify({
									unit:unit, 
									street:street, 
									subdivision:subdivision, 
									city:city, 
									zip_code:zip_code, 
									country_id:country_id, 
									
								});
		var contact_parameter = JSON.stringify({
									landline:landline, 
									mobile:mobile, 
									email:email
								});

								
		var url="http://localhost/lnf_api/register/"+$scope.user_id+"/profile";						
		var url2="http://localhost/lnf_api/register/"+$scope.user_id+"/address";						
		var url3="http://localhost/lnf_api/register/"+$scope.user_id+"/contact";						
								
								
			
		$http.post(url, profile_parameter).
		success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			$scope.profile_message=data["message"];
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
		$http.post(url2, address_parameter).
		success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			$scope.address_message=data["message"];
			
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			
		});
		$http.post(url3, contact_parameter).
		success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			$scope.contact_message=data["message"];
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});


		
	};
	
	
	

}]);



