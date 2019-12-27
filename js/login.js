var loginModule=angular.module('loginApp',[]);


loginModule.controller('loginController',['$compile','$scope',"$http","$rootScope", function loginController($compile, $scope,$http,$rootScope,myService){

//	var host=$window.hostName;

	$scope.loginUser=function(){
		

		
		//var url=host+"login";
		var url="http://10.20.5.11/lnf_api_old/lnf_api/login";
		//var url="http://192.168.1.11/lnf_api_old/lnf_api/login";
		
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
				
				
				var user_id=response["userid"];

				
				
				
				$scope.error_mesage=response["message"];
				$scope.error_confirm=response["confirm"];
				
				
//				$rootScope.username=response["username"];
				
				
//				$rootScope.name=response["name"];
//				$rootScope.token=response["token"];
//				$rootScope.login_type=response["login_type"];
	
				
	
				if(response["login_type"]=="user"){
//					window.open("request_list.html?token="+token+"&uid="+user_id,"_self");	
					//window.open("request_list.html?uid="+user_id,"_self");	
				
					alert("Forbidden. You are not allowed to enter this site.");
				
				}
				else if(response["login_type"]=="administrator"){
					window.open("admin_dashboard.html?token="+token+"&uid="+user_id+"&b=N","_self");			
				}
				else if(response["login_type"]=="station_base"){
					window.open("admin_dashboard.html?token="+token+"&uid="+user_id+"&b=Y","_self");			
				}
				
				
				
			}
			//console.log(data);
		})
		.catch(function(error){
			console.log(error);
		});
/*
		.error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			
			$scope.error_confirm=false;
			$scope.error_message="Invalid credentials";
			
		});
		*/
	};
}]);

