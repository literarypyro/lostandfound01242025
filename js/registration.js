var registrationModule=angular.module("registrationApp",["ngRoute"]);

registrationModule.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider) {
     $locationProvider
	  .html5Mode(false)
	  .hashPrefix('!');
    $routeProvider.
      when('register.html#!/details', {
        templateUrl: 'details_page.html',
        controller: 'detailsController'
      });
      //when('/showOrders', {
       // templateUrl: 'templates/show-orders.html',
       // controller: 'ShowOrdersController'
      //}).
//      .otherwise({
      //  redirectTo: '/addOrder'
 //       templateUrl: 'register.html',
  //      controller: 'registrationController'
      
	  
	  
	//  });
  }]);
registrationModule.controller("registrationController",['$compile','$scope',"$http","$rootScope","$window", function registrationController($compile, $scope,$http,$rootScope,$window){

	$scope.registerUser=function (){
		
		
	
		var url="http://192.168.1.11/lnf_api_old/lnf_api/register";
		var username=$scope.username;
		var name=$scope.name;
		var password=$scope.password;
		var user_type=$scope.user_type;
	
	
		var parameter = JSON.stringify({username:username, password:password, name:name,user_type:user_type});
		$http.post(url, parameter).
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var user=response.data;


			$scope.user_id=user["user_id"];
			
			$window.open('details_page.html?user_id='+$scope.user_id,'_SELF');

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

		var url="http://192.168.1.11/lnf_api/register/"+$scope.user_id+"/profile";						
		var url2="http://192.168.1.11/lnf_api/register/"+$scope.user_id+"/address";						
		var url3="http://192.168.1.11/lnf_api/register/"+$scope.user_id+"/contact";						
								
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



