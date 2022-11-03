$(document).ready(function () {

    setTimeout(function() {    
        $('.preload-bg').fadeOut(500);
    }, 200);


    // Dropdown menu animation for large screen
    $('.nav-item.dropdown').hover(function () {
        if($(window).width() > 991.98) $('.dropdown-menu').css('opacity', 0).slideDown(300).animate({ opacity: 1 }, { queue: false, duration: 300 });   
        }, function () {
        if($(window).width() > 991.98) $('.dropdown-menu').hide();
        }
    );


    // Sticky navigation animation
    $(document).scroll(function () { 
        if($(document).scrollTop() > 2) {
            $('.navbar').css({'line-height':'1.5rem', 'transform' : 'translateY(-24px)'});
            $('.navbar-toggler').css('margin', '0');
            if($(window).width() > 991.98) $('.summary').css('transform', 'translateY(-48px)');
        }
        if($(document).scrollTop()<50) {
            $('.navbar').css({'line-height': '3rem', 'transform' : 'translateY(0)'});
            $('.navbar-toggler').css('margin', '0.8rem 0');
            $('.summary').css('transform', 'translateY(0)');
        }
    });


    // Navigation for medium and small screen
    var showmenu = false;
    $('.navbar-toggler').click(function (e) { 
        e.preventDefault();
        if(!showmenu) {
            $('.navbar-collapse').slideDown(400);
            $('.searchform').hide();
            $('.navbar-brand').hide();
            showmenu = true;
        }
        else {
            $('.navbar-collapse').slideUp(400);;
            showmenu = false;
            setTimeout(function() {
                $('.searchform').show();
                $('.navbar-brand').show();
            }, 400)
        }        
    });


    //New products responsive - add hiden carousel items
    var NewProductsCarouselOneCol = `<div class="carousel-item carousel-item-one-col"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d96de4432d7a4b29be12ae0b00dba127_9366/Giay_NMD_V3_trang_GW3063_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas NMD V3</h5> <p class="card-text fs-6">4.000.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new02');">Thêm vào giỏ hàng</a> </div></div></div></div></div><div class="carousel-item carousel-item-one-col"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9326e8db8d8e4e509e42ad26010cf693_9366/Giay_adidas_4DFWD_Pulse_DJen_Q46451_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas 4DFWD PULSE</h5> <p class="card-text fs-6">4.500.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new03');">Thêm vào giỏ hàng</a> </div></div></div></div></div><div class="carousel-item carousel-item-one-col"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99323516f2004510bd8aadf901472e5d_9366/Giay_Ultraboost_22_DJen_GX5564_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas Ultraboost 22</h5> <p class="card-text fs-6">5.200.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new04');">Thêm vào giỏ hàng</a> </div></div></div></div></div><div class="carousel-item carousel-item-one-col"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a31b078d-f2ce-422b-8231-5817f908a40d/air-force-1-high-07-lv8-vintage-shoes-s7bp1q.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike Air Force 1 High</h5> <p class="card-text fs-6">3.669.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new06');">Thêm vào giỏ hàng</a> </div></div></div></div></div><div class="carousel-item carousel-item-one-col"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d484182-8596-4d88-aa63-3d594d010d4a/pg-6-ep-basketball-shoes-9KkDtr.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike PG 6 EP</h5> <p class="card-text fs-6">3.239.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new07');">Thêm vào giỏ hàng</a> </div></div></div></div></div><div class="carousel-item carousel-item-one-col"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ac12855-c31d-4961-b131-c68d8cd65b5a/air-max-90-se-shoes-C2hpvg.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike Air Max 90 SE</h5> <p class="card-text fs-6">3.829.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new08');">Thêm vào giỏ hàng</a> </div></div></div></div></div>`;
    var NewProductsCarouselTwoCols = `<div class="carousel-item carousel-item-two-cols"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9326e8db8d8e4e509e42ad26010cf693_9366/Giay_adidas_4DFWD_Pulse_DJen_Q46451_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas 4DFWD PULSE</h5> <p class="card-text fs-6">4.500.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new03');">Thêm vào giỏ hàng</a> </div></div></div><div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99323516f2004510bd8aadf901472e5d_9366/Giay_Ultraboost_22_DJen_GX5564_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas Ultraboost 22</h5> <p class="card-text fs-6">5.200.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new04');">Thêm vào giỏ hàng</a> </div></div></div></div></div><div class="carousel-item carousel-item-two-cols"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d484182-8596-4d88-aa63-3d594d010d4a/pg-6-ep-basketball-shoes-9KkDtr.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike PG 6 EP</h5> <p class="card-text fs-6">3.239.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new07');">Thêm vào giỏ hàng</a> </div></div></div><div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ac12855-c31d-4961-b131-c68d8cd65b5a/air-max-90-se-shoes-C2hpvg.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike Air Max 90 SE</h5> <p class="card-text fs-6">3.829.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new08');">Thêm vào giỏ hàng</a> </div></div></div></div></div>`
    var NewProductsCarouselThreeCols = `<div class="carousel-item carousel-item-three-cols"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 text-center row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ac12855-c31d-4961-b131-c68d8cd65b5a/air-max-90-se-shoes-C2hpvg.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike Air Max 90 SE</h5> <p class="card-text fs-6">3.829.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new08');">Thêm vào giỏ hàng</a> </div></div></div><div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99323516f2004510bd8aadf901472e5d_9366/Giay_Ultraboost_22_DJen_GX5564_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas Ultraboost 22</h5> <p class="card-text fs-6">5.200.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new04');">Thêm vào giỏ hàng</a> </div></div></div></div></div>`
    var NewProductsCarouselFourCols = `<div class="carousel-item active"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f33bed88c81c4409a289adfa0186d4ee_9366/Giay_Golf_BOA_Tour360_22_trang_GY5337_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas BOA TOUR360</h5> <p class="card-text fs-6">6.150.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new01');">Thêm vào giỏ hàng</a> </div></div></div><div class="col d-none d-sm-block"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d96de4432d7a4b29be12ae0b00dba127_9366/Giay_NMD_V3_trang_GW3063_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas NMD V3</h5> <p class="card-text fs-6">4.000.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new02');">Thêm vào giỏ hàng</a> </div></div></div><div class="col d-none d-md-block"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9326e8db8d8e4e509e42ad26010cf693_9366/Giay_adidas_4DFWD_Pulse_DJen_Q46451_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas 4DFWD PULSE</h5> <p class="card-text fs-6">4.500.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder"onclick="addCart('new03');">Thêm vào giỏ hàng</a> </div></div></div><div class="col d-none d-lg-block"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99323516f2004510bd8aadf901472e5d_9366/Giay_Ultraboost_22_DJen_GX5564_01_standard.jpg" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Adidas Ultraboost 22</h5> <p class="card-text fs-6">5.200.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new04');">Thêm vào giỏ hàng</a> </div></div></div></div></div><div class="carousel-item"> <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 px-5"> <div class="col"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec6e3201-e235-4c25-ba5d-e8d0ef7e0478/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike Air Jordan XXXVI</h5> <p class="card-text fs-6">5.439.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder"onclick="addCart('new05');">Thêm vào giỏ hàng</a> </div></div></div><div class="col d-none d-sm-block"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a31b078d-f2ce-422b-8231-5817f908a40d/air-force-1-high-07-lv8-vintage-shoes-s7bp1q.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike Air Force 1 High</h5> <p class="card-text fs-6">3.669.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder" onclick="addCart('new06');">Thêm vào giỏ hàng</a> </div></div></div><div class="col d-none d-md-block"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d484182-8596-4d88-aa63-3d594d010d4a/pg-6-ep-basketball-shoes-9KkDtr.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike PG 6 EP</h5> <p class="card-text fs-6">3.239.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder"onclick="addCart('new07');">Thêm vào giỏ hàng</a> </div></div></div><div class="col d-none d-lg-block"> <div class="card h-100"> <img class="w-100 img-hover-effect rounded-top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ac12855-c31d-4961-b131-c68d8cd65b5a/air-max-90-se-shoes-C2hpvg.png" alt=""> <div class="card-body"> <h5 class="card-title fs-5">Nike Air Max 90 SE</h5> <p class="card-text fs-6">3.829.000đ</p></div><div class="card-footer text-center border-top-0"> <a class="btn bg-light bottom-0 border text-dark fs-6 text-uppercase oder"onclick="addCart('new08');">Thêm vào giỏ hàng</a> </div></div></div></div></div>`;

        //Avoid removing active carousel item
    $(window).resize(function () { 
        $('#carousel-new-products .carousel-inner').html(NewProductsCarouselFourCols);
    });
        //One-col
    if($(window).width() < 576) {
        if(!$('.carousel-item-one-col').length) $('.carousel-new-products').append(NewProductsCarouselOneCol);
    }
    else {
        $('.carousel-item-one-col').remove();
    }
    $(window).resize(function () { 
        if($(window).width() < 576) {
            if(!$('.carousel-item-one-col').length) $('.carousel-new-products').append(NewProductsCarouselOneCol);
        }
        else {
            $('.carousel-item-one-col').remove();
        }
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


    //Remove slipping down drop-down menu when click on
    $('#dropdownMenuLink').click(function (e) { 
        $('.dropdown-menu ').removeAttr('data-bs-popper');
    });


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


    /* Set values + misc */
var promoCode;
var promoPrice;
var fadeTime = 300;

/* Assign actions */

$('.quantity input').change(function() {
  updateQuantity(this);
});

$('.remove button').click(function() {
  removeItem(this);
});

$(document).ready(function() {
  updateSumItems();
});

$('.promo-code-cta').click(function() {

  promoCode = $('#promo-code').val();

  if (promoCode == '10off' || promoCode == '10OFF') {
    //If promoPrice has no value, set it as 10 for the 10OFF promocode
    if (!promoPrice) {
      promoPrice = 10;
    } else if (promoCode) {
      promoPrice = promoPrice * 1;
    }
  } else if (promoCode != '') {
    alert("Invalid Promo Code");
    promoPrice = 0;
  }
  //If there is a promoPrice that has been set (it means there is a valid promoCode input) show promo
  if (promoPrice) {
    $('.summary-promo').removeClass('hide');
    $('.promo-value').text(promoPrice.toFixed(2));
    recalculateCart(true);
  }
});

/* Recalculate cart */
function recalculateCart(onlyTotal) {
  var subtotal = 0;

  /* Sum up row totals */
  $('.basket-product').each(function() {
    subtotal += parseFloat($(this).children('.subtotal').text());
  });

  /* Calculate totals */
  var total = subtotal;

  //If there is a valid promoCode, and subtotal < 10 subtract from total
  var promoPrice = parseFloat($('.promo-value').text());
  if (promoPrice) {
    if (subtotal >= 10) {
      total -= promoPrice;
    } else {
      alert('Order must be more than £10 for Promo code to apply.');
      $('.summary-promo').addClass('hide');
    }
  }

  /*If switch for update only total, update only total display*/
  if (onlyTotal) {
    /* Update total display */
    $('.total-value').fadeOut(fadeTime, function() {
      $('#basket-total').html(total.toFixed(2));
      $('.total-value').fadeIn(fadeTime);
    });
  } else {
    /* Update summary display. */
    $('.final-value').fadeOut(fadeTime, function() {
      $('#basket-subtotal').html(subtotal.toFixed(0));
      $('#basket-total').html(total.toFixed(0));
      if (total == 0) {
        $('.checkout-cta').fadeOut(fadeTime);
      } else {
        $('.checkout-cta').fadeIn(fadeTime);
      }
      $('.final-value').fadeIn(fadeTime);
    });
  }
}

/* Update quantity */
function updateQuantity(quantityInput) {
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;

  /* Update line price display and recalc cart totals */
  productRow.children('.subtotal').each(function() {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(0));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });

  productRow.find('.item-quantity').text(quantity);
  updateSumItems();
}

function updateSumItems() {
  var sumItems = 0;
  $('.quantity input').each(function() {
    sumItems += parseInt($(this).val());
  });
  $('.total-items').text(sumItems);
}

/* Remove item from cart */
function removeItem(removeButton) {
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
    updateSumItems();
  });
}

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

});

