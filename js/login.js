var loginModule=angular.module('loginApp',[]);


loginModule.controller('loginController',['$compile','$scope',"$http","$rootScope", function loginController($compile, $scope,$http,$rootScope){

	$scope.loginUser=function(){
		var url="http://localhost/lnf_api_old/lnf_api/login";
		
		var username=$scope.username;
		var password=$scope.password;
		
		var parameter = JSON.stringify({username:$scope.username, password:$scope.password});
		$http.post(url, parameter).
		then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
						
			//if login is illegal
			
			
			
			
			if(response["confirm"]==false){
				$scope.error_message=response["message"];
			}
			else {

				var token=response["token"];

				$scope.error_mesage=response["message"];
//				$rootScope.username=response["username"];
				
				
//				$rootScope.name=response["name"];
//				$rootScope.token=response["token"];
//				$rootScope.login_type=response["login_type"];
	
				if(response["login_type"]=="user"){
					window.open("request_list.html?token="+token,"_self");	
				}
				else if(response["login_type"]=="administrator"){
					window.open("admin_dashboard.html?token="+token,"_self");			
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

