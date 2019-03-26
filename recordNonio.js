var pageLoadCheck = setInterval(function () {
    if (document.getElementById('layer_gatting')){
		document.getElementById('layer_gatting').remove()
		
		document.body.style.overflow = 'auto';
		document.documentElement.style.overflow = 'auto';
		
		clearInterval(pageLoadCheck);
	}
}, 1000);
