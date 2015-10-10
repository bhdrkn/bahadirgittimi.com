module bahadirgittimi {
  'use strict';

  export class RunBlock {
    /** @ngInject */
    constructor($log: ng.ILogService) {
      $log.info('Hello, World');
      $log.debug('runBlock end');
    }

  }
}
