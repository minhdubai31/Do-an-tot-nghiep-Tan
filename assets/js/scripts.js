//Resize search bar
function searchbarResize() {
    if($(window).width() > 768 && $(window).width() < 1200) {
        $('.searchbar').css('width', '75%');
    }
    else {
        $('.searchbar').css('width','90%');
    }
}


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


//This function combine 2 adsvertisements to one
function AdsResize() {
    if($(window).width() < 1200) {
        $('.ads-picture-container-rightside .carousel-ads').append(
            `<div class="carousel-item h-100">
                <img class="h-100" src="./assets/img/pic3.jpg" alt="">
            </div>
            <div class="carousel-item h-100">
                <img class="h-100" src="./assets/img/pic4.jpg" alt="">
            </div>`
        );
    }
    else {
        $('.ads-picture-container-rightside .carousel-ads').html(
            `<div class="carousel-item active h-100">
                <img class="h-100" src="./assets/img/pic1.jpg" alt="">
            </div>
            <div class="carousel-item h-100">
                <img class="h-100" src="./assets/img/pic2.jpg" alt="">
            </div>`
        );
    }
}


// Add to cart
function addCart(code) {

    //Stop current notification animation
    $('#liveToast').stop(true, false);

    //Get item value
    var currentValue = parseInt(window.localStorage.getItem(code))

    //Add notification text
    if(window.localStorage.getItem(code) == null) {
        window.localStorage.setItem(code, 1)
         $('.toast-body').html(`Đã thêm ${itemList[code].name} vào giỏ hàng. <br>Số lượng hiện tại là 1.`);
    }
    else {
        window.localStorage.setItem(code, 1+currentValue)
        $('.toast-body').html(`Đã thêm ${itemList[code].name} vào giỏ hàng. <br>Số lượng hiện tại là ${window.localStorage.getItem(code)}.`);
    }


    //Update badge
    countCart();
    $(".cartItems").text(cartItems);


    //Add to cart live notification
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


//Add an item to wish list
function addWishList(code) {
    if(localStorage.getItem(`${code}wish`) == 0 || localStorage.getItem(`${code}wish`) == null) {
        localStorage.setItem(`${code}wish`, 1);
    }
    else {
        localStorage.setItem(`${code}wish`, 0);
    }
    heartColor();
}


//Add to wish list icon effect
function heartColor() {
    for(const code in itemList) {
        if(localStorage.getItem(`${code}wish`) == 0 || localStorage.getItem(`${code}wish`) == null) {
            $(`.${code}`).html('<i class="fa-regular fa-heart"></i>');
        }
        else {
            $(`.${code}`).html('<i class="fa-solid fa-heart"></i>');
        }
    }
}


//Count total of each type of products
function productTypeCount(type) {
    let count = 0;
    for(const product in itemList) {
        if(product.search(type) != -1)
            count++;
    }
    return count;
}


//Calculate carousel new products slide column in homepage
function carouselSlideColumn() {
    if($(window).width() < 768) return 2;
    if($(window).width() < 992) return 3;
    return 4;
}


function addNewProductCarousel(col) {
    //Calculate number of carousel new products slide in homepage
    newProductItems = productTypeCount("new");
    let slide = Math.ceil(newProductItems/col);

    //Init carousel indicators bar and carousel slides
    $(".carousel-indicators").html(`<button type="button" data-bs-target="#carousel-new-products" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>`);
    $(".add-carousel-slide").html('');
    

    for(let i = 0; i < slide; i++) {

        let addCarouselSlide = 
        `<div class="carousel-item">
            <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4 new-product-slide${i}">    
            </div>
        </div>`
        let addCarouselIndicator = `<button type="button" data-bs-target="#carousel-new-products" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>`

        //Add carousel new products slides
        $(".add-carousel-slide").append(addCarouselSlide);

        //Because it already has the first slide then we just add more indicators when the slide's order is bigger than first
        if(i >= 1) {
            $(".carousel-indicators").append(addCarouselIndicator);
        }
    }
    //Add active class for the first item (BS5 need)
    $('.add-carousel-slide .carousel-item:first-child').addClass('active');
    
    let newProductCount = 0;
    let slideCount = 0;

    for (const product in itemList) {

        //Add new products only
        if(product.search("new") != -1) {

            let NewProductCard =
            `<div class="col">
                <div class="card h-100">
                    <img class="w-100 img-hover-effect" src="${itemList[product].photo}" alt="">
                    <div class="card-body">
                        <h5 class="card-title fs-5">${itemList[product].name}</h5>
                        <p class="card-text fs-6">${new Intl.NumberFormat((['ban', 'id'])).format(itemList[product].price)} VND</p>
                    </div>
                    <div class="card-footer text-center border-top-0">
                        <a title="Thêm yêu thích" class="pe-3 heart-icon ${product}" onclick="addWishList('${product}');"><i class="fa-regular fa-heart"></i></a>
                        <a class="btn rounded-pill bottom-0 border text-dark fs-6 oder" onclick="addCart('${product}');">Mua ngay</a>
                    </div>
                </div>
            </div>`
            

            $(`.new-product-slide${slideCount}`).append(NewProductCard);

            //Switch to the next slide when the current slide is full
            if((newProductCount+1) % col == 0) {
                slideCount++;
            } 
            newProductCount++;
        }
    }
}


//This function display contact success animation
function clickSuccessModal() {
    $(".modal-popup").click();
}
$(".modal-popup").click(function() {
    setTimeout(function() {
        location.href = 'index.html';
    }, 4000);
})


$(document).ready(function () {

    //Preload effect
    setTimeout(function() {    
        $('.preload-bg').fadeOut(500);
    }, 200);
    
    
    //Dropdown menu effect
    $('.nav-item.dropdown').hover(function () {
        if($(window).width() > 991.98) $('.dropdown-menu').css('opacity', 0).slideDown(300).animate({ opacity: 1 }, { queue: false, duration: 300 });   
        }, function () {
        if($(window).width() > 991.98) $('.dropdown-menu').hide();
        }
    );


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
    

    //Navigation bar effect when scroll
    $(document).scroll(function () {
        if($(document).scrollTop() > 50) {
            $(".navbar .topnav").removeClass("py-3");
        }
        if($(document).scrollTop() === 0){
            $(".navbar .topnav").addClass("py-3");

        }
    });

    
    AdsResize();
    

    //Add new products to carousel in homepage
    addNewProductCarousel(carouselSlideColumn());
    $(window).resize(function() {
        addNewProductCarousel(carouselSlideColumn());
    })
    

    heartColor();


    //Set badge
    countCart();
    $(".cartItems").text(cartItems);
});


$(window).resize(function () { 
    AdsResize();
});


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
                <a title="Thêm yêu thích" class="pe-3 heart-icon ${product}" onclick="addWishList('${product}');"><i class="fa-regular fa-heart"></i></a>
                <a class="btn rounded-pill bottom-0 border text-dark fs-6 oder" onclick="addCart('${product}');">Mua ngay</a>
            </div>
        </div>
    </div>`

    if(product.search("hot") != -1) {
        $(".hot-selling-products-card").append(addProductCard);
    }

    if(product.search("new") != -1) {
        $(".new-products-card").append(addProductCard);
    }

    if(product.search("men") != -1) {
        $(".for-men-products-card").append(addProductCard);
    }

    if(product.search("women") != -1) {
        $(".for-women-products-card").append(addProductCard);
    }
    count++;
}
