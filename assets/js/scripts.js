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
    

    $(document).scroll(function () {
        if($(document).scrollTop() > 50) {
            $(".navbar .topnav").removeClass("py-3");
        }
        if($(document).scrollTop() === 0){
            $(".navbar .topnav").addClass("py-3");

        }
    });

    
    
    AdsResize();
    
    addSpecialProductCarousel(carouselSlideCalculate());
    $(window).resize(function() {
        addSpecialProductCarousel(carouselSlideCalculate());
    })
    
    heartColor();
});

function AdsResize() {
    if($(window).width() < 1200) {
        $('.leftside-carousel-inner').append(
            `<div class="carousel-item">
                <img src="./assets/img/pic3.jpg" class="d-block w-100 rounded" alt="...">
            </div>
            <div class="carousel-item">
                <img src="./assets/img/pic4.jpg" class="d-block w-100 rounded" alt="...">
            </div>`);
    }
    else {
        $('.leftside-carousel-inner').html(
            `<div class="carousel-item active">
                <img src="./assets/img/pic1.jpg" class="d-block w-100 rounded" alt="...">
            </div>
            <div class="carousel-item">
                <img src="./assets/img/pic2.jpg" class="d-block w-100 rounded" alt="...">
            </div>`);
    }
}



$(window).resize(function () { 
    AdsResize();
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
    for(const product in specialList) {
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
    $('#liveToast').stop(true, false);
    var currentValue = parseInt(window.localStorage.getItem(code))
    if(window.localStorage.getItem(code) == null) {
        window.localStorage.setItem(code, 1)
        if(code.slice(0, 7) == "special") {
            $('.toast-body').html(`Đã thêm ${specialList[code].name} vào giỏ hàng. <br>Số lượng hiện tại là 1.`);
        }
        else {
            $('.toast-body').html(`Đã thêm ${itemList[code].name} vào giỏ hàng. <br>Số lượng hiện tại là 1.`);
        }
    }
    else {
        window.localStorage.setItem(code, 1+currentValue)
        if(code.slice(0, 7) == "special") {
            $('.toast-body').html(`Đã thêm ${specialList[code].name} vào giỏ hàng. <br>Số lượng hiện tại là ${window.localStorage.getItem(code)}.`);
        }
        else {
            $('.toast-body').html(`Đã thêm ${itemList[code].name} vào giỏ hàng. <br>Số lượng hiện tại là ${window.localStorage.getItem(code)}.`);
        }
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

function addWishList(code) {
    if(localStorage.getItem(`${code}wish`) == 0 || localStorage.getItem(`${code}wish`) == null) {
        localStorage.setItem(`${code}wish`, 1);
    }
    else {
        localStorage.setItem(`${code}wish`, 0);
    }
    heartColor();
}

function heartColor() {
    for(const code in itemList) {
        if(localStorage.getItem(`${code}wish`) == 0 || localStorage.getItem(`${code}wish`) == null) {
            $(`.${code}`).html('<i class="fa-regular fa-heart"></i>');
        }
        else {
            $(`.${code}`).html('<i class="fa-solid fa-heart"></i>');
        }
    }
    for(const code in specialList) {
        if(localStorage.getItem(`${code}wish`) == 0 || localStorage.getItem(`${code}wish`) == null) {
            $(`.${code}`).html('<i class="fa-regular fa-heart"></i>');
        }
        else {
            $(`.${code}`).html('<i class="fa-solid fa-heart"></i>');
        }
    }
}

let count = 0;
for (const product in itemList) {
    let addProductCard = 
    `<div class="col my-2">
        <div class="card h-100">
            <img class="img-hover-effect" src="${itemList[product].photo}" alt="" class="card-img-top">
            <div class="card-body">
                <h5 class="car-title fs-5">${itemList[product].name}</h5>
                <p class="card-text fs-6">${new Intl.NumberFormat((['ban', 'id'])).format(itemList[product].price)} VND</p>
            </div>
            <div class="card-footer text-center border-top-0">
                <a title="Thêm yêu thích" class="pe-2 heart-icon ${product}" onclick="addWishList('${product}');"><i class="fa-regular fa-heart"></i></a>
                <a class="btn rounded-pill bottom-0 border text-dark fs-6 oder" onclick="addCart('${product}');">Mua ngay</a>
            </div>
        </div>
    </div>`
    if(count < 12) {
        $(".hot-selling-products-card").append(addProductCard);
    }
    if(count  < Object.keys(itemList).length/2) {
        $(".for-men-products-card").append(addProductCard);
    }
    else {
        $(".for-women-products-card").append(addProductCard);
    }
    count++;
}

function carouselSlideCalculate() {
    if($(window).width() < 768) return 2;
    if($(window).width() < 992) return 3;
    return 4;
}

function addSpecialProductCarousel(col) {
    
    let slide = Math.ceil(Object.keys(specialList).length/col);
    $(".carousel-indicators").html(`<button type="button" data-bs-target="#carousel-new-products" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`);
    $(".add-carousel-slide").html('');
    
    for(let i = 0; i < slide; i++) {
        let addCarouselSlide = 
        `<div class="carousel-item">
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 special-product-slide${i}">    
        </div>
        </div>`
        $(".add-carousel-slide").append(addCarouselSlide);
        let addCarouselIndicator = `<button type="button" data-bs-target="#carousel-new-products" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>`
        if(i >= 1) {
            $(".carousel-indicators").append(addCarouselIndicator);
        }
    }
    $('.add-carousel-slide .carousel-item:first-child').addClass('active');
    
    let specialCount = 0;
    let slideCount = 0;
    for (const product in specialList) {
        let addSpecialCard =
        `<div class="col">
        <div class="card h-100 rounded-0">
        <img class="w-100 img-hover-effect rounded-top" src="${specialList[product].photo}" alt="">
        <div class="card-body">
                    <h5 class="card-title fs-5">${specialList[product].name}</h5>
                    <p class="card-text fs-6">${new Intl.NumberFormat((['ban', 'id'])).format(specialList[product].price)} VND</p>
                </div>
                <div class="card-footer text-center border-top-0">
                    <a title="Thêm yêu thích" class="pe-2 heart-icon ${product}" onclick="addWishList('${product}');"><i class="fa-regular fa-heart"></i></a>
                    <a class="btn rounded-pill bottom-0 border text-dark fs-6 oder" onclick="addCart('${product}');">Mua ngay</a>
                </div>
            </div>
        </div>`
        
        $(`.special-product-slide${slideCount}`).append(addSpecialCard);
        if((specialCount+1) % col == 0) {
            slideCount++;
        } 
        specialCount++;
    }
}