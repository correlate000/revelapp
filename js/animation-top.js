

//-----------------------------------------------------------------------------------//
// 「診療案内」のアニメーション treatment


gsap.from(".outpatient .wrapper .box .category ul li", { //アニメーションさせたい複数の要素に付与されているclass名
	autoAlpha:0,
	y:100,
	scrollTrigger: {
	  trigger: ".outpatient .wrapper .box .category",
	  start:'top 60%', // 'start scroller-start'
	},
	stagger: 0.2
});


