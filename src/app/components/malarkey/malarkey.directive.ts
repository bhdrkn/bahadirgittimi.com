module bahadirgittimi {
  'use strict';

  interface IProjectsScope extends ng.IScope {
    extraValues: any[];
  }

  /** @ngInject */
  export function acmeMalarkey(malarkey: any): ng.IDirective {

    return {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };

  }

  function linkFunc(scope: IProjectsScope, el: JQuery, attr: any, vm: MalarkeyController) {
    var watcher;
    var typist = malarkey(el[0], {
      typeSpeed: 40,
      deleteSpeed: 40,
      pauseDelay: 800,
      loop: true,
      postfix: ' '
    });

    el.addClass('acme-malarkey');

    angular.forEach(scope.extraValues, function(value: string) {
      typist.type(value).pause().delete();
    });

    watcher = scope.$watch('vm.contributors', function(current: IContributor, original: IContributor) {
      angular.forEach(vm.contributors, function(contributor: IContributor) {
        typist.type(contributor.login).pause().delete();
      });
    });

    scope.$on('$destroy', function () {
      watcher();
    });
  }

  interface IContributor {
    id: number;
    login: string;
  }

  /** @ngInject */
  class MalarkeyController {
    public contributors: any[];

    private $log: ng.ILogService;
    private githubContributor: GithubContributor;

    constructor($log: ng.ILogService, githubContributor: GithubContributor) {
      this.contributors = [];

      this.$log = $log;
      this.githubContributor = githubContributor;

      this.activate();
    }

    activate() {
      return this.getContributors()
        .then(() => {
          this.$log.info('Activated Contributors View');
        });
    }

    getContributors() {
      return this.githubContributor.getContributors(10)
        .then((data: any) => {
          this.contributors = data;
          return this.contributors;
        });
    }
  }

}
