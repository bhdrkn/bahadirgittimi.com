/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />
/// <reference path="./components/yesnowtf/yesno.service.ts"/>

module bahadirgittimi {
  'use strict';

  angular.module('bahadirgittimi', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial'])
    .constant('expectedAnswer', 'no')
    .config(Config)
    .config(RouterConfig)
    .run(RunBlock)
    .service('yesNoService', YesNoService)
    .controller('MainController', MainController);
}
