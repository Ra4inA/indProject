$(function(){
  $('.slider').slick({    
    	autoplay: true,
    	autoplaySpeed: 2000,    
   	touchThreshold: 10,
		speed: 300,
		draggable: false,
		swipe: false,
		dots: true,
  });
});
$(function(){
  $('.post__img').slick({    
    	autoplay: true,
    	autoplaySpeed: 2000,
    	slidesToShow: 1, 
		arrows: false,
		dots: true,
  });
});

//posts__items

$(function(){
  $('.posts__items').slick({
		arrows: true,
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		 responsive: [
    {
      breakpoint: 900,
      settings: {
      slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      }
    }
  ]
  });
});


$(window).ready(function(){
	if($(window).width() < 991){
		$('.nav__list').append($('.cart'));
		$("nav__list").removeClass("_animate _animate-bottom")
	};

	// if($(this).width < 500) {
	// 	$(".footer__column-title").on("click", function(){

	// 	});
	// }
});

$(window).resize(function(){
	console.log($(this).width());
	if($(this).width() > 990){
		$('.nav__icons').prepend($('.cart'));
		$("nav__list").addClass("_animate _animate-bottom")
	} else{
		$('.nav__list').append($('.cart'));
		$("nav__list").removeClass("_animate _animate-bottom")
	}

	// if($(this).width < 500) {
	// 	$(".footer__column-title").on("click", function(){

	// 	});
	// }
});

$(".projects__tab-btns input").on("change", function(){
	console.log("ya tyt");
	
	let a = $(this).attr("id");
	let projects = $(".project");
	$("#projects__content").css("opacity", "0").animate({"opacity": "1"}, 200);
	for(let i=0; i < projects.length; i++){
		console.log("ya ty1t");
		if(!$(projects[i]).hasClass(a)){
			$(projects[i]).css("display", "none");
			console.log("ya tys1t");
		} else {
			$(projects[i]).css("display", "block");
		}
	}
});

$("#loadMore").on("click", function(event){
	event.preventDefault();
// 	$("#projects__content").load("../projects.html");
})


// let video = $(".presentation__video");
// $(document).ready(function(){
// $("#btnPlay").on("click", function(){
// 	// console.log(video.src());


// 	if (video.paused) { 
//       video.play();
//    } else {
//       video.pause();
//    }
// });	
// })



jQuery( document ).ready(function() {
	$("#btnPlay").on("click", function(){
		$('.presentation__video').trigger("click");
		$(".presentation__overlay").animate({"opacity": "0"}, 500, 
			function(){
				$(this).remove()
			});
	});


	$('.presentation__video').on("click", function() {
      this.paused ? this.play() : this.pause(); $(this).off("click");
      $(this).prop("controls", true);
   }); 
});

$(".footer__column-title").on("click", function(){
	if(!$(this).hasClass("_no-hide")){
		if($(this).next().height() == 0){
			$(this).next().addClass("_show");
		} else {
			$(this).next().removeClass("_show");
		};
	};
});

$("section, footer").css("overflow-x", "hidden"); $(".presentation").css("overflow-x", "visible");
$(".project > div").addClass(" _animate _animate-right _anim-no-hide")
$(".footer__column-wrapper:first div").addClass("_animate _animate-left _anim-no-hide");
$(".footer__column-wrapper_second div").addClass("_animate _animate-right _anim-no-hide");
$("footer.columns div").addClass("_anim");
const animItems = document.querySelectorAll("._animate");
$("body").ready(function(){$(window).scrollTop(1);});
$(window).on("scroll", function(){
	for (let index = 0; index < animItems.length; index++){
		if($(window).scrollTop() + $(window).height() > $(animItems[index]).offset().top + $(animItems[index]).height() / 2 
			& $(window).scrollTop() < $(animItems[index]).offset().top + $(animItems[index]).height() / 2){
			$(animItems[index]).addClass("_animate-Active");
		} else {
			if($(animItems[index]).hasClass("_anim-no-hide") !== true){$(animItems[index]).removeClass("_animate-Active");}
		}
	}
});