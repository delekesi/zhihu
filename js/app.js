var app=angular.module('app',['ctrls','diractives','fuwu','ngRoute','ngSanitize']);
app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'tmlp/index-list.html',
		controller:'newM'
	}).when('/show/:id',{
		templateUrl:'tmlp/show.html',
		controller:'show'
	}).when('/theme/:id',{
		templateUrl:'tmlp/theme-list.html',
		controller:'theme'
	})
})