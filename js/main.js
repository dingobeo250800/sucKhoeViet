
// add thêm class.container với class .row bên trong ul
$(document).ready(function () {
    $(".hazo-mega-menu >ul").wrapInner('<div class = "row"></div>')
    $(".hazo-mega-menu >ul").wrapInner('<div class = "container"></div>')
})

$(document).ready(function () {
    $(".header-icon__menu").click(function () {
        $(".menu-mobile").addClass('active_mobile');
        $(".overlay").addClass('overlay-block');
    });
    $(".menu-mobile__close").click(function () {
        $(".menu-mobile").removeClass("active_mobile");
        $(".overlay").removeClass('overlay-block');
    });
    $(".overlay").click(function () {
        $(".menu-mobile").removeClass("active_mobile");
        $(".overlay").removeClass('overlay-block');
    });


    $(".menu-mobile ul li.menu-item-has-children>ul").before('<span class="li-rotate"></span>');
    $(".menu-mobile ul li.menu-item-has-children>ul .li-rotate").addClass("rotate");

    $(".menu-mobile ul li.menu-item-has-children>ul>li>ul").before(`<span class="li-plus"></span>`);
    $(".menu-mobile ul li.current-menu-parent.menu-item-has-children>ul>li .li-plus").addClass("clicked");


});
$(document).ready(function () {
    $(".menu-mobile > ul > .menu-item-has-children > ul > li .li-plus").click(function () {
        $(this).toggleClass("sub");
        $(this).next("ul").slideToggle(200);
    })
})
$(document).ready(function () {
    $(".menu-mobile > ul > .menu-item-has-children .li-rotate").click(function () {
        $(this).toggleClass("rotate");
        $(this).next("ul").slideToggle(1000);

    })
})

// animation onScoll
window.addEventListener("scroll", function(){
    var header = document.getElementById("header");
    header.classList.toggle("header-active", window.scrollY > 300);
})

$(document).ready(function () {
    $(".faq ul li >ul").before(`<span class="li-toggle"></span>`);
})
$(document).ready(function () {
    $(".faq ul li .li-toggle").click(function () {
        $(this).next("ul").slideToggle(200);
        $(this).toggleClass("plus");
    })
})

// Cộng trừ số lượng
$(document).ready(function () {
    var btn_number = jQuery;
    var addInput = "#amount";
    var n = 1;

    btn_number(addInput).val(n);
    //On click add 1 to n
    btn_number('.plus_button').on('click', function () {
        btn_number(addInput).val(++n);
    })
    btn_number('.min_button').on('click', function () {
        //If n is bigger or equal to 1 subtract 1 from n
        if (n >= 1) {
            btn_number(addInput).val(--n);
        } else {
            //Otherwise do nothing
        }
    });
})