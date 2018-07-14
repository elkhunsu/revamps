            $(function(){
                var open = $('.open-nav'),
                close = $('.close'),
                overlay = $('.overlay'),
                body=$('body') ;
                
                $('#burger-menu').click(function(){
                    overlay.toggle('show');
                    $('#wrapper').toggleClass('toggled');
                    $(this).toggleClass('open');
                    body.toggleClass('site-nav-transition site-nav-drawer-open');
                    $('#main').toggleClass('open');
                    $('.main-navigation').toggleClass('open');
                    $('#sidebar-wrapper').toggleClass('open');
                    $('.content-main').toggleClass('open');
                });
                $('.site-nav-overlay').click(function(){
                    body.removeClass('site-nav-drawer-open site-nav-transition');
                    body.removeClass("site-nav-transition");
                });
                
                /* back button notif */
                $('.back-button').click(function(){
                    $('.notif-overlay').css('display', 'none');
                    $('.user-overlay').css('display', 'none');
                    $('.content-main').show();
                    $('body').removeClass('body-overflow-no-scroll');
                })
                
                $('.notif-badge').click(function(){
                    $('.notif-overlay').css('display', 'block');
                    $('body').addClass('body-overflow-no-scroll');
                });
                
                $('.users-sign').click(function(){
                    $('.user-overlay').css('display', 'block');
                    $('.content-main').hide();
                    $('body').addClass('body-overflow-no-scroll');
                })
                
                $('#notif-activity').click(function(){
                    setTimeout(function(){
                        $('#notif-activity_num.badge').removeClass('alert');
                        $('#notif-activity_num').text("");
                    },250);
                })
                
                /* dropdown */
                $(".dropdown").click(function() {
                        $('span', this).toggleClass("fa-angle-down fa-angle-up");                
                });
                
                /* start notif */
                $('.button-badge').click(function(){
                    $('#notif-count.badge').removeClass('alert');
                    $('#notif-count').text("");
                });
                
                function alertNotif(x){
                    $('#notif-count.badge').addClass('alert');
                    if(x == "NaN" || x == ""){
                        var x = 1;
                    } else {
                        var x = parseInt(x)+1;
                    } 
                    if(x >= 99){
                        var x = "99+";
                    } 
                    $('#notif-count').text(x);
                    $('#putar-notif .putar-badge').text(x);
                }
                
                $(window).scroll(function() {
                    var scroll = $(window).scrollTop();
                    var header = $('.nav-content');
                    if (scroll >= 100) {
                        header.addClass("scroll");
                    } else {
                        header.removeClass("scroll");
                    }
                });
                setInterval(function(){
                        var x = $('#notif-count').text();
                        alertNotif(x);
                },5000);
                
                setInterval(function(){
                        var y = $('#putar-notif .putar-badge').text();
                        alertNotif(y);
                },6000);
            });