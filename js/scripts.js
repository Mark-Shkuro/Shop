$('.logo-slider').slick({/*Меняем название на наз-е нашего блока*/
    dots: true,
    infinite: true, /*меняем фолз на тру для вечного прокрута */
    speed: 500,
    slidesToShow: 5, /*Сколько слайдов показывает*/
    slidesToScroll: 1, /*Сколько слайдов прокручивает*/
    responsive: [
      {
        breakpoint: 1024, /*Настройка для адаптива*/
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  //cлайдер с ценой
  $( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 0, 500 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).
    slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );
