'use strict';

!function() {
    var Customer160x600 = function() {

        function init() {
            var myFT = new FT,
                container = FT.query('#customer-160x600'),
                button = FT.query('#button');

            myFT.applyClickTag(container, 1);
            myFT.applyClickTag(button, 1);
            doAnimations();
        }

        function doAnimations() {
            var duration = 1;

            TweenMax.fromTo('.button-container', duration, {
                x: '-100%',
                opacity: 0
            }, {
                x: '0%',
                opacity: 1,
                ease: Power4.easeOut,
                delay: 8.5
            });

            TweenMax.fromTo('.frame3', duration, {
                x: '-100%',
                opacity: 0
            }, {
                x: '0%',
                opacity: 1,
                ease: Power4.easeOut,
                delay: 8
            });

            TweenMax.fromTo('.frame2', duration, {
                x: '0%',
                opacity: 1
            }, {
                x: '100%',
                opacity: 0,
                ease: Power4.easeOut,
                delay: 8
            });

            TweenMax.fromTo('.frame2', duration, {
                x: '-100%',
                opacity: 0
            }, {
                x: '0%',
                opacity: 1,
                ease: Power4.easeOut,
                delay: 3
            });

            TweenMax.fromTo('.frame1', duration, {
                x: '0%',
                opacity: 1
            }, {
                x: '100%',
                opacity: 0,
                ease: Power4.easeOut,
                delay: 3
            });

            TweenMax.fromTo('.frame1', duration, {
                x: '-100%',
                opacity: 0
            }, {
                x: '0%',
                opacity: 1,
                ease: Power4.easeOut
            });
        }

        return {
            init: init
        };
    }();

    Customer160x600.init();
}();
