angular.module('galleryApp', [])
    .controller('GalleryController', function($scope) {
        $scope.gallery = [{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'},{id:'6'},{id:'7'},{id:'8'},{id:'9'},{id:'10'},{id:'11'},{id:'12'},{id:'13'},{id:'14'},{id:'15'},{id:'16'},{id:'17'},{id:'18'},{id:'19'},{id:'20'},{id:'21'},{id:'22'},{id:'23'},{id:'24'},{id:'25'}];

    }).directive('galleryScroll', [function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                var scrollToLeft = function(e){
                    var moveTo = items[0].getBoundingClientRect().left + 300 + 'px';
                    items[0].style.transition = 'all 1s ease-out';
                    items[0].style.transform = 'translateX('+moveTo+')';
                };
                var scrollToRight = function(e){
                    var moveTo = items[0].getBoundingClientRect().left - 300 + 'px';
                    items[0].style.transition = 'all 1s ease-out';
                    items[0].style.transform = 'translateX('+moveTo+')';
                };
                var items = angular.element(document.querySelector('.items'));
                var right = angular.element(document.querySelector('.right'));
                var left = angular.element(document.querySelector('.left'));
                right.bind('click', scrollToRight);
                left.bind('click', scrollToLeft);
            }
        }
    }]);