$(document).ready(function () {
    if (navigator.msMaxTouchPoints) {

        $('#slider').addClass('ms-touch');

        $('#slider').on('scroll', function () {
            $('.slide-image').css('transform', 'translate3d(-' + (100 - $(this).scrollLeft() / 6) + 'px,0,0)');
        });

    } else {

        var slider = {

            el: {
                slider: $("#slider"),
                holder: $(".holder"),
                imgSlide: $(".slide-image")
            },

            slideWidth: $('#slider').width(),
            touchstartx: undefined,
            touchmovex: undefined,
            movex: undefined,
            index: 0,
            longTouch: undefined,

            init: function () {
                this.bindUIEvents();
            },

            bindUIEvents: function () {

                this.el.holder.on("touchstart", function (event) {
                    slider.start(event);
                });

                this.el.holder.on("touchmove", function (event) {
                    slider.move(event);
                });

                this.el.holder.on("touchend", function (event) {
                    slider.end(event);
                });

            },

            start: function (event) {
                // Test for flick.
                this.longTouch = false;
                setTimeout(function () {
                    window.slider.longTouch = true;
                }, 250);

                // Get the original touch position.
                this.touchstartx = event.originalEvent.touches[0].pageX;

                // The movement gets all janky if there's a transition on the elements.
                $('.animate').removeClass('animate');
            },

            move: function (event) {
                // Continuously return touch position.
                this.touchmovex = event.originalEvent.touches[0].pageX;
                // Calculate distance to translate holder.
                this.movex = this.index * this.slideWidth + (this.touchstartx - this.touchmovex);
                // Defines the speed the images should move at.
                console.log(this.movex);
                var panx = 3000 - this.movex / 2;
                if (this.movex < 600) { // Makes the holder stop moving when there is no more content.
                    this.el.holder.css('transform', 'translate3d(-' + this.movex + 'px,0,0)');
                }
                if (panx < 100) { // Corrects an edge-case problem where the background image moves without the container moving.
                    this.el.imgSlide.css('transform', 'translate3d(-' + panx + 'px,0,0)');
                }
            },

            end: function (event) {
                // Calculate the distance swiped.
                var absMove = Math.abs(this.index * this.slideWidth - this.movex);
                // Calculate the index. All other calculations are based on the index.
                if (absMove > this.slideWidth / 3 || this.longTouch === false) {
                    if (this.movex > this.index * this.slideWidth && this.index < 3) {
                        this.index++;
                    } else if (this.movex < this.index * this.slideWidth && this.index > 0) {
                        this.index--;
                    }
                }
                // Move and animate the elements.
                this.el.holder.addClass('animate').css('transform', 'translate3d(-' + this.index * this.slideWidth + 'px,0,0)');
                this.el.imgSlide.addClass('animate').css('transform', 'translate3d(-' + 100 - this.index * 50 + 'px,0,0)');

            }

        };

        slider.init();
    }
});


var myIndex = 0;
setTimeout(carousel(), 3000);

function carousel() {
    setTimeout(function () {
        var i;
        var x = document.getElementsByClassName("slide-image");
        for (i = 0; i < x.length; i++) {
            // x[i].style.display = "none";  

        }
        myIndex++;
        if (myIndex > x.length) {
            myIndex = 1
        }
        // x[myIndex-1].style.display = "block";  
        switch (myIndex) {
            case 0:
            setTimeout(function(){
                translate3d(0);
            }, 5000);
                
                break;
            case 1:
                translate3d(-425);
                break;
            case 2:
                translate3d(-850);
                break;
            case 3:
                translate3d(-1270);
                break;
            case 4:
                translate3d(0);
                break;
        }

        setTimeout(carousel, 2000); // Change image every 2 seconds  }, 3000);
    }, 10000);
}

function translate3d(move) {
    setTimeout(function () {
        if (move == 0) {
            $('#slider .holder').css({'transform': 'translate3d(0px, 0px, 0px)'});
        } else {
            $('#slider .holder').css({'transform': 'translate3d(' + move + 'px, 0px, 0px)'});
        }
    }, 200);
}
