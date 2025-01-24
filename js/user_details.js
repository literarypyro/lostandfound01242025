var registrationModule=angular.module("registrationApp",[]);
registrationModule.controller("registrationController",['$compile','$scope',"$http","$rootScope", function registrationController($compile, $scope,$http,$rootScope){

	$scope.registerUser=function (){

		var url="http://oms.dotrmrt3.gov.ph/psilva/lnf_api/register";
		var username=$scope.username;
		var name=$scope.name;
		var password=$scope.password;
	
	
		
	
	
		var parameter = JSON.stringify({username:username, password:password, name:name,user_type:user_type});
		$http.post(url, parameter).
		success(function(data, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=data;
			$scope.user_id=response["user_id"];
			
			$rootScope.userid=response["user_id"];
			
			//window.open("details_page.html");
			
			
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
		
	};
	

}]);


  

registrationModule.controller("detailsController",['$compile','$scope',"$http","$rootScope","$location","$window", function detailsController($compile, $scope,$http,$rootScope,$location,$window){
	var host=$window.hostName;

	//$scope.user_id=$rootScope.user_id;
	var user_id = window.location.search.split("user_id=")[1];	

	var url=host+"country";

	$http.get(url)
		.then(function(resp, status, headers, config) {
		var response=resp.data;
							
				
		$scope.countries = response;
	});	
	
	
	$scope.user_id=user_id;
	
	
	
	
	$scope.enterProfileDetails=function(){
		
//		$scope.user_id=user_id;

		var profile_parameter = JSON.stringify({
									first_name:$scope.first_name, 
									last_name:$scope.last_name, 
									middle_name:$scope.middle_name,
									user_id:$scope.user_id
		});
		var address_parameter = JSON.stringify({
									unit:$scope.unit, 
									street:$scope.street, 
									subdivision:$scope.subdivision, 
									city:$scope.city, 
									province:$scope.province, 
									zip_code:$scope.zip_code, 
									country_id:$scope.country,
									user_id:$scope.user_id
									
									
								});
		var contact_parameter = JSON.stringify({
									landline:$scope.landline, 
									mobile:$scope.mobile, 
									email:$scope.email,
									user_id:$scope.user_id
								});
		var url="http://oms.dotrmrt3.gov.ph/psilva/lnf_api/register/"+$scope.user_id+"/profile";						
		var url2="http://oms.dotrmrt3.gov.ph/psilva/lnf_api/register/"+$scope.user_id+"/address";						
		var url3="http://oms.dotrmrt3.gov.ph/psilva/lnf_api/register/"+$scope.user_id+"/contact";						
		$http.post(url, profile_parameter).
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var resp=response.data;
			$scope.profile_message=resp["profile"];
					$http.post(url2, address_parameter).
			then(function(response, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available


				var resp2=response.data;
				$scope.address_message=resp2["address"];

				$http.post(url3, contact_parameter).
				then(function(response, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					var resp3=response.data;
					$scope.contact_message=resp3["contact"];
					
					
					window.open('index.html','_self');

				}).
				error(function(data, status, headers, config) {
					
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});

			}).
			error(function(data, status, headers, config) {
				// called asynchronously if an error occurs
				// or server returns response with an error status.
			});



		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
		

	};
}]);



