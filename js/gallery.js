angular.module('galleryApp', [])
    .controller('GalleryController', function($scope) {

        $scope.gallery = [{id:'1'},{id:'2'},{id:'3'},{id:'4'},{id:'5'}];

    }).directive('galleryScroll', [function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                var scrollToLeft = function(e){
                    var moveTo = items[0].getBoundingClientRect().left + 300 + 'px';
                    items[0].style.transition = 'all 300ms ease-out';
                    items[0].style.transform = 'translateX('+moveTo+')';
                };
                var scrollToRight = function(e){
                    var moveTo = items[0].getBoundingClientRect().left - 300 + 'px';
                    items[0].style.transition = 'all 300ms ease-out';
                    items[0].style.transform = 'translateX('+moveTo+')';
                };
                var opacityScrollers = function(event){
                    var mymodelsArrowRightTop = (document.querySelector('.right').getBoundingClientRect().height/2) + document.querySelector('.right').getBoundingClientRect().top,
                        mymodelsArrowRightMiddle = (document.querySelector('.right').getBoundingClientRect().width/2) + document.querySelector('.right').getBoundingClientRect().left,
                        mathForRight = Math.round(Math.sqrt(Math.pow(mymodelsArrowRightTop - event.clientY, 2) +Math.pow(mymodelsArrowRightMiddle - event.clientX, 2))),
                        rightOpacity = 1-(mathForRight/(window.innerHeight));
                    document.getElementsByClassName('right')[0].style.opacity = rightOpacity;
                    //
                    var mymodelsArrowLeftTop = (document.querySelector('.left').getBoundingClientRect().height/2) + document.querySelector('.left').getBoundingClientRect().top,
                        mymodelsArrowLeftMiddle = (document.querySelector('.left').getBoundingClientRect().width/2) + document.querySelector('.left').getBoundingClientRect().left,
                        mathForLeft = Math.round(Math.sqrt(Math.pow(mymodelsArrowLeftTop - event.clientY, 2) +Math.pow(mymodelsArrowLeftMiddle - event.clientX, 2))),
                        leftOpacity = 1-(mathForLeft/(window.innerHeight));
                    document.getElementsByClassName('left')[0].style.opacity = leftOpacity;

                    console.log(document.getElementsByClassName('left')[0]);
                };
                var doc = angular.element(document);
                var items = angular.element(document.querySelector('.items'));
                var right = angular.element(document.querySelector('.right'));
                var left = angular.element(document.querySelector('.left'));
                right.bind('click', scrollToRight);
                left.bind('click', scrollToLeft);
                doc.bind('mouseover', opacityScrollers);




                elem.on('$destroy', function () {
                    right.unbind('click', scrollToRight);
                    left.unbind('click', scrollToLeft);
                    items = right = left = null;
                });

            }
        }
    }]);