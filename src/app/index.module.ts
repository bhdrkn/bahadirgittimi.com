/// <reference path="../../.tmp/typings/tsd.d.ts" />

/// <reference path="index.route.ts" />

/// <reference path="index.config.ts" />
/// <reference path="index.run.ts" />
/// <reference path="main/main.controller.ts" />

module bahadirgittimi {
  'use strict';
  
  angular.module('bahadirgittimi', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ngRoute', 'ngMaterial'])
    .config(Config)
    .config(RouterConfig)
    .run(RunBlock)
    .controller('MainController', MainController);
}
