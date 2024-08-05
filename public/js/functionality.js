$(window).on("load", function(event) {
    $("h1.heading").addClass("heading-animation");
    $("div.post").addClass("post-animation");  
});

$(window).on("unload", function(event) {
    $("h1.heading").removeClass("heading-animation");
    $("div.post").removeClass("post-animation");
});

console.log($(window).scrollTop());
console.log($("footer").scrollTop());
console.log($(window).height());
$(window).on("scroll", function () {
    console.log($("footer").offset().top + $("footer").height());
});

function isScrolledInView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

console.log(isScrolledInView($(".heading")));

$(window).on("scroll", function() {
    if(isScrolledInView($("footer"))) {
        $("footer").addClass("post-animation");
    }
});

$(window).on("scroll", function() {
    if (!isScrolledInView($("ul.header-links"))) {
        $("a.post-link-btn button").fadeIn(1, function () {
            $("a.post-link-btn button").addClass("position-fix");
        });
    } else if (isScrolledInView($("ul.header-links"))) {
        $("a.post-link-btn button").removeClass("position-fix").fadeOut();
    }
});

$(window).on("scroll", function() {
    if (!isScrolledInView($("h1.heading"))) {
        $("button.btt").fadeIn(1, function () {
            $("button.btt").addClass("back-to-top-btn");
        });
    } else if (isScrolledInView($("h1.heading"))) {
        $("button.btt").removeClass("back-to-top-btn").fadeOut();
    }
});
console.log(isScrolledInView($("footer")));