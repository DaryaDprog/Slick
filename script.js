$(function() {

    let images = ['images/img1.png', 'images/img2.png', 'images/img3.png', 'images/img4.png', 'images/img5.png'];

  images.forEach(function(e) {
    let sl__img = document.querySelector(".sl__img");
  let img = document.createElement('img');
  img.className = "sl_slide";
  sl__img.append(img);
  img.src = e;
  });
  
  
  

    $('.sl__img').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
});