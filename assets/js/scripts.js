function searchbarResize() {
    if($(window).width() > 768 && $(window).width() < 1200) {
        $('.searchbar').css('width', '75%');
    }
    else {
        $('.searchbar').css('width','90%');
    }
}

$(document).ready(function () {

    setTimeout(function() {    
        $('.preload-bg').fadeOut(500);
    }, 200);

    searchbarResize();
    $(window).resize(function() {
        searchbarResize();
    })

    //Sign in & sign up modal pop up
    $("#signinlink").click(function (e) { 
        $('.signup-login').removeClass("right-panel-active");    
    });
    $("#signuplink").click(function (e) { 
        $('.signup-login').addClass("right-panel-active");          
    });

    $("#signUp").click(function (e) { 
        $('.signup-login').addClass("right-panel-active");
    });
    $("#signIn").click(function (e) { 
        $('.signup-login').removeClass("right-panel-active");
    });
    if($(window).width() < 1200) {
        $('.leftside-carousel-inner').append('<div class="carousel-item"><img src="./img/ads3.jpg" class="d-block w-100 rounded" alt="..."></div><div class="carousel-item"><img src="./img/ads4.jpg" class="d-block w-100 rounded" alt="..."></div>');
    }
    else {
        $('.leftside-carousel-inner').html(
            `<div class="carousel-item active">
                <img src="./img/ads1.jpg" class="d-block w-100 rounded" alt="...">
            </div>
            <div class="carousel-item">
                <img src="./img/ads2.jpg" class="d-block w-100 rounded" alt="...">
            </div>`);
    }

    $(document).scroll(function () {
        if($(document).scrollTop() > 50) {
            $(".navbar .topnav").removeClass("py-3");
        }
        if($(document).scrollTop() === 0){
            $(".navbar .topnav").addClass("py-3");

        }
    });
});
$(window).resize(function () { 
    if($(window).width() < 1200) {
        $('.leftside-carousel-inner').append(
            `<div class="carousel-item">
                <img src="./img/ads3.jpg" class="d-block w-100 rounded" alt="...">
            </div>
            <div class="carousel-item">
                <img src="./img/ads4.jpg" class="d-block w-100 rounded" alt="...">
            </div>`);
    }
    else {
        $('.leftside-carousel-inner').html(
            `<div class="carousel-item active">
                <img src="./img/ads1.jpg" class="d-block w-100 rounded" alt="...">
            </div>
            <div class="carousel-item">
                <img src="./img/ads2.jpg" class="d-block w-100 rounded" alt="...">
            </div>`);
    }
});

//This function calculate the total of items in customer's cart
let cartItems = 0;

function countCart() {
    cartItems = 0;
    for(const product in itemList) {
        if(window.localStorage.getItem(product) > 0) {
            cartItems += parseInt(window.localStorage.getItem(product));
        }
    }
}

countCart();
//Set badge
$(".cartItems").text(cartItems);

// Add to cart
function addCart(code) {
    $('#liveToast').stop(true, true);
    var currentValue = parseInt(window.localStorage.getItem(code))
    if(window.localStorage.getItem(code) == null) {
        window.localStorage.setItem(code, 1)
        $('.toast-body').html(`Đã thêm ${itemList[code].name} vào giỏ hàng. <br>Số lượng hiện tại là 1.`);
    }
    else{
        window.localStorage.setItem(code, 1+currentValue)
        $('.toast-body').html(`Đã thêm ${itemList[code].name} vào giỏ hàng. <br>Số lượng hiện tại là ${window.localStorage.getItem(code)}.`);
    }

    //Update badge
    countCart();
    $(".cartItems").text(cartItems);

    $('#liveToast').fadeIn();
    $(".cart-icon i").css("transform", "translate(0, -5px)");
    $(".cart-icon i").css("font-size", "35px");
    $(".cart-icon i").css("transition", ".25s linear");
    setTimeout(function() {
        $(".cart-icon i").css("font-size", "22px");
        $(".cart-icon i").css("transition", ".15s linear");
        $(".cart-icon i").css("transform", "none");
    },250)
    setTimeout(function(){$('#liveToast').fadeOut()}, 3000);
}

$(window).resize(function() {
    if($(window).width() > 991.98) {
        $(".basket").css("min-height","500px");
    }
    else {
        $(".basket").css("min-height","0px");
    }
})
