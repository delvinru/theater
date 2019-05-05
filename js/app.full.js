window.onload = function() {
  // preloader
  let images = document.images,
    images_total_count = images.length,
    images_loaded_count = 0,
    perc_display = $('#load_perc'),
    preloader = $('#page_loader');

  for (let i = 0; i < images_total_count; i++) {
    image_clone = new Image();
    image_clone.onload = image_loaded;
    image_clone.onerror = image_loaded;
    image_clone.src = images[i].src;
  }

  function image_loaded() {
    images_loaded_count++;
    perc_display.html(((100 / images_total_count) * images_loaded_count << 0) + '%');
    if (images_loaded_count >= images_total_count) {
      setTimeout(function() {
        if (!preloader.hasClass('done')) {
          preloader.addClass('done');
        }
      }, 1000);
    }
  }
  // main script
  // variable
  let up = $('#button'),
    down = $('#button_1'),
    ul = $('#kinds'),
    builds = $('#builds'),
    back = $('.back-btn');

  let car_op = $('.opera'),
    car_fil = $('.filarmonia'),
    car_dram = $('.drama');

  let map_op = $('.maps-opera'),
    map_fil = $('.maps-filarmonia'),
    map_dram = $('.maps-drama')

  // setup
  car_fil.hide();
  car_dram.hide();
  map_fil.hide();
  map_dram.hide();
  // btn up
  $(window).scroll(function() {
    if ($(window).scrollTop() > 700) {
      up.addClass('show');
    } else {
      up.removeClass('show');
    }
  });

  up.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  })

  down.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $(window).height()
    }, 700)
  })
  // change content
  ul.on('click', function(e) {
    let op = $('#builds li[value="opera"]');
    let fil = $('#builds li[value="filar"]');
    let dram = $('#builds li[value="drama"]');

    switch (e.target.getAttribute('value')) {
      case "opera":
        if (op.hasClass('hide')) {
          //slider
          $(e.target).parents('ul').find('li.active_1').removeClass('active_1');
          $(e.target).addClass('active_1');
          op.removeClass('hide').addClass('show');
          fil.removeClass('show').addClass('hide');
          dram.removeClass('show').addClass('hide');
          // carousel
          car_op.show();
          car_fil.hide();
          car_dram.hide();
          // MAPS
          map_op.show();
          map_fil.hide();
          map_dram.hide();
        }
        break;
      case "filar":
        if (fil.hasClass('hide')) {
          //slider
          $(e.target).parents('ul').find('li.active_1').removeClass('active_1');
          $(e.target).addClass('active_1');
          fil.removeClass('hide').addClass('show');
          op.removeClass('show').addClass('hide');
          dram.removeClass('show').addClass('hide');
          // carousel
          car_op.hide();
          car_fil.show();
          car_dram.hide();
          // MAPS
          map_op.hide();
          map_fil.show();
          map_dram.hide();
        }
        break;
      case "drama":
        if (dram.hasClass('hide')) {
          //slider
          $(e.target).parents('ul').find('li.active_1').removeClass('active_1');
          $(e.target).addClass('active_1');
          dram.removeClass('hide').addClass('show');
          op.removeClass('show').addClass('hide');
          fil.removeClass('show').addClass('hide');
          // carousel
          car_op.hide();
          car_fil.hide();
          car_dram.show();
          // MAPS
          map_op.hide();
          map_fil.hide();
          map_dram.show();
        }
        break;
      case 0:
        console.log('lol');
        break;
      default:
        break;
    }
  })

  builds.on('click', function(e) {
    let url = builds.find('li.show').children('a').attr('href');
    window.open(url, "_self");
  })
  // carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: ['<i class="fas fa-chevron-left fa-2x"></i>', '<i class="fas fa-chevron-right fa-2x"></i>'],
    margin: 10,
    responsive: {
      1090: {
        items: 2
      },
      1250: {
        items: 3
      }
    }
  });
  // back to main
  back.on('click', function(e) {
    history.go(-1);
  });
}
