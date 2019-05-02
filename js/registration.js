var registrationModule=angular.module("registrationApp",[]);
registrationModule.controller("registrationController",['$compile','$scope',"$http","$rootScope", function registrationController($compile, $scope,$http,$rootScope){

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



