
gsap.registerPlugin(SplitText, TextPlugin)


// retsiterPlugin
//gsap.registerPlugin(ScrollTrigger);



gsap.registerPlugin(SplitText);

// loading gsap.set()
let splitText = new SplitText('.loading .main', {type: 'chars'});
let taglineSplit = new SplitText(".tagline", {type:"chars, words"})
let loading = document.querySelector(".loading")
let loadingBg = document.querySelector(".loading .bg")
gsap.set(loading , { autoAlpha:1, })


headerH2 = new SplitText(".header .container .first-view .text h2 .catch", {type:"words,chars,lines"}), 
headerH2Words = headerH2.words;

headerH1 = new SplitText(".header .container .first-view .text h1 .catch", {type:"words,chars,lines"}), 
headerH1Chars = headerH1.chars; 

// console.log(faqTitleH2Chars,faqTitleH3Chars)

gsap.set(['.loading .main','.loading .tagline'], {autoAlpha:0});
gsap.set([headerH2Words,headerH1Chars], {autoAlpha:0, y:100, rotationX:5});
gsap.set('.header .container .first-view .text ul li',{autoAlpha:0,y:100})




function openingEffect(){
	let tl = gsap.timeline();

	if (window.innerWidth >= 768) {
		//横幅768px以上（PC、タブレット）に適用させるJavaScriptを記述
		tl
		.to(['.loading .main','.loading .tagline'], {autoAlpha:1,duration:0.01})
		.from(splitText.chars, {opacity: 0, stagger: 0.125,  ease: 'power1.in', duration:0.3 })
		.from(taglineSplit.chars, {opacity: 0, yPercent:0, stagger:0.075, ease: 'power1.in', duration:0.3 },"-=0.15")
		.to(splitText.chars, { opacity: 0, stagger: .125,  ease: 'power3.inOut', duration: .15 }, '+=1')
		.to(taglineSplit.chars, { opacity: 0, stagger: .06,  ease: 'power3.inOut', duration: .25 }, '<')
		.to(loadingBg,{ autoAlpha: 0, yPercent:-100, ease: 'power3.inOut', duration:0.7},'-=0.25')
		.to(loading,{ autoAlpha: 0, ease: 'power3.inOut', duration:0.1, 
			onComplete:function(){
				loading.style.display = "none";
				// document.body.style.overflow = "visible";
			}
		},)
		.from(".header .container nav .logo",{ autoAlpha:0, x:-100, filter: "blur(30px)"})
		.from(".header .container nav ul li",{ autoAlpha:0, y:60, stagger:0.1},"<")
		.to(headerH2Words,{autoAlpha:1, y:0, rotationX:0, stagger:0.05, transformOrigin:"0% 50%",  ease:Power2.easeOut})
		.to(headerH1Chars,{autoAlpha:1, y:0, rotationX:0, stagger:0.025, transformOrigin:"0% 50%",  ease:Power2.easeOut}, "-=0.1")
		.to('.header .container .first-view .text ul li',{autoAlpha:1,y:0,stagger:0.06},"-=0.2")
		.from('.header .container .first-view .text .sentence',{autoAlpha:0,y:100},"-=0.2")
		.from('.header .container .first-view .splide',{autoAlpha:0,y:200,x:200},"<")
		} else {
		//横幅768pxより小さい（スマホ）に適用させるJavaScriptを記述

		// .add(() => { document.body.style.overflow = 'hidden'})
		tl
		.from(splitText.chars, {opacity: 0, stagger: 0.125,  ease: 'power1.in', duration:0.3 })
		.from(taglineSplit.chars, {opacity: 0, yPercent:0, stagger:0.075, ease: 'power1.in', duration:0.3 },"-=0.15")
		.to(splitText.chars, { opacity: 0, stagger: .125,  ease: 'power3.inOut', duration: .15 }, '+=1')
		.to(taglineSplit.chars, { opacity: 0, stagger: .06,  ease: 'power3.inOut', duration: .25 }, '<')
		.to(loadingBg,{ autoAlpha: 0, yPercent:-100, ease: 'power3.inOut', duration:0.7},'-=0.25')
		.to(loading,{ autoAlpha: 0, ease: 'power3.inOut', duration:0.1, 
			onComplete:function(){
				loading.style.display = "none";
				// document.body.style.overflow = "visible";
			}
		},)
		.from(".header .container nav .logo",{ autoAlpha:0, x:-100, filter: "blur(30px)"})
		.from(".header .container nav h1",{ autoAlpha:0, x:100,},"<")
		.from('.header .container .first-view .splide',{autoAlpha:0,y:200,x:200},"<")
		.to(headerH2Words,{autoAlpha:1, y:0, rotationX:0, stagger:0.05, transformOrigin:"0% 50%",  ease:Power2.easeOut})
		.to(headerH1Chars,{autoAlpha:1, y:0, rotationX:0, stagger:0.025, transformOrigin:"0% 50%",  ease:Power2.easeOut}, "-=0.1")
		.to('.header .container .first-view .text ul li',{autoAlpha:1,y:0,stagger:0.06},"-=0.2")
		.from('.header .container .first-view .text .sentence',{autoAlpha:0,y:100},"-=0.2")
	}
}



openingEffect();

