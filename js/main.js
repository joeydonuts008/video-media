document.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectorAll('.video-btn');
	const iframe = document.getElementById('main-video');
		buttons.forEach((btn, idx) => {
		btn.addEventListener('click', function() {
			let src = btn.getAttribute('data-src');
			
			if (src.includes('?')) {
				src += 'videoplayback (1).mp4';
			} else {
				src += '?autoplay=1';
			}
			iframe.src = src;
		});
	});
		
		let autoCycleStarted = false;
		function startAutoCycle() {
			if (!autoCycleStarted && typeof player !== 'undefined') {
				autoCycleStarted = true;
				playVideoAtIndex(currentIndex);
			} else if (!autoCycleStarted) {
				setTimeout(startAutoCycle, 200);
			}
		}
		startAutoCycle();
});

