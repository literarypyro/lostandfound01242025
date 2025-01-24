var registrationModule=angular.module("registrationApp",['ui.select2','ngCookies']);


registrationModule.controller("registrationController",['$compile','$scope',"$http","$rootScope","$window","$cookies", function registrationController($compile, $scope,$http,$rootScope,$window){

$scope.registerUser=function() {
    const surl = "https://oms.dotrmrt3.gov.ph/psilva/lnf_api/register";
    const username = $scope.username;
    const name = $scope.first_name+" "+$scope.last_name;
    const password = $scope.password;
    const user_type = $scope.user_type;

        const steps = document.getElementsByClassName("step");
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const submitBtn = document.getElementById('submit-btn');
        const preloader = document.getElementById('preloader-wrapper');
        const successDiv = document.getElementById('success');


    parameter = JSON.stringify({ username, password, name, user_type });


        // Hide all steps and buttons
        Array.from(steps).forEach(step => {
            step.style.display = 'none';
        });
        if(prevBtn) prevBtn.style.display = 'none';
        if(nextBtn) nextBtn.style.display = 'none';
        if(submitBtn) submitBtn.style.display = 'none';
        // Show preloader
        preloader.style.display = 'block';
        successDiv.style.display = 'none';
		
//    try {
      $http.post(surl, parameter)
	  .then(function(resp) {
        const response = resp.data;
        $scope.user_id = response.user_id;



        if ($scope.user_id=="") {
            throw new Error("User ID is not returned from registration");
        }

        const profileParameter = JSON.stringify({
            first_name: $scope.first_name,
            last_name: $scope.last_name,
            middle_name: $scope.middle_name
        });





        return $http.post(`https://oms.dotrmrt3.gov.ph/psilva/lnf_api/registerProfile/${$scope.user_id}`, profileParameter);
	  })	
    .then(function(resp2) {
        const response2 = resp2.data;
        $scope.profile_id = response2.profile_id;
		
        const addressParameter = JSON.stringify({
            unit: $scope.unit,
            street: $scope.street,
            subdivision: $scope.subdivision,
            city: $scope.city,
            province: $scope.province,
            zip_code: $scope.zip_code,
            country_id: $scope.country_id
        });		
        return $http.post(`https://oms.dotrmrt3.gov.ph/psilva/lnf_api/registerAddress/${$scope.profile_id}`, addressParameter);
    })
    .then(function(resp3) {
        const response3 = resp3.data;
        $scope.profile_id2 = response3.profile_id;
		
        const contactParameter = JSON.stringify({
            landline: $scope.landline,
            mobile: $scope.mobile,
            email: $scope.email
			
        });		
        return $http.post(`https://oms.dotrmrt3.gov.ph/psilva/lnf_api/registerContact/${$scope.profile_id2}`, contactParameter);
    })
    .then(function() {
                // Hide preloader and show success after all API calls complete
                preloader.style.display = 'none';
                successDiv.style.display = 'block';

                // Redirect after showing success message
                setTimeout(() => {
                    $window.open("../lostnfound", '_SELF');
                }, 1500);
    })
    .catch(function(error) {
        console.error("Error during registration:", error);
                // Hide preloader on error
                preloader.style.display = 'none';
                // Show error message to user
                alert('Registration failed. Please try again.');
    });
}
		var url4="https://oms.dotrmrt3.gov.ph/psilva/lnf_api/countries";
		$http.get(url4)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
			//if login is illegal
					
					
			$scope.countries = response;
			//console.log(data);
		});	


}]);



