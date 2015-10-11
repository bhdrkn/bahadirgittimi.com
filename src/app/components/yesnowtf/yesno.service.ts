module bahadirgittimi {
  'use strict';

  export class YesNoService {
    public apiHost: string = 'http://yesno.wtf/api';

    private $log: ng.ILogService;
    private $http: ng.IHttpService;

    /** @ngInject */
    constructor($log: ng.ILogService, $http: ng.IHttpService) {
      this.$log = $log;
      this.$http = $http;
    }

    getGif(expectedAnswer: string = 'no') {
      return this.$http.get(this.apiHost + '?force=' + expectedAnswer)
        .then((response: any) => {
          return response.data;
        })
        .catch((error: any) => {
          this.$log.error('XHR Failed for getContributors.\n', error.data);
        });
    }
  }
}