var itemList={
    "sp001":{ 
        "name":"Nike Go FlyEase",
        "price":3519000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/879db1d0-b43a-4ee1-89b0-814d66e83638/go-flyease-shoe-5nWPkx.png"
    },
    "sp002":{ 
        "name":"Nike Air Force 1 '07 LV8",
        "price":3089000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/341e2ed9-9797-4f15-8d4f-265071377068/air-force-1-07-lv8-shoes-BS9f21.png"
    },
    "sp003":{ 
        "name":"Nike Air Force 1 GTX",
        "price":4699000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e26f39f0-beaa-4a76-a6b7-ce63e3783d42/air-force-1-gtx-shoes-60rsTr.png"
    },
    "sp004":{ 
        "name":"Nike Air Max Excee",
        "price":2649000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a516694e-c43a-4a90-af24-867dda765485/air-max-excee-shoe-lPbXqt.png"
    },
    "sp005":{ 
        "name":"Nike Court React Vapor NXT",
        "price":4699000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3eb489c7-9793-417c-abfa-217314b2596d/nikecourt-react-vapor-nxt-hard-court-tennis-shoe-hJflW9.png"
    },
    "sp006":{ 
        "name":"Nike Blazer Low '77 Jumbo",
        "price":2779000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e2a045c5-7393-4717-9ddf-b6de12cfe641/blazer-low-77-jumbo-shoes-RGNB3j.png"
    },
    "sp007":{ 
        "name":"Nike Waffle One",
        "price":2929000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/bbb67f5d-0c85-41b9-b550-ee955d151cda/waffle-one-shoes-1SFQwJ.png"
    },
    "sp008":{ 
        "name":"Nike Air Max INTRLK lite",
        "price":2349000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ddfa2ece-01cc-4e30-8a60-d5fe922d3102/air-max-intrlk-lite-shoes-nfMxNF.png"
    },
    "sp009":{ 
        "name":"Nike Air Max 270",
        "price":4409000,
        "photo":"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/209889d9-4910-4f06-9d07-18afa558b566/air-max-270-shoes-2V5C4p.png"
    },
    "sp010":{ 
        "name":"Continental 80",
        "price":2700000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/31dcbed40f7a45a7b745a91500a05e4b_9366/gi%C3%A0y-continental-80.jpg"
    },
    "sp011":{ 
        "name":"Superstar",
        "price":2500000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff0654f4089f4413baa7aae700d2a08c_9366/gi%C3%A0y-superstar.jpg"
    },
    "sp012":{ 
        "name":"Retropy F2",
        "price":2400000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/9c98c1b6bc124b7f943eadf800cb2453_9366/gi%C3%A0y-retropy-f2.jpg"
    },
    "sp013":{ 
        "name":"Glaxy 5",
        "price":1500000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7beb6046aa5e4b5d8c69ae0d00f548f1_9366/gi%C3%A0y-galaxy-5.jpg"
    },
    "sp014":{ 
        "name":"Nizza Hi Parley",
        "price":2900000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/cf78fc3f39dd4159be77adf900a1b154_9366/gi%C3%A0y-nizza-hi-parley.jpg"
    },
    "sp015":{ 
        "name":"Stan Smith",
        "price": 2500000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f91e2c9028c94126b019ae2700181efb_9366/gi%C3%A0y-stan-smith.jpg"
    },
    "sp016":{ 
        "name":"Adidas x Allbirds",
        "price":3500000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a91d835f0ea4264a7e9ad8d01255d76_9366/gi%C3%A0y-adidas-x-allbirds.jpg"
    },
    "sp017":{ 
        "name":"NMD_R1 Primeblue",
        "price": 3600000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/dc1564178d9f40fabfd4ad6a00f93dbb_9366/gi%C3%A0y-nmd_r1-primeblue.jpg"
    },
    "sp018":{ 
        "name":"MND_V3",
        "price":4000000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/fcb9e8bc25d249579d2dae0b00dbb039_9366/gi%C3%A0y-nmd_v3.jpg"
    },
    "sp019":{ 
        "name":"Nike Go FlyEase",
        "price":3829000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7484c8a1-6c7c-415c-a433-3bc9a900d29d/go-flyease-shoes-3svRCL.png"
    },
    "sp020":{ 
        "name":"Nike Air Force 1 '07",
        "price":3519000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6e840eb6-3c2b-43d2-9d58-81b1a1019f8e/air-force-1-07-shoes-ZMwtBc.png"
    },
    "sp021":{ 
        "name":"Nike Air Max Koko",
        "price":2929000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a7147fca-ac80-4cb1-abb8-11f6c2bc3b95/air-max-koko-sandals-TlDB8L.png"
    },
    "sp022":{ 
        "name":"Nike Icon Classic",
        "price":1759000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/13692558-551a-4b52-a05b-3124ece1962c/icon-classic-sandals-Jrc3kN.png"
    },
    "sp023":{ 
        "name":"Nike Air Force 1 '07 LV8",
        "price":3239000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0c1dae87-02b9-486f-b3f2-ac9f8d5cccca/air-force-1-07-lv8-shoe-L89Z91.png"
    },
    "sp024":{ 
        "name":"Nike SuperRep Go 3 Flyknit Next Nature",
        "price":2929000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/05698ac2-ecbe-4f25-8739-0a58b0b64242/superrep-go-3-flyknit-next-nature-training-shoes-zKqgRc.png"
    },
    "sp025":{ 
        "name":"Nike Air Force 1 '07 LX",
        "price":2929000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6654b41e-e43b-4496-86e6-adf817e09979/air-force-1-07-lx-shoes-RbMfC9.png"
    },
    "sp026":{ 
        "name":"Nike Air Max 1 Premium",
        "price":4109000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/37dc552d-41e8-4fdd-8387-066d5fbf517a/air-max-1-shoes-Z7pLNf.png"
    },
    "sp027":{ 
        "name":"Nike Offcourt Duo",
        "price":1169000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6a51c38b-aa17-4155-9e70-9933a51c6bbc/offcourt-duo-slides-KkVCVZ.png"
    },
    "sp028":{ 
        "name":"Stan Smith",
        "price":2500000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/dcc8b21f893a457886d8ac0900afa80b_9366/gi%C3%A0y-stan-smith.jpg"
    },
    "sp029":{ 
        "name":"Post Move SE",
        "price":1900000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/024e35152f7d412ca438adf3002a29bd_9366/gi%C3%A0y-postmove-se.jpg"
    },
    "sp030":{ 
        "name":"Stan Smith Rich Mnisi",
        "price":2900000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/a7c557c1fedf41ffbdd0ad7b014723df_9366/gi%C3%A0y-stan-smith-rich-mnisi.jpg"
    },
    "sp031":{ 
        "name":"Pureboost 22",
        "price":3500000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/0d15d8395c3f4c8dbb56ae1600f56c2b_9366/gi%C3%A0y-pureboost-22.jpg"
    },
    "sp032":{ 
        "name":"Ultraboost 22",
        "price":5200000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ce20b4b0f20d400c9b38ae1300581b52_9366/gi%C3%A0y-ultraboost-22.jpg"
    },
    "sp033":{ 
        "name":"D.O.N Issue",
        "price":3000000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/0ac5c6b499114f168785ae4a018adaaa_9366/gi%C3%A0y-d.o.n.-issue-3.jpg"
    },
    "sp034":{ 
        "name":"Superstar",
        "price":2500000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/60eaacc01c724729bc58ae4a0031298d_9366/gi%C3%A0y-superstar.jpg"
    },
    "sp035":{ 
        "name":"Disney Forum Bold",
        "price":2800000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5650bf1a096643d78479ae140028541e_9366/gi%C3%A0y-disney-forum-bold.jpg"
    },
    "sp036":{ 
        "name":"Run Falcon 2.0",
        "price":1500000,
        "photo": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d4d72e14c9164c9f9266ac9200ccff34_9366/gi%C3%A0y-run-falcon-2.0.jpg"
    },
    "new01":{
        "name": "Adidas BOA TOUR360",
        "price": 6150000,
        "photo": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f33bed88c81c4409a289adfa0186d4ee_9366/Giay_Golf_BOA_Tour360_22_trang_GY5337_01_standard.jpg"
    },
    "new02":{
        "name": "Adidas NMD V3",
        "price": 4000000,
        "photo": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d96de4432d7a4b29be12ae0b00dba127_9366/Giay_NMD_V3_trang_GW3063_01_standard.jpg"
    },
    "new03":{
        "name": "Adidas 4DFWD PULSE",
        "price": 4500000,
        "photo": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9326e8db8d8e4e509e42ad26010cf693_9366/Giay_adidas_4DFWD_Pulse_DJen_Q46451_01_standard.jpg"
    },
    "new04":{
        "name": "Adidas Ultraboost 22",
        "price": 5200000,
        "photo": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/99323516f2004510bd8aadf901472e5d_9366/Giay_Ultraboost_22_DJen_GX5564_01_standard.jpg"
    },
    "new05":{
        "name": "Nike Air Jordan XXXVI",
        "price": 5439000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ec6e3201-e235-4c25-ba5d-e8d0ef7e0478/air-jordan-xxxvi-pf-basketball-shoes-fjPfDg.png"
    },
    "new06":{
        "name": "Nike Air Force 1 High",
        "price": 3669000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a31b078d-f2ce-422b-8231-5817f908a40d/air-force-1-high-07-lv8-vintage-shoes-s7bp1q.png"
    },
    "new07":{
        "name": "Nike PG 6 EP",
        "price": 3239000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d484182-8596-4d88-aa63-3d594d010d4a/pg-6-ep-basketball-shoes-9KkDtr.png"
    },
    "new08":{
        "name": "Nike Air Max 90 SE",
        "price": 3829000,
        "photo": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ac12855-c31d-4961-b131-c68d8cd65b5a/air-max-90-se-shoes-C2hpvg.png"
    }
};

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
    $('#liveToast').fadeIn();
    $(".cart-icon i").css("transform", "translate(-2px, -5px)");
    $(".cart-icon i").css("font-size", "35px");
    setTimeout(function() {
        $(".cart-icon i").css("transform", "translate(-2px, 0)");
        $(".cart-icon i").css("font-size", "22px");
    },500)
    setTimeout(function(){$('#liveToast').fadeOut()}, 3000);
}

function removeFromCart(code) {
    window.localStorage.setItem(code, 0);
}

function changeLocalStorage(code) {
    window.localStorage.setItem(code, $(`#${code}`).val());
}

let stotal=0;
for(const product in itemList) {
    stotal+= itemList[product].price * window.localStorage.getItem(product);
    if(window.localStorage.getItem(product) > 0) {
        $(".basket-labels").after(`<div class="basket-product"> <div class="item"> <div class="product-image"> <img src="${itemList[product].photo}"alt="Placholder Image 2" class="product-frame"> </div><div class="product-details"> <h1><span class="item-quantity">${window.localStorage.getItem(product)}</span> x ${itemList[product].name}</h1> </div></div><div class="price product-price">${itemList[product].price}</div><div class="quantity"> <input type="number" value="${window.localStorage.getItem(product)}" min="1" class="quantity-field text-center" id="${product}" oninput="changeLocalStorage('${product}');"> </div><div class="subtotal product-subtotal">${itemList[product].price * window.localStorage.getItem(product)}</div><div class="remove"> <button class="px-2" onclick="removeFromCart('${product}');">Xóa khỏi giỏ hàng</button> </div></div>`);
    }
}
$('#basket-total').text(stotal);


