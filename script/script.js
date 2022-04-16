$(function() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
    navText: [
	  '<span class="fas fa-chevron-circle-left"><</span>',
	  '<span class="fas fa-chevron-circle-right">></span>'
	],
    responsive:{
	  0:{
	    items:1
	  },
	  768:{
	    items:2
	  },
	  1180:{
	    items:3
	  }
	}
  });
  
  function ClickButton() {
		$('.menu').toggleClass('menu_active');
		console.log("123")
	}

	$('.menu-btn').on("click", function(e) {
		ClickButton()
		e.preventDefault;
		$(this).toggleClass("menu-btn-active");
		$('.content').toggleClass("content-active");
	})

	$(".menu-list a").on("click", function(){
		ClickButton()
		$('.menu-btn').toggleClass("menu-btn-active");
	})


	function ModalWindow() {
		$('.login-box').toggleClass('d-n');
	}	

	$('.my-btn, .sub, .login-btn').on('click', function(){
		ModalWindow();
	})
});