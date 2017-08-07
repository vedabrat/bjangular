 (function() {
     function seekBar($document) {
		 return {
         	 templateUrl: '/templates/directives/seek_bar.html',
	         replace: true,
	         restrict: 'E',
	         scope: { },
	         link: function(scope, element, attributes) {
	             // directive logic to return
	         }
     };
	 scope.trackThumb = function() {
	     $document.bind('mousemove.thumb', function(event) {
	         var percent = calculatePercent(seekBar, event);
	         scope.$apply(function() {
	             scope.value = percent * scope.max;
	         });
	     });
	 
	     $document.bind('mouseup.thumb', function() {
	         $document.unbind('mousemove.thumb');
	         $document.unbind('mouseup.thumb');
	     });
	 };


     }
 
     angular
         .module('blocJams')
 	     .directive('seekBar', ['$document', seekBar]);
 })();
