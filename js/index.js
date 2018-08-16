var app = angular.module("app", ["ngMaterial", "ui.bootstrap", "ngAnimate"]);

app.controller("MyController", function($scope, $mdToast) {
  
  $scope.autoCompleteArr = ["test", "test2", "test3", "test4"];
  $scope.getMatch = function(searchText) {
    return $scope.autoCompleteArr.filter( (e) => (e.indexOf(searchText) > -1) ? true : false);
  }
  
  
  $scope.ngIfTest = true;
  $scope.ngIfTest2 = true;
  $scope.ngIfTest3 = true;
  $scope.isCollapsed = false;
  $scope.chipNames = ["testing", "testing again"];
  $scope.input = {
    name: "Chris Mayer"
  };
  $scope.openToast = function(message) {
    $mdToast.show($mdToast.simple()
                  .textContent(message)
                  .hideDelay(10000)
                  .position("bottom left")
                  .action("X")
                  .highlightAction(true)
                  .capsule(true)
                  .parent(document.body)
    );
  };
  
  $scope.newToast = function(message) {
    $mdToast.show(
      $mdToast
        .simple()
        .textContent(message)
        .hideDelay(10000)
        .position("top right")
        .action("X")
        .highlightAction(true)
        .capsule(true)
        .parent(document.getElementById('box') )
    );
  };
  //testing different toast
  $scope.showHideToast = function(message) { 
    $mdToast.show({
      template  : `<md-toast><span>${message}</span><md-button ng-click="closeToast()">X</md-button></md-toast>`,
      hideDelay : 0,
      position  : 'bottom left',
      controller: 'toastController',
      // parent    : angular.element(document.getElementsByTagName("BODY")[0]),
      // parent    : angular.element(document.getElementById('box') )
    });                    
    console.log("showHideToast here!")
  }          
  $scope.addWarningClass = function() {
    var myEl = angular.element( document.querySelector( '#danger' ) );
    myEl.attr('aria-hidden', 'false').show();
  }
});


app.controller('toastController', function($scope, $mdToast){
  $scope.closeToast = function(){
    $mdToast.hide();  
  }
  
})


app.directive("toast", [function() {
    return {
      template: ` <div layout="column" layout-align="center center">
                  <md-input-container>
                    <label>Last name</label>
                    <input></input>
                  </md-input-container>
                  <div>
                    <md-button class="md-raised" ng-click="newToast('from inside template')">
                      Open toast in directive inside div below
                    </md-button>
                  </div>
                </div>`,
      restrict: "E"
    }
  }
      
                        
                        
]);