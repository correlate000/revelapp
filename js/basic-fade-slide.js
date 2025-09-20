// すべての basic-fade-slide クラスを持つ ul 要素を選択
const ulElements = document.querySelectorAll('.basic-fade-slide');

// アニメーション処理を関数として定義
const animateItems = (tl, items) => {
    // Check if there is more than one item
    if (items.length > 1) {
        items.forEach((item, index) => {
            tl.to(item, {
                duration: 1.25,
                autoAlpha: 1,
                // onStart: () => item.classList.add('active'), // Add class when fade-in starts
                // onComplete: () => item.classList.remove('active') // Remove class when fade-in ends
            }, ">-0.5")
            // .to(item, {
            //     duration: 1.85,
            //     scale: 1.25,
            // }, "<+0.1")
            .to({}, { duration: 1.6 }) // Do nothing
            .to(item, {
                duration: 1.25,
                autoAlpha: 0,
                sacle: 1.0,
            }, "+=0.5"); // Fade-out
        });
    } else {
        // もしも、画像が1枚の場合は、そのまま表示(フェードさせない)
        gsap.set(items[0], { autoAlpha: 1 });
    }
};


ulElements.forEach(ul => {
	// GSAPタイムラインを作成
	const delay = ul.dataset.delay ? parseFloat(ul.dataset.delay) : 0;
	const tl = gsap.timeline({ repeat: -1, delay: delay }); // 繰り返し設定と遅延設定
	const listItems = gsap.utils.toArray(ul.querySelectorAll('li'));

	// アニメーションを適用
	animateItems(tl, listItems);
});