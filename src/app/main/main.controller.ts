module bahadirgittimi {
  'use strict';

  export class MainController {
    public awesomeThings: ITecThing[];
    public webDevTec: WebDevTecService;
    public classAnimation: string;

    /* @ngInject */
    constructor ($timeout: ng.ITimeoutService, webDevTec: WebDevTecService, toastr: Toastr) {
      this.awesomeThings = new Array();
      this.webDevTec = webDevTec;
      this.classAnimation = '';

      this.activate($timeout);
    }

    activate($timeout: ng.ITimeoutService) {
      this.getWebDevTec();

      var self = this;

      $timeout(function() {
        self.classAnimation = 'rubberBand';
      }, 4000);
    }

    showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      this.classAnimation = '';
    }

    getWebDevTec() {
      this.awesomeThings = this.webDevTec.tec;
    }
  }
}
