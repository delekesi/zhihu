var fuwu=angular.module('fuwu',[]);
fuwu.factory('navs',function($http){
	return{
		getNav:function(fn){
			$http.get('php/yinru.php?url=http://news-at.zhihu.com/api/4/themes').success(fn);
		}
	}
})
