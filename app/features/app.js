'use strict';

angular.module('Seed', ['ui.router', 'Core', 'Seed.sectionName','ngAnimate'])
    .config(function ($urlRouterProvider, $stateProvider) {
        //redirect any invalid hash to /home
        $urlRouterProvider.otherwise('/');

        //State example. Some other available options are commented out.
        //More info in https://github.com/angular-ui/ui-router/wiki
        var section = {
            name: 'section',
            // parent: '',
            // abstract: true,
            url: '/section',
            views: {
                'main-view':{
                    template: '<h1>Andres</h1>'
                }
            }
        };
        
        $stateProvider
            .state(section);
    });