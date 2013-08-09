window.onhashchange = function () {
	var s = document.getElementById('slogn'),
		i = document.getElementById('intro'),
		l = location.hash.split('#')[1]

	if (l === undefined) {
		s.style.display = 'block'
		i.style.display = 'none'
	} else if (l === 'about') {
		s.style.display = 'none'
		i.style.display = 'block'	
	} else {
		s.style.display = 'block'
		i.style.display = 'none'
	}
}