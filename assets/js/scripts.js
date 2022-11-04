function searchbarResize() {
    if($(window).width() > 768 && $(window).width() < 1200) {
        $('.searchbar').css('width', '75%');
    }
    else {
        $('.searchbar').css('width','90%');
    }
}

$(document).ready(function () {
    $('.nav-item.dropdown').hover(function () {
        if($(window).width() > 991.98) $('.dropdown-menu').css('opacity', 0).slideDown(300).animate({ opacity: 1 }, { queue: false, duration: 300 });   
        }, function () {
        if($(window).width() > 991.98) $('.dropdown-menu').hide();
        }
    );

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
        $('.leftside-carousel-inner').append('<div class="carousel-item"><img src="/assets/img/pic3.jpg" class="d-block w-100 rounded" alt="..."></div><div class="carousel-item"><img src="/assets/img/pic4.jpg" class="d-block w-100 rounded" alt="..."></div>');
    }
    else {
        $('.leftside-carousel-inner').html(
            `<div class="carousel-item active">
                <img src="/assets/img/pic1.jpg" class="d-block w-100 rounded" alt="...">
            </div>
            <div class="carousel-item">
                <img src="/assets/img/pic2.jpg" class="d-block w-100 rounded" alt="...">
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

    $(".card-footer").prepend('<a title="Thêm yêu thích" class="pe-2 heart-icon heart-icon-home"><i class="fa-regular fa-heart"></i></a>');
    
    let wishlist = $(".heart-icon-home");

    heartColor(wishlist,"home");
    for(let i = 0; i < wishlist.length; i++) {
        $(wishlist[i]).click(function() {
            if(localStorage.getItem(`wishHome${i}`) == 0 || localStorage.getItem(`wishHome${i}`) == null)
                localStorage.setItem(`wishHome${i}`, 1);
            else
                localStorage.setItem(`wishHome${i}`, 0);
            heartColor(wishlist, "home");
        })
    }
});
$(window).resize(function () { 
    if($(window).width() < 1200) {
        $('.leftside-carousel-inner').append(
            `<div class="carousel-item">
                <img src="/assets/img/pic3.jpg" class="d-block w-100 rounded" alt="...">
            </div>
            <div class="carousel-item">
                <img src="/assets/img/pic4.jpg" class="d-block w-100 rounded" alt="...">
            </div>`);
    }
    else {
        $('.leftside-carousel-inner').html(
            `<div class="carousel-item active">
                <img src="/assets/img/pic1.jpg" class="d-block w-100 rounded" alt="...">
            </div>
            <div class="carousel-item">
                <img src="/assets/img/pic2.jpg" class="d-block w-100 rounded" alt="...">
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

function heartColor(list, pos) {
    if(pos == "home") {
        for(let i = 0; i < list.length; i++) {
            if(localStorage.getItem(`wishHome${i}`) == 1) {
                $(list[i]).html('<i class="fa-solid fa-heart"></i>');
            }
            if(localStorage.getItem(`wishHome${i}`) == 0) {
                $(list[i]).html('<i class="fa-regular fa-heart"></i>');
            }
        }      
    }
}

var NewProductsCarouselTwoCols = `<div class="carousel-item carousel-item-two-cols"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9326e8db8d8e4e509e42ad26010cf693_9366/Giay_adidas_4DFWD_Pulse_DJen_Q46451_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas 4DFWD PULSE</h5> <p class="card-text fs-6">4.500.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new03');">Thêm vào giỏ hàng</a> </div></div></div><div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99323516f2004510bd8aadf901472e5d_9366/Giay_Ultraboost_22_DJen_GX5564_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas Ultraboost 22</h5> <p class="card-text fs-6">5.200.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new04');">Thêm vào giỏ hàng</a> </div></div></div></div></div><div class="carousel-item carousel-item-two-cols"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d484182-8596-4d88-aa63-3d594d010d4a/pg-6-ep-basketball-shoes-9KkDtr.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike PG 6 EP</h5> <p class="card-text fs-6">3.239.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new07');">Thêm vào giỏ hàng</a> </div></div></div><div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ac12855-c31d-4961-b131-c68d8cd65b5a/air-max-90-se-shoes-C2hpvg.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike Air Max 90 SE</h5> <p class="card-text fs-6">3.829.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new08');">Thêm vào giỏ hàng</a> </div></div></div></div></div>`
var NewProductsCarouselThreeCols = `<div class="carousel-item carousel-item-three-cols"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 text-center row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ac12855-c31d-4961-b131-c68d8cd65b5a/air-max-90-se-shoes-C2hpvg.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike Air Max 90 SE</h5> <p class="card-text fs-6">3.829.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new08');">Thêm vào giỏ hàng</a> </div></div></div><div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99323516f2004510bd8aadf901472e5d_9366/Giay_Ultraboost_22_DJen_GX5564_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas Ultraboost 22</h5> <p class="card-text fs-6">5.200.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new04');">Thêm vào giỏ hàng</a> </div></div></div></div></div>`
var NewProductsCarouselFourCols = `<div class="carousel-item active"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f33bed88c81c4409a289adfa0186d4ee_9366/Giay_Golf_BOA_Tour360_22_trang_GY5337_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas BOA TOUR360</h5> <p class="card-text fs-6">6.150.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new01');">Thêm vào giỏ hàng</a> </div></div></div><div class="col d-none d-sm-block"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d96de4432d7a4b29be12ae0b00dba127_9366/Giay_NMD_V3_trang_GW3063_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas NMD V3</h5> <p class="card-text fs-6">4.000.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new02');">Thêm vào giỏ hàng</a> </div></div></div><div class="col d-none d-md-block"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9326e8db8d8e4e509e42ad26010cf693_9366/Giay_adidas_4DFWD_Pulse_DJen_Q46451_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas 4DFWD PULSE</h5> <p class="card-text fs-6">4.500.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder"onclick="addCart('new03');">Thêm vào giỏ hàng</a> </div></div></div><div class="col d-none d-lg-block"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99323516f2004510bd8aadf901472e5d_9366/Giay_Ultraboost_22_DJen_GX5564_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas Ultraboost 22</h5> <p class="card-text fs-6">5.200.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new04');">Thêm vào giỏ hàng</a> </div></div></div></div></div><div class="carousel-item"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec6e3201-e235-4c25-ba5d-e8d0ef7e0478/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike Air Jordan XXXVI</h5> <p class="card-text fs-6">5.439.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder"onclick="addCart('new05');">Thêm vào giỏ hàng</a> </div></div></div><div class="col d-none d-sm-block"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a31b078d-f2ce-422b-8231-5817f908a40d/air-force-1-high-07-lv8-vintage-shoes-s7bp1q.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike Air Force 1 High</h5> <p class="card-text fs-6">3.669.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new06');">Thêm vào giỏ hàng</a> </div></div></div><div class="col d-none d-md-block"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d484182-8596-4d88-aa63-3d594d010d4a/pg-6-ep-basketball-shoes-9KkDtr.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike PG 6 EP</h5> <p class="card-text fs-6">3.239.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder"onclick="addCart('new07');">Thêm vào giỏ hàng</a> </div></div></div><div class="col d-none d-lg-block"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ac12855-c31d-4961-b131-c68d8cd65b5a/air-max-90-se-shoes-C2hpvg.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike Air Max 90 SE</h5> <p class="card-text fs-6">3.829.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder"onclick="addCart('new08');">Thêm vào giỏ hàng</a> </div></div></div></div></div>`;

        //Avoid removing active carousel item
    $(window).resize(function () { 
        $('#carousel-new-products .carousel-inner').html(NewProductsCarouselFourCols);
    });
        //Two-cols
    if($(window).width() < 768 && $(window).width() >= 576) {
        if(!$('.carousel-item-two-cols').length) $('.carousel-new-products').append(NewProductsCarouselTwoCols);
    }
    else {
        $('.carousel-item-two-cols').remove();
    }
    $(window).resize(function () { 
        if($(window).width() < 768 && $(window).width() >= 576) {
            if(!$('.carousel-item-two-cols').length) $('.carousel-new-products').append(NewProductsCarouselTwoCols);
        }
        else {
            $('.carousel-item-two-cols').remove();
        }
    });
        //Three-cols
    if($(window).width() < 992 && $(window).width() >= 768) {
        if(!$('.carousel-item-three-cols').length) $('.carousel-new-products').append(NewProductsCarouselThreeCols);
    }
    else {
        $('.carousel-item-three-cols').remove();
    }
    $(window).resize(function () { 
        if($(window).width() < 992 && $(window).width() >= 768) {
            if(!$('.carousel-item-three-cols').length) $('.carousel-new-products').append(NewProductsCarouselThreeCols);
        }
        else {
            $('.carousel-item-three-cols').remove();
        }
    });


