
var requestModule=angular.module('requestApp', ['datatables', 'ngResource']);


requestModule.controller("requestController",['$compile', '$scope',"$http", '$resource', 'DTOptionsBuilder', 'DTColumnBuilder', 'ngDialog',function RowSelectCtrl($compile, $scope,$http, $resource, DTOptionsBuilder, DTColumnBuilder, ngDialog) {

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

          $scope.getDetails = function () {
			  
			  
			  alert("A");
			  
            $scope.value = true;

            ngDialog.open({
              template: 'requestDetails',
              className: 'ngdialog-theme-default',
              scope: $scope
            });
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


/**




          $scope.directivePreCloseCallback = function (value) {
            if(confirm('Close it? MainCtrl.Directive. (Value = ' + value + ')')) {
              return true;
            }
            return false;
          };

          $scope.preCloseCallbackOnScope = function (value) {
            if(confirm('Close it? MainCtrl.OnScope (Value = ' + value + ')')) {
              return true;
            }
            return false;
          };

          $scope.open = function () {
            ngDialog.open({ template: 'firstDialogId', controller: 'InsideCtrl', data: {foo: 'some data'} });
          };

          $scope.openDefault = function () {
            ngDialog.open({
              template: 'firstDialogId',
              controller: 'InsideCtrl',
              className: 'ngdialog-theme-default'
            });
          };

          $scope.openDefaultWithPreCloseCallbackInlined = function () {
            ngDialog.open({
              template: 'firstDialogId',
              controller: 'InsideCtrl',
              className: 'ngdialog-theme-default',
              preCloseCallback: function(value) {
                if (confirm('Close it?  (Value = ' + value + ')')) {
                  return true;
                }
                return false;
              }
            });
          };

          $scope.openConfirm = function () {
            ngDialog.openConfirm({
              template: 'modalDialogId',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
              console.log('Modal promise resolved. Value: ', value);
            }, function (reason) {
              console.log('Modal promise rejected. Reason: ', reason);
            });
          };

          $scope.openConfirmWithPreCloseCallbackOnScope = function () {
            ngDialog.openConfirm({
              template: 'modalDialogId',
              className: 'ngdialog-theme-default',
              preCloseCallback: 'preCloseCallbackOnScope',
              scope: $scope
            }).then(function (value) {
              console.log('Modal promise resolved. Value: ', value);
            }, function (reason) {
              console.log('Modal promise rejected. Reason: ', reason);
            });
          };

          $scope.openConfirmWithPreCloseCallbackInlinedWithNestedConfirm = function () {
            ngDialog.openConfirm({
              template: 'dialogWithNestedConfirmDialogId',
              className: 'ngdialog-theme-default',
              preCloseCallback: function(/*value*/
			  
			  /**
			  ) {

                var nestedConfirmDialog = ngDialog.openConfirm({
                  template:
                      '<p>Are you sure you want to close the parent dialog?</p>' +
                      '<div>' +
                        '<button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No' +
                        '<button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes' +
                      '</button></div>',
                  plain: true,
                  className: 'ngdialog-theme-default'
                });

                return nestedConfirmDialog;
              },
              scope: $scope
            })
            .then(function(value){
              console.log('resolved:' + value);
              // Perform the save here
            }, function(value){
              console.log('rejected:' + value);

            });
          };

          $scope.openInlineController = function () {
            $rootScope.theme = 'ngdialog-theme-default';

            ngDialog.open({
              template: 'withInlineController',
              controller: ['$scope', '$timeout', function ($scope, $timeout) {
                var counter = 0;
                var timeout;
                function count() {
                  $scope.exampleExternalData = 'Counter ' + (counter++);
                  timeout = $timeout(count, 450);
                }
                count();
                $scope.$on('$destroy', function () {
                  $timeout.cancel(timeout);
                });
              }],
              className: 'ngdialog-theme-default'
            });
          };

          $scope.openTemplate = function () {
            $scope.value = true;

            ngDialog.open({
              template: $scope.tpl.path,
              className: 'ngdialog-theme-default',
              scope: $scope
            });
          };

          $scope.openTemplateNoCache = function () {
            $scope.value = true;

            ngDialog.open({
              template: $scope.tpl.path,
              className: 'ngdialog-theme-default',
              scope: $scope,
              cache: false
            });
          };

          $scope.openTimed = function () {
            var dialog = ngDialog.open({
              template: '<p>Just passing through!</p>',
              plain: true,
              closeByDocument: false,
              closeByEscape: false
            });
            setTimeout(function () {
              dialog.close();
            }, 2000);
          };

          $scope.openNotify = function () {
            var dialog = ngDialog.open({
              template:
                '<p>You can do whatever you want when I close, however that happens.</p>' +
                '<div><button type="button" class="btn btn-primary" ng-click="closeThisDialog(1)">Close Me</button></div>',
              plain: true
            });
            dialog.closePromise.then(function (data) {
              console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
            });
          };

          $scope.openWithoutOverlay = function () {
            ngDialog.open({
              template: '<h2>Notice that there is no overlay!</h2>',
              className: 'ngdialog-theme-default',
              plain: true,
              overlay: false
            });
          };

          $rootScope.$on('ngDialog.opened', function (e, $dialog) {
            console.log('ngDialog opened: ' + $dialog.attr('id'));
          });

          $rootScope.$on('ngDialog.closed', function (e, $dialog) {
            console.log('ngDialog closed: ' + $dialog.attr('id'));
          });

          $rootScope.$on('ngDialog.closing', function (e, $dialog) {
            console.log('ngDialog closing: ' + $dialog.attr('id'));
          });
        }






















*/

	
}]);



