! function (e) {
    "use strict";

    $(document).ready(function () {

        $(window).scroll(function () {
            var windowTop = $(window).scrollTop();
            if (windowTop > 0) {
                $(".header").addClass("fixedMenu");
            } else {
                $(".header").removeClass("fixedMenu");
            }
        });
    });
}(jQuery);