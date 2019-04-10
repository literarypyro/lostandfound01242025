
var requestModule=angular.module('requestApp', ['datatables', 'ngResource']);


requestModule.controller("requestController",['$compile', '$scope',"$http", '$resource', 'DTOptionsBuilder', 'DTColumnBuilder',function RowSelectCtrl($compile, $scope,$http, $resource, DTOptionsBuilder, DTColumnBuilder) {

//.controller('RowSelectCtrl', ['$compile', '$scope', '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', function RowSelectCtrl($compile, $scope, $resource, DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.selected = {};
    vm.selectAll = false;
    vm.toggleAll = toggleAll;
    vm.toggleOne = toggleOne;

    var titleHtml = '<input ng-model="showCase.selectAll" ng-click="showCase.toggleAll(showCase.selectAll, showCase.selected)" type="checkbox">';

    vm.dtOptions = DTOptionsBuilder.fromSource('data.json')
        .withOption('createdRow', function(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        })
        .withOption('headerCallback', function(header) {
            if (!vm.headerCompiled) {
                // Use this headerCompiled field to only compile header once
                vm.headerCompiled = true;
                $compile(angular.element(header).contents())($scope);
            }
        })
        .withPaginationType('full_numbers');
    vm.dtColumns = [
        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input ng-model="showCase.selected[' + data.id + ']" ng-click="showCase.toggleOne(showCase.selected)" type="checkbox">';
            }),
        DTColumnBuilder.newColumn('id').withTitle('ID'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name').notVisible()
    ];

    function toggleAll (selectAll, selectedItems) {
        for (var id in selectedItems) {
            if (selectedItems.hasOwnProperty(id)) {
                selectedItems[id] = selectAll;
            }
        }
    }
    function toggleOne (selectedItems) {
        for (var id in selectedItems) {
            if (selectedItems.hasOwnProperty(id)) {
                if(!selectedItems[id]) {
                    vm.selectAll = false;
                    return;
                }
            }
        }
        vm.selectAll = true;
    }

/*
	$scope.makeRequest=function (){
			 
			 var data = $.param({
//                fName: $scope.firstName,
//                lName: $scope.lastName
            });
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

            $http.post('/ServerRequest/PostDataResponse', data, config)
            .success(function (data, status, headers, config) {
                $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {
                $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
	};
	*/
	$scope.listUserRequests=function (){
	
		var user_id=$scope.user_id;
		$http.get("http://localhost/lnf_api/lnf_api/requests/userRequests/"+user_id).success(function(response) {$scope.requests = response.requests;});	
	
	};
	$scope.retrieveItem=function (){
		
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/lnf_api/request/"+item_id).success(function(response) {$scope.requests = response.requests;});	

	};
	
	$scope.retrieveRequestStatus=function (){
		
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/lnf_api/request/"+item_id+"/status").success(function(response) {$scope.requests = response.requests;});	

	};

	$http.get("http://localhost/lnf_api/lnf_api/requests/userRequests/1").then(function(response) {$scope.requests = response.data; });	
	
	
}]);


/*

app.config(['$routeProvider', 
  function($routeProvider){
    $routeProvider
      .when('/', {
        template: '<h1>This is home</h1>'
      })
      .when('/about', {
        template: '<h1>This is about</h1>'
      })
      .otherwise({
        redirectTo: '/'
      })
  }
]);



*/


/*
	
}]);
*/
var itemModule=angular.module("itemApp",[]);
itemModule.controller("itemController",["$scope","$http",function($scope,$http){

	$scope.add="Test";

	$scope.test=function (){
		alert("A");
	};
	
	$scope.searchItem=function (){
		var search_type=$scope.search_type;
		var search_term=$scope.search_term;


		$http.get("http://localhost/lnf_api/lnf_api/items/"+search_type+"/"+search_term)
		.success(function(response) { 
			$scope.items = response; 
			
			var items=$scope.items;
			var groupedItems={};
			
			items.forEach(function(item){
			  if (!(item.category_id in groupedItems)) {
				groupedItems[item.category_id] = [];
				groupedItems[item.category_id]["tally"]++;
				
			  }
			  else {
				groupedItems[item.category_id]["tally"]++;
			  }			  
			  groupedItems[item.category_id].push(item);
			  




			  
			});			
			  
		  $scope.groupedItems=groupedItems;
			
			
			
			
		});	

	
			 
	};
	
		
	$scope.retrieveItem=function (){
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/lnf_api/item/"+item_id).success(function(response) {$scope.items = response.items;});	


	};
	$scope.retrieveItemStatus=function (){
		var item_id=$scope.item_id;
		$http.get("http://localhost/lnf_api/lnf_api/item/"+item_id+"/status").success(function(response) {$scope.requests = response.requests;});	


	};
		
}]);
