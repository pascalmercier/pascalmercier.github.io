const overlay = document.createElement('div');
overlay.style.background = 'rgba(255, 255, 255, 0.7)';
overlay.style.position = 'fixed';
overlay.style.left = '0';
overlay.style.top = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.zIndex = '11';
overlay.style.transition = '0.2s ease-out opacity';
overlay.style.backdropFilter = 'blur(2px)';
overlay.style.webkitBackdropFilter = 'blur(2px)';
overlay.style.opacity = '0';
overlay.style.pointerEvents = 'none';

document.body.appendChild(overlay);

document.querySelectorAll('img').forEach(setupZoomableImage);

function setupZoomableImage(image) {
	let isZoomedIn = false;
	image.addEventListener('click', toggleZoom);
	window.addEventListener('scroll', zoomOut);
	image.style.transition = '0.2s ease-out transform';
	image.style.transformOrigin = 'left top';
	image.style.cursor = 'zoom-in';
	image.addEventListener('transitionend', () => {
		if (!isZoomedIn) {
			image.style.zIndex = '';
		}
	})
	overlay.addEventListener('click', zoomOut);

	function toggleZoom() {
		if (isZoomedIn) {
			zoomOut();
			isZoomedIn = false;
			return;
		}
		const rect = image.getBoundingClientRect();

		const targetWidth = Math.min(window.innerWidth, image.naturalWidth);
		const targetHeight = Math.min(window.innerHeight, image.naturalHeight);

		const scaleX = targetWidth / image.clientWidth;
		const scaleY = targetHeight / image.clientHeight;
		const scale = Math.min(scaleX, scaleY);
		const newWidth = image.clientWidth * scale;
		const newHeight = image.clientHeight * scale;

		image.style.transform = `translate(${
			-rect.left + window.innerWidth / 2 - newWidth / 2
		}px, ${
			-rect.top + window.innerHeight / 2 - newHeight / 2
		}px) scale(${scale})`;
		image.style.zIndex = '12';
		image.style.position = 'relative';
		image.style.cursor = 'zoom-out';
		image.style.borderRadius = '.25rem';
		isZoomedIn = true;
		overlay.style.opacity = '1';
		overlay.style.pointerEvents = '';
	}

	function zoomOut() {
		overlay.style.opacity = '0';
		overlay.style.pointerEvents = 'none';
		image.style.transform = '';
		image.style.cursor = 'zoom-in';
		image.style.zIndex = '';
		image.style.borderRadius = '1rem';
	}
}