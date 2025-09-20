
gsap.registerPlugin(SplitText, TextPlugin)


// start -----------------------------------------------------------------------------------//
//
//			#headerのアニメーション
// 



// let headerTl = gsap.timeline({ duration:1.25});;
// headerTl
// .from('#header nav',{ autoAlpha:0, y:-100, duration:0.5},"<")
// .from('#header .hero .text .inset .en', { autoAlpha:0, x:-100 }, "-=0.15")
// .from('#header .hero .text .inset h2', { autoAlpha:0, x:-100 }, "-=0.15")
// .from('#header .page-title .text .inset h1', { autoAlpha:0, y:100 }, "<")
// .from('#header .page-title .text .inset .en p', { autoAlpha:0, y: 120 }, "<")
// .from('#header .hero .swiper-container', { autoAlpha:0, x:200,y:50 }, "-=0.15")
// .from('.guidance', { autoAlpha:0, y:50 })



//-----------------------------------------------------------------------------------//
// 共通のアニメーション

gsap.utils.toArray(".bottom-up").forEach(target => {
	gsap.from(target, {
		scrollTrigger: {
			trigger: target,
			start:'top 60%', // 'start scroller-start'
			// end:'top 20%', // 'end scroller-end'
		},
		opacity: 0,
		yPercent: 100,
		
	});
});

gsap.utils.toArray(".from-left").forEach(target => {
	gsap.from(target, {
		scrollTrigger: {
			trigger: target,
			start:'top 60%', // 'start scroller-start'
			// end:'top 20%', // 'end scroller-end'
		},
		opacity: 0,
		xPercent: -100,
		duration:1.25,
		ease: "power2",
	});
});

gsap.utils.toArray(".from-right").forEach(target => {
	gsap.from(target, {
		scrollTrigger: {
			trigger: target,
			start:'top 60%', // 'start scroller-start'
			// end:'top 20%', // 'end scroller-end'
		},
		opacity: 0,
		xPercent: 100,
		duration:1.25,
		ease: "power2",
	});
});

gsap.utils.toArray(".blur-blur").forEach(target => {
	gsap.from(target, {
		scrollTrigger: {
			trigger: target,
			start:'top 60%', // 'start scroller-start'
			// end:'top 20%', // 'end scroller-end'
		},
		opacity: 0,
		filter: "blur(30px)",
		duration:1.5,
	});
});


// start -----------------------------------------------------------------------------------//
//
//			.whatのアニメーション
//


gsap.set(".what .container .text .sentence", {perspective:400});

WhatTextH2 = new SplitText(".what .container .text h2", {type:"words,chars,lines"}), 
WhatTextH2Chars = WhatTextH2.chars; 


WhatTextSentence = new SplitText(".what .container .text .sentence", {type:"words,chars,lines"}), 
WhatTextSentenceChars = WhatTextSentence.chars; 

gsap.set([WhatTextH2Chars,WhatTextSentenceChars], {autoAlpha:0, scale:0, y:30, rotationX:10});


const whatAnimation= gsap.timeline({
	scrollTrigger: {
		trigger: ".what",
		start:'top 60%', // 'start scroller-start'
	},
});

   
whatAnimation
.from(".what .bg-image", { autoAlpha: 0, filter: "blur(30px)", duration:1.0})
.from(".what .bg-color", { autoAlpha:0, yPercent:100, transformOrigin:"center bottom"},"<=1")  
.from(".what .back p", { autoAlpha:0, y:-100},"<=0.1")
.from(".what .container .mark-wrapper ul li", { autoAlpha:0, y:100, stagger:0.2,},"<")
.to(WhatTextH2Chars,{autoAlpha:1, scale:1, y:0, rotationX:0, stagger:0.04, transformOrigin:"0% 50%",  ease:Power2.easeOut}, "<")
.to(WhatTextSentenceChars,{autoAlpha:1, scale:1, y:0, rotationX:0, stagger:0.01, transformOrigin:"0% 50%",  ease:Power2.easeOut}, "<=0.15")




// start -----------------------------------------------------------------------------------//
//
//			.worksのアニメーション
//

const worksAnimation= gsap.timeline({
	scrollTrigger: {
		trigger: ".works",
		start:'top 45%', // 'start scroller-start
	},
});

worksAnimation
.from(".works .bg", { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, duration:1.75})
.from(".works .title h3",{autoAlpha: 0, y:-50},"<=0.5")
.from(".works .title h2",{autoAlpha: 0, y:50},"<=0.1")
.from(".works .splide",{autoAlpha: 0, y:100,duration:1.5},"<=1")





// start -----------------------------------------------------------------------------------//
//
//			.featureのアニメーション
//

const featureTitleAnimation = gsap.timeline({
	scrollTrigger: {
		trigger: ".feature",
		start:'top 45%', // 'start scroller-start
	},
});

featureTitleAnimation
.from(".feature .container .title .text h3", { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:1.0})
.from(".feature .container .title .text h2", { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:0.75},"<=0.25")
.from(".feature .container .title .thumb", { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, duration:0.75},"-=0.5","<")


let featureBox =gsap.utils.toArray(".feature .container .box-wrapper .box").forEach( (target) => {
	let thumb = target.querySelector(".top .thumb");
	let textEn = target.querySelector(".top .text .en");
	let textH3 = target.querySelector(".top .text h3");
	let textLi = target.querySelectorAll(".top .text ul li");
	let geometory = target.querySelector(".top .text .geometory");
	let sentence = target.querySelector(".bottom .sentence");

	// console.log(thumb,textEn,textH3,textLi,geometory,sentence)
	const featureBoxAnimation = gsap.timeline({
		scrollTrigger: {
			trigger: target,
			start:'top 45%', // 'start scroller-start
		},
	});
	
	featureBoxAnimation
	.from(thumb, { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:1.0})
	.from(textEn, { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:0.75},"<=0.25")
	.from(textH3, { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:0.75},"<=0.25")
	.from(textLi, { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, stagger:0.1, duration:0.75},"-=0.5","<")
	.from(geometory, { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, duration:0.75},"-=0.5","<")
	.from(sentence, { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, duration:0.75},"-=0.5","<")
});



// start -----------------------------------------------------------------------------------//
//
//			.meritのアニメーション
//

const meritTitleAnimation = gsap.timeline({
	scrollTrigger: {
		trigger: ".merit .title",
		start:'top 55%', // 'start scroller-start
	},
});

gsap.set(['.merit .container .title h2','.merit .container .title h3'],{autoAlpha: 0, filter: "blur(30px)", scale:2})


meritTitleAnimation
.to('.merit .container .title h3',{autoAlpha:1, filter:"blur(0px)", scale:1, duration:1.15})
.to('.merit .container .title h2',{autoAlpha:1, filter:"blur(0px)", scale:1, duration:1.15}, "<")



let meritBox =gsap.utils.toArray(".merit .container .box-wrapper .box").forEach( (target) => {
	// console.log(target)
	let thumb1 = target.querySelector(".thumb-wrapper .thumb:nth-child(1)");
	let thumb2 = target.querySelector(".thumb-wrapper .thumb:nth-child(2)");
	let textBack = target.querySelector(".text .back");
	let textSemiTitleNumber = target.querySelector(".text .inset .semi-title .number");
	let textSemiTitleH3 = target.querySelector(".text .inset .semi-title h3");
	let sentence = target.querySelector(".text .inset .sentence");

	console.log(thumb1,thumb2,textBack,textSemiTitleNumber,textSemiTitleH3,sentence)
	const meritBoxAnimation = gsap.timeline({
		scrollTrigger: {
			trigger: target,
			start:'top 45%', // 'start scroller-start
		},
	});
	
	meritBoxAnimation
	.from(thumb1, { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:1.0})
	.from(thumb2, { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, duration:1.0},"<")
	.from(textBack, { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:0.75},"<=0.25")
	.from(textSemiTitleNumber, { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:0.75},"<=0.25")
	.from(textSemiTitleH3, { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, duration:0.75},"<")
	.from(sentence, { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, duration:0.75},"-=0.5","<")
});



// start -----------------------------------------------------------------------------------//
//
//			.priceのアニメーション
//


const priceTitleAnimation = gsap.timeline({
	scrollTrigger: {
		trigger: ".price",
		start:'top 45%', // 'start scroller-start
	},
});



priceTitleAnimation
.from(".price .title .text h3", { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:1.0})
.from(".price .title .text h2", { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:0.75},"<=0.25")
.from(".price .title .thumb", { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, duration:0.75},"-=0.5","<")



gsap.from(".price .container .box-wrapper .box ul li", { //アニメーションさせたい複数の要素に付与されているclass名
	autoAlpha:0,
	y:100,
	filter: "blur(30px)",
	stagger: 0.3,
	duration:0.8,
	scrollTrigger: {
	  trigger: ".price .container .box-wrapper .box ul",
	  start:'top 65%', // 'start scroller-start'
	},

});

gsap.from(".price .container .box-wrapper .box .sentence", { //アニメーションさせたい複数の要素に付与されているclass名
	autoAlpha:0,
	y:100,
	filter: "blur(30px)",
	duration:1.25,
	scrollTrigger: {
	  trigger: ".price .container .box-wrapper .box .sentence",
	  start:'top 75%', // 'start scroller-start'
	},
});


// start -----------------------------------------------------------------------------------//
//
//			.flowのアニメーション
//

const flowTitleAnimation = gsap.timeline({
	scrollTrigger: {
		trigger: ".flow .title",
		start:'top 55%', // 'start scroller-start
	},
});

gsap.set(['.flow .container .title h2','.flow .container .title h3'],{autoAlpha: 0, filter: "blur(30px)", scale:2})


flowTitleAnimation
.to('.flow .container .title h3',{autoAlpha:1, filter:"blur(0px)", scale:1, duration:1.15})
.to('.flow .container .title h2',{autoAlpha:1, filter:"blur(0px)", scale:1, duration:1.15}, "<")



gsap.from(".flow .container .box-wrapper .box", { //アニメーションさせたい複数の要素に付与されているclass名
	autoAlpha:0,
	y:100,
	filter: "blur(30px)",
	stagger:0.3,
	duration:0.75,
	scrollTrigger: {
	  trigger: ".flow .container .box-wrapper",
	  start:'top 60%', // 'start scroller-start'
	},
});

// start -----------------------------------------------------------------------------------//
//
//			.faqのアニメーション
//

const faqTitleAnimation = gsap.timeline({
	scrollTrigger: {
		trigger: ".faq .title",
		start:'top 45%', // 'start scroller-start
	},
});

faqTitleH3 = new SplitText(".faq .container .title h3 .catch", {type:"words,chars,lines"}), 
faqTitleH3Chars = faqTitleH3.chars;

faqTitleH2 = new SplitText(".faq .container .title h2 .catch", {type:"words,chars,lines"}), 
faqTitleH2Chars = faqTitleH2.chars; 

// console.log(faqTitleH2Chars,faqTitleH3Chars)

gsap.set([faqTitleH2Chars,faqTitleH3Chars], {autoAlpha:0, scale:0, y:360, rotationX:10});
gsap.set('.faq .container .box-wrapper .box ul li',{autoAlpha:0,y:100})
faqTitleAnimation
.to(faqTitleH3Chars,{autoAlpha:1, scale:1, y:0, rotationX:0, stagger:0.1, transformOrigin:"0% 50%",  ease:Power2.easeOut})
.to(faqTitleH2Chars,{autoAlpha:1, scale:1, y:0, rotationX:0, stagger:0.03, transformOrigin:"0% 50%",  ease:Power2.easeOut}, "<")



gsap.to(".faq .container .box-wrapper .box ul li", { //アニメーションさせたい複数の要素に付与されているclass名
	autoAlpha:1,
	y:0,
	scrollTrigger: {
	  trigger: ".faq .box-wrapper",
	  start:'top 60%', // 'start scroller-start'
	},
	stagger: 0.2
});






// start -----------------------------------------------------------------------------------//
//
//			.ctaのアニメーション
//

let cta =gsap.utils.toArray(".cta").forEach( (target) => {
	let inner = target.querySelector(".cta .container .inner")
	let h2 = target.querySelector(".cta .container h2");
	let sentence = target.querySelector(".cta .container .inner .block .sentence");
	let blockLi = target.querySelectorAll(".cta .container .inner .block ul li");
	let blockForm = target.querySelectorAll(".cta .container .inner .block .form");


	console.log(h2,sentence,blockLi,blockForm)
	const ctaAnimation = gsap.timeline({
		scrollTrigger: {
			trigger: target,
			start:'top 45%', // 'start scroller-start
		},
	});
	
	ctaAnimation
	.from(inner, { autoAlpha: 0, filter: "blur(60px)", y:100, duration:1.0})
	.from(h2, { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:1.0},"-=0.5")
	.from(sentence, { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:0.75},"<=0.25")
	.from(blockLi, { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, stagger:0.1, duration:0.75},"-=0.5","<")
	.from(blockForm, { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, duration:0.75},"-=0.5","<")
	
});



// start -----------------------------------------------------------------------------------//
//
//			.footerのアニメーション
//

let footerLogoPlane = document.querySelector(".footer .container .top .logo .plane")
let footerLogoWhite = document.querySelector(".footer .container .top .logo .white")

const footerAnimation = gsap.timeline({
	scrollTrigger: {
		trigger: ".footer",
		start:'top 45%', // 'start scroller-start
	},
});

gsap.set('.footer',{ backgroundImage:"linear-gradient(90deg, rgba(210,210,210,1) 0%, rgba(255,255,255,1) 100%)"})
gsap.set(['.footer .container .top nav ul li a','.footer .container .privacy p a','.footer .container .copyright small'],{color:"#111"})
gsap.set(footerLogoWhite,{autoAlpha:0})


footerAnimation
.to(".footer", { backgroundImage:"linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)", duration:1.25})
.to(footerLogoPlane,{autoAlpha:0},"<")
.to('.footer .container .top nav ul li a',{color:"#fff", stagger:0.25},"<=-0.5")
.to(footerLogoWhite,{autoAlpha:1},"<")
.to('.footer .container .privacy p a',{color:"#fff"},"-=0.25")
.to('.footer .container .copyright small',{color:"#fff"},"-=0.25")



// .from(".feature .container .title .text h2", { autoAlpha: 0, filter: "blur(30px)", x:-100, y:100, duration:0.75},"<=0.25")
// .from(".feature .container .title .thumb", { autoAlpha: 0, filter: "blur(30px)", x:100, y:100, duration:0.75},"-=0.5","<")


