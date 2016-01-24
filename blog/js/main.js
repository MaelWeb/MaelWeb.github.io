(function($) {
    $.fn.backTop = function() {
        var $backBtn = $(this),
            b = document.body,
            d = document.documentElement;

        $backBtn.css("display", "none");
        window.onscroll = show;
        $backBtn.click(function() {
            $backBtn.fadeOut(500);
            window.onscroll = null;
            var setInt = setInterval(function() {
                b.scrollTop -= Math.ceil((b.scrollTop + d.scrollTop) * 0.1);
                d.scrollTop -= Math.ceil((b.scrollTop + d.scrollTop) * 0.1);
                if ((b.scrollTop + d.scrollTop) == 0) {
                    clearInterval(setInt, window.onscroll = show);
                }
            }, 30);
        });

        function show() {
            var scroll = b.scrollTop + d.scrollTop;
            if (scroll > 100) {
                $backBtn.fadeIn(1000);
            } else {
                $backBtn.fadeOut(1000);
            }
        }
    };
    // To top button
    $("#back-to-top").backTop();

    // 导航栏自动隐藏／显示
    var initScroll = $(window).scrollTop(),
        navHeight = $('#header-inner').outerHeight();

    $(window).scroll(function() {
        var scrolling = $(window).scrollTop();
        if (scrolling > navHeight * 2) {
            $('#header-inner').css("top", "-" + navHeight);
        } else {
            $('#header-inner').css("top", "0");
        }

        if (scrolling > initScroll) {
            $('#header-inner').css("top", "-" + navHeight + "px");
        } else {
            $('#header-inner').css("top", "0px");
        }
        if (scrolling === navHeight) {
            $('#header-inner').css("top", "0px");
        }

        initScroll = $(window).scrollTop();
    });

    // Nav bar toggle
    $('#main-nav-toggle').on('click', function() {
        $('.nav-container-inner').slideToggle();
    });

    // Caption
    $('.article-entry').each(function(i) {
        $(this).find('img').each(function() {
            if ($(this).parent().hasClass('fancybox')) {
                return;
            }
            var alt = this.alt;
            if (alt) {
                $(this).after('<span class="caption">' + alt + '</span>');
            }

            $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
        });

        $(this).find('.fancybox').each(function() {
            $(this).attr('rel', 'article' + i);
        });
        if ($.fancybox) {
            $('.fancybox').fancybox();
        }
    });

    // Sidebar expend
    $('#sidebar .sidebar-toggle').click(function() {
        if ($('#sidebar').hasClass('expend')) {
            $('#sidebar').removeClass('expend');
        } else {
            $('#sidebar').addClass('expend');
        }
    });


    // Remove extra main nav wrap
    $('.main-nav-list > li').unwrap();

    // Highlight current nav item
    // $('#main-nav > li > .main-nav-list-link').each(function() {
    //     if ($('.page-title-link').length > 0) {
    //         if ($(this).html().toUpperCase() == $('.page-title-link').html().toUpperCase()) {
    //             $(this).addClass('current');
    //         } else if ($(this).attr('href') == $('.page-title-link').attr('data-url')) {
    //             $(this).addClass('current');
    //         }
    //     }
    // });
    $('a[href="/blog"]').addClass('current');

    // add animantion
    $("a[href*=blog]").click(function(event) {
        $(".main-body").addClass('fadeOut');
    });

    // Auto hide main nav menus
    function autoHideMenus() {
        var max_width = $('.nav-container-inner').width() - 10;
        var main_nav_width = $('#main-nav').width();
        var sub_nav_width = $('#sub-nav').width();
        if (main_nav_width + sub_nav_width > max_width) {
            // If more link not exists
            if ($('.main-nav-more').length == 0) {
                $(['<li class="main-nav-list-item top-level-menu main-nav-more">',
                    '<a class="main-nav-list-link" href="javascript:;">More</a>',
                    '<ul class="main-nav-list-child">',
                    '</ul></li>'
                ].join('')).appendTo($('#main-nav'));
                // Bind hover event
                $('.main-nav-more').hover(function() {
                    if ($(window).width() < 480) {
                        return;
                    }
                    $(this).children('.main-nav-list-child').slideDown('fast');
                }, function() {
                    if ($(window).width() < 480) {
                        return;
                    }
                    $(this).children('.main-nav-list-child').slideUp('fast');
                });
            }
            var child_count = $('#main-nav').children().length;
            for (var i = child_count - 2; i >= 0; i--) {
                var element = $('#main-nav').children().eq(i);
                if (main_nav_width + sub_nav_width > max_width) {
                    element.prependTo($('.main-nav-more > ul'));
                    main_nav_width = $('#main-nav').width();
                } else {
                    return;
                }
            }
        }
        // Nav bar is wide enough
        if ($('.main-nav-more').length > 0) {
            $('.main-nav-more > ul').children().appendTo($('#main-nav'));
            $('.main-nav-more').remove();
        }
    }
    autoHideMenus();

    $(window).resize(function() {
        autoHideMenus();
    });

    // Fold second-level menu
    $('.main-nav-list-item').hover(function() {
        if ($(window).width() < 480) {
            return;
        }
        $(this).children('.main-nav-list-child').slideDown('fast');
    }, function() {
        if ($(window).width() < 480) {
            return;
        }
        $(this).children('.main-nav-list-child').slideUp('fast');
    });

    // Add second-level menu mark
    $('.main-nav-list-item').each(function() {
        if ($(this).find('.main-nav-list-child').length > 0) {
            $(this).addClass('top-level-menu');
        }
    });

})(jQuery);
