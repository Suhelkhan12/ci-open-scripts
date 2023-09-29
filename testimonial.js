function slider1() {
let splides = $('.testimonial-slider');
for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
	new Splide( splides[ i ], {
  // Desktop on down
	perPage: 2.7,
	perMove: 1,
  focus: 0, // 0 = left and 'center' = center
  type: 'slide', // 'loop' or 'slide'
  gap: '2.5rem', // space between slides
  arrows: false, // 'slider' or false
  pagination: 'slider', // 'slider' or false
  speed : 600, // transition speed in miliseconds
  dragAngleThreshold: 30, // default is 30
  autoWidth: false, // for cards with differing widths
  rewind : false, // go back to beginning when reach end
  rewindSpeed : 400,
  waitForTransition : false,
  updateOnMove : true,
  autoplay    : true,
  rewind      : true,
  pauseOnHover: false,
  trimSpace: false, // true removes empty space from end of list
  classes: {
		pagination: 'splide__pagination splide-pagination',
		page      : 'splide__pagination__page splide-pagination-dot',
  },
  breakpoints: {
		991: {
    	perPage:2.5,
      perMove: 1,
      gap: '16px', 
		},
    767: {
    	perPage:1.5,
      perMove: 1,
			gap: '16px', 
		},
    479: {
    	perPage:1.5,
      perMove: 1,
      gap: '16px', 
		}
	}
} ).mount();
}
}

slider1();
