document.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectorAll('.video-btn');
	const iframe = document.getElementById('main-video');
	buttons.forEach(btn => {
		btn.addEventListener('click', function() {
			const src = btn.getAttribute('data-src');
			iframe.src = src;
		});
	});
});

