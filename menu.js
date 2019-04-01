{
  setTimeout(function() {
    $(".loader").css("display", "none");
    loaded.play();
  }, 2500);




$(".letter").hover(function(){
  reveal.play();
})

  const loaded = anime({
    targets: '.name',
    scale: [{
      value: 3,
      duration: 100,
      elasticity: 100
    }, {
      value: 1,
      duration: 500,
      elasticity: 100
    }],
    duration: 4000,
    autoplay: false,

  });



anime({
    targets: '.link',
    translateX: 500,
    delay: anime.stagger(100, {start: 2620}),
autoplay: true,


  });

  const reveal = anime({
    targets: '.letter',
  	opacity:1,
    scale:1,
    easing: 'easeInOutExpo',
  	delay: function(el, index) {
  	  return index * 80;
  	},
    direction: 'alternate',
    loop: 3
  });




}
