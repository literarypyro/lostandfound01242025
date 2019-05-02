var addItemModule=angular.module('addItemApp',[]);
addItemModule.controller("addItemController",['$compile', '$scope',"$http", function addController($compile, $scope,$http){




		$details->item_id=$request->item_id;
		$details->color=$request->color;
		$details->shape=$request->shape;
		$details->length=$request->length;
		$details->width=$request->width;
		$details->other_details=$request->other_details;










	var url="http://localhost/lnf_api/item/?api_token"+token;
	var parameter = JSON.stringify({
						found_date:found_date, 




						$details->color=$request->color;
						$details->shape=$request->shape;
						$details->length=$request->length;
						$details->width=$request->width;
						$details->other_details=$request->other_details;














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
