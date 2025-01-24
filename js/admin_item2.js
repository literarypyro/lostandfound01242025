var requestModule=angular.module('itemsApp',['datatables','ngSanitize','ngCookies']);
requestModule.controller("itemsController",['$compile', '$scope','$http','$window','$cookies', 'DTOptionsBuilder', 'DTColumnDefBuilder', function itemsController($compile, $scope,$http,$window,$cookies, DTOptionsBuilder, DTColumnDefBuilder){

	var editHTML="";

	alert("ht");


	var isBase=$window.isBase;
	//alert($window.sessionStorage.getItem("user"));

//	$cookies.put("A","a");
	if(isBase==""){
		var baseCheck = window.location.search.split("b=")[1];	
		$window.isBase=baseCheck;
		isBase=baseCheck;
		
	}
	$scope.user_name=$cookies.get("user_name");
	
	$scope.isBase=isBase;
	
	
	
//	var request_id = window.location.search.split("uid=")[1];	
//	$scope.request_id=request_id;

	
		//alert(request_id);
		
		
		
		
//	var request_id=$rootScope.user_id;
//	var token=window.location.search.split("token=")[1];
	
	//$http.get("http://localhost/lnf_api_old/lnf_api/requests/userRequests/"+request_id+"/?api_token="+token)


	
	$scope.deleteItem=function(delete_id){
		$http.get("http://localhost/lnf_api_old/lnf_api/public/item/"+delete_id+"/remove").then(function(response) { alert(response.data); window.location.href="admin_dashboard.html"; });	
//		$http.get("http://127.0.0.1/lnf_api_old/lnf_api/item/"+delete_id+"/remove").then(function(response) { alert(response); window.location.href="admin_dashboard.html"; });	

	}			
	
	
	
	
//	var host=$window.hostName;

	var host="https://oms.dotrmrt3.gov.ph/psilva/lnf_api/";

	$scope.assetfolder=host+"assets/images/items/";
	$scope.assetfolder2=host+"assets/images/items/";

	var url=host+"expired";
		alert(url);
		$http.get(url)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
						
			//if login is illegal
			
			alert("here");
			$scope.expired_items = response;



			//console.log(data);



	});
	$scope.dtColumnDefs = [  
		DTColumnDefBuilder.newColumnDef([2]).withOption('type', 'date').notSortable()
	];
	$scope.dtOptions=[
		DTOptionsBuilder.newOptions().withOption('order',[[1,'desc']])
	];
		



		var url=host+"recent";
	
	
		$http.get(url,{ cache: true })
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			var response=resp.data;
						
			//if login is illegal
	//		alert(response["numCount"]);
			
			$scope.items = response;
	        $scope.itemData =  Object.keys($scope.items).map(function (key) { return $scope.items[key]; });

			//console.log(data);
		});

	$scope.editField=function (){
		if($scope.edit_field=="picture"){
			$scope.submitPhoto();
			
		}		
		else {
			$scope.submitValue();
		}
	
	}
	$scope.submitPhoto=function(){

		var edit_id=$scope.edit_id
		var edit_type=$scope.edit_type;
		var edit_field=$scope.edit_field;

		var edit_value="";
		

		edit_value=$scope.img;
		
		if(edit_value==""){ alert("Image not loaded"); }
		var url=host+"item/"+edit_id+"/edit/"+edit_type;		

		var photo=$scope.file;
			var payload = new FormData();
			payload.append("editField", edit_field);
			payload.append("editValue", edit_value);
			$http({
				url: url,
				method: 'POST',
				data: payload,
				//assign content-type as undefined, the browser
				//will assign the correct boundary for us
				headers: { 'Content-Type': undefined},
				//prevents serializing payload.  don't do it.
				transformRequest: angular.identity
			})
			.then(function(response, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					
				


				
						
				resp=response.data;

				alert("Entry modification successful");		

				
				var url=host+"items/recent/1";
			
			
				$http.get(url)
				.then(function(resp, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					var response=resp.data;
								
					//if login is illegal
					
					
					$scope.items = response;
					
					
			        $scope.itemData =  Object.keys($scope.items).map(function (key) {return $scope.items[key]});

					//console.log(data);
				});
					
				$('#modal-details').modal('hide');

			});

	}

	
	$scope.submitValue=function (){
		var edit_id=$scope.edit_id
		var edit_type=$scope.edit_type;
		var edit_field=$scope.edit_field;
		
		var edit_value="";
		if(edit_field=="found_date"){
			edit_value=$('#datepicker_edit').val();
		}
		else {
			edit_value=$('#edit_value').val();
			
		}
		
		
		var url=host+"item/"+edit_id+"/edit/"+edit_type;		
		
	
		var parameter = JSON.stringify({
							editField:edit_field,
							editValue:edit_value
						});
		$http.post(url, parameter).
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available

			
			resp=response.data;

			alert("Entry modification successful");		

			
			
			var url=host+"items/recent/1";
		
		
			$http.get(url)
			.then(function(resp, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				var response=resp.data;
							
				//if login is illegal
				
				
				$scope.items = response;
				//console.log(data);
			});

			
			
		});
		/*.
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	*/
	}


	$scope.initiateEdit=function (elem,elem_id){

		$scope.edit_id=elem_id;

		$scope.edit_field=elem;
		$('#edit_content').html("");

	
		$scope.edit_type="item";
		if(elem=="found_date"){
			$scope.edit_type="found_record";
			
			editHTML="<label>Date Item was Found</label>";
			editHTML+="<div class=\"input-group date\">";
            editHTML+="<div class=\"input-group-addon\">";
            editHTML+="<i class=\"fa fa-calendar\"></i></div>";
            editHTML+="<input name='edit_value' ng-model='edit_value'  type=\"text\" class=\"form-control pull-right\" id=\"datepicker_edit\">";
			editHTML+="</div></div>"
			
			$('#edit_content').html(editHTML);
					
				
  		    $('#datepicker_edit').datepicker({
				autoclose: true
			});
			


		}
		else if(elem=="description"){
			
			editHTML="<label class='text-muted'>Edit Description</label>";
			editHTML+="<input class='form-control' type='text' id='edit_value' name='edit_value' ng-model='edit_value'  />";
	
	
			$('#edit_content').html(editHTML);
	
//			$scope.edit_content="<input type='text' />";
			
			
		}

		else if(elem=="item_no"){
		
			editHTML="<label class='text-muted'>Edit Item No.</label>";
			editHTML+="<input class='form-control' type='text' id='edit_value' name='edit_value' ng-model='edit_value'  />";
	
	
			$('#edit_content').html(editHTML);
	
//			$scope.edit_content="<input type='text' />";
			
			
		}

		else if(elem=="category_id"){


			var url=host+"category";
			$http.get(url)
			.then(function(resp, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				var response=resp.data;
							
				//if login is illegal
				
				
				$scope.categories = response;
				//console.log(data);
				
				editHTML="<label class='text-muted'>Edit Category</label>";

				editHTML+="<select ui-select2  class=\"form-control\" id='edit_value' name='edit_value' ng-model='edit_value'>";
				
				
				
				
				var categories=response;
				for(var i=0;i<categories.length;i++){
					
					editHTML+="<option value='"+categories[i]['id']+"'>"+categories[i]['type']+"</option>";		
					

				
				}
				
				
				editHTML+="</select>";
				
				$('#edit_content').html(editHTML);
				
				
			});	

			
		}
		else if(elem=="location_id"){
			$scope.edit_type="found_record";


			var url=host+"location";
			$http.get(url)
			.then(function(resp, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				var response=resp.data;
							
				//if login is illegal
				
				
				$scope.locations = response;
				//console.log(data);
				
				editHTML="<label class='text-muted'>Edit Category</label>";

				editHTML+="<select ui-select2  class=\"form-control\" id='edit_value' name='edit_value' ng-model='edit_value'>";
				
				
				
				
				var locations=response;
				for(var i=0;i<locations.length;i++){
					
					editHTML+="<option value='"+locations[i]['id']+"'>"+locations[i]['location']+"</option>";		
					

				
				}
				
				
				editHTML+="</select>";
				
				$('#edit_content').html(editHTML);
				
				
			});	

			
		}
		else if(elem=="receiver_id"){
			$scope.edit_type="found_record";


			var url=host+"receivers";
			$http.get(url)
			.then(function(resp, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				var response=resp.data;
							
				//if login is illegal
				
				
				$scope.receivers = response;
				//console.log(data);
				
				editHTML="<label class='text-muted'>Edit Receiver</label>";

				editHTML+="<select ui-select2  class=\"form-control\" id='edit_value' name='edit_value' ng-model='edit_value'>";
				
				
				
				
				var receivers=response;
				for(var i=0;i<receivers.length;i++){
					
					editHTML+="<option value='"+receivers[i]['id']+"'>"+receivers[i]['lastName']+", "+receivers[i]['firstName']+"</option>";		
					

				
				}
				
				
				editHTML+="</select>";
				
				$('#edit_content').html(editHTML);
				
				
			});	

			
		}

		else if(elem=="item_type_id"){


			var url=host+"itemType";
			$http.get(url)
			.then(function(resp, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				var response=resp.data;
							
				//if login is illegal
				
				
				$scope.item_types = response;
				//console.log(data);
				
				editHTML="<label class='text-muted'>Edit Item Type</label>";

				editHTML+="<select ui-select2  class=\"form-control\" id='edit_value' name='edit_value' ng-model='edit_value'>";
				
				
				
				
				var item_types=response;
				for(var i=0;i<item_types.length;i++){
					if(item_types[i]['id']==3){
					}
					else {
						editHTML+="<option value='"+item_types[i]['id']+"'>"+item_types[i]['name']+"</option>";		
					}

				
				}
				
				
				editHTML+="</select>";
				
				$('#edit_content').html(editHTML);
				
			});	
			
		}

		else if(elem=="picture"){
			$scope.edit_type="details";
			
			
//			editHTML="<img class=\"thumb\" width=50% height=50% ng-src=\"{{ image }}\" />"
			
			editHTML=" <label class=\"text-muted\">Edit Image</label>";
			editHTML+="<input type='file' ng-model-instant ng-model=\"file\" onchange=\"angular.element(this).scope().imageUpload(event)\" />"; 	


	
			$('#edit_content').html(editHTML);
	
//			$scope.edit_content="<input type='text' />";
			
			
		}




				  














		else if((elem=="color")||(elem=="shape")||(elem=="length")||(elem=="width")||(elem=="other_details")) {
			$scope.edit_type="details";
			var label="";
			if(elem=="other_details")
			{
				label="other details";
				
			}
			else {
				label=elem;
				
			}
			
			
			editHTML="<label class='text-muted'>Edit Detail ("+label+")</label>";
			editHTML+="<input class='form-control' type='text' id='edit_value' name='edit_value' ng-model='edit_value'  />";
	
	
			$('#edit_content').html(editHTML);
	
//			$scope.edit_content="<input type='text' />";
			
			
		}
		
		
		


	};
		
	$scope.retrieveItemStatus=function (id){
		//var request_id=$scope.request_id;
		
		var request_id=id;
		$scope.request_status=request_id;
		
//		var token=$scope.token;
		
//		$http.get("http://localhost/lnf_api_old/lnf_api/request/"+request_id+"/status/?api_token="+token).then(function(resp, status, headers, config) {
		$http.get(host+"item/"+request_id+"/status").then(function(resp, status, headers, config) {
			
			var response=resp.data;

			
			$scope.statuses = response["status"];
			
			
			
			
			
			
		});	
	};

	$scope.listParticular=function (item){
		//var request_id=$scope.request_id;
		
		
		$scope.found_record_id=item.id;
		
		var url=host+"items/found_record/"+item.id;
		$http.get(url)
		.then(function(resp, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available


			var response=resp.data;
			//if login is illegal
			
			
			$scope.item_particulars = response[0]["items"];
			//console.log(data);
		});



//		var request_id=id;
//		$scope.request_status=request_id;
	

	
//		var token=$scope.token;
		
		
//		$http.get("http://localhost/lnf_api_old/lnf_api/request/"+request_id+"/status/?api_token="+token).then(function(resp, status, headers, config) {



//		$http.get("http://localhost/lnf_api_old/lnf_api/item/"+request_id+"/status").then(function(resp, status, headers, config) {
			
//			var response=resp.data;

			
//			$scope.statuses = response["status"];
			
//		});		
			
			
			
	};
	$scope.addParticular=function (record){


			window.open("add_new_item.html?fr="+record,"_SELF");
	}
	$scope.retrieveDetails=function (request,item_id){
		//var request_id=$scope.request_id;
		
			$scope.details_id=item_id;
			$scope.saved_request=request;


		
			$scope.shape=request.shape;
			$scope.color=request.color;
			$scope.length=request.length;
			$scope.width=request.width;
			$scope.other_details=request.other_details;
			$scope.picture=request.picture;
		
	};
		
	$scope.getImage=function (request){
		//var request_id=$scope.request_id;
		
		
			$scope.picture_part=request.picture;
		
	};

		
	$scope.addStatus=function (){

		var url=host+"item/"+$scope.request_status+"/status";

		
		var received_by="";
		if($scope.status_type==6){
			received_by=$scope.base_receiver;
			
			
		}
		
		var parameter = JSON.stringify({
							item_id:$scope.request_status,
							status_type:$scope.status_type,
							details:$scope.status_details,
							received_by:received_by
						});
	
	
		$http.post(url, parameter).
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			
			
			
			
			$scope.resp=response.data;
			
			var response=$scope.resp;
			
			
			$scope.retrieveItemStatus($scope.request_status);
			
			var url=host+"items/recent/1";
	
	
			$http.get(url)
			.then(function(resp, status, headers, config) {
				// this callback will be called asynchronously
				// when the response is available
				var response=resp.data;
							
				//if login is illegal
				
				
				$scope.items = response;
				//console.log(data);
			});		
			
			
//			$scope.message="Item successfully recorded.";
			
//			window.open('admin_dashboard.html','_SELF');
			
			
			
			
			
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});
	
	
	
	}		
		
	$scope.logout=function (){
		$http.get(host+"logout").
		then(function(response, status, headers, config) {
			// this callback will be called asynchronously
			// when the response is available
			window.open("index.html","_SELF");
			
			
			
			
		});
	
	}			
		
	$scope.image = "";

	$scope.imageUpload = function(event){
		 var files = event.target.files; //FileList object


		 var file = files[0];
		
		 $scope.img=files[0];
		
		 var reader = new FileReader();
		 reader.onload = $scope.imageIsLoaded; 
		 reader.readAsDataURL(file);
		 
		 
	}

	$scope.imageIsLoaded = function(e){
		$scope.$apply(function() {
			$scope.image=e.target.result;
		});
	}	
		
		
		
		
		
		//		.error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
//		});	
	
//	$http.get(url).then(function(response, status, headers, config) { $scope.requests = response.data; });
	
	
//	.error(function(data, status, headers, config) { $scope.error=data.data; });	

				// called asynchronously if an error occurs
				// or server returns response with an error status.

	/*
	$scope.listUserRequests=function (){
		var request_id=$scope.request_id;
		$http.get("http://localhost/lnf_api/requests/userRequests/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	
	
	};
	$scope.retrieveItem=function (){
		var request_id=$scope.request_id;
		$http.get("http://localhost/lnf_api/request/"+request_id+"/?api_token="+token).then(function(response) {$scope.requests = response.requests;});	
	};
	
	*/

}]);

