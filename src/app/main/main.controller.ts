module bahadirgittimi {
  'use strict';

  export class MainController {
    public awesomeThings: string[];
    public mdSidenav;

    /* @ngInject */
    constructor ($mdSidenav : angular.material.ISidenavService) {
      this.awesomeThings = new Array();
      this.mdSidenav = $mdSidenav;
    }

    toggleSidenav(menuId : string){
      var sideNavObj : angular.material.ISidenavObject = this.mdSidenav(menuId);
      sideNavObj.toggle();
    }

  }
}
