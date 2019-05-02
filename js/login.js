var loginModule=angular.module('loginApp',[]);


loginModule.controller('loginController',['$compile','$scope',"$http","$rootScope", function loginController($compile, $scope,$http,$rootScope){

	$scope.loginUser=function(){
		alert("A");
		var url="http://localhost/lnf_api/user/login";
		
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
				$rootScope.login_type=response["login_type"];
				
				if(response["login_type"]=="user"){
					window.open("request_list.html");	
				}
				else if(response["login_type"]=="administrator"){
					window.open("admin_dashboard.html");			
				}
			}
			//console.log(data);
		})
		.error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
		
	};
}]);

