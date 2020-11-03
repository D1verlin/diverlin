	let d;
	let text = document.getElementById('text');
	let b1 = document.getElementById('b1');
	let i1 = document.getElementById('i1');
	let a1 = document.getElementById('a1');

	b1.onmouseenter = function() {
		i1.style.filter = 'brightness(0.1)';
		a1.style.color = 'var(--hover-one)';
		d = 1;
		if (d = 1) {
			text.classList.add('h1');
		} 
	}

	b1.onmouseleave = function() {
		i1.style.filter = '';
		a1.style.color = '';
		d = 0;
		text.classList.toggle('h1');

	}


	/// первый блок ↑↑↑

	let b2 = document.getElementById('b2');
	let i2 = document.getElementById('i2');
	let a2 = document.getElementById('a2');

	b2.onmouseenter = function() {
		i2.style.filter = 'brightness(0.1)';
		a2.style.color = 'var(--hover-two)';
		d = 1;
		if (d = 1) {
			text.classList.add('h2');
		} 

	}

	b2.onmouseleave = function() {
		i2.style.filter = '';
		a2.style.color = '';
		d = 0;
		text.classList.toggle('h2');
	}
	/// второй блок ↑↑↑
	let b3 = document.getElementById('b3');
	let i3 = document.getElementById('i3');
	let a3 = document.getElementById('a3');

	b3.onmouseenter = function() {
		i3.style.filter = 'brightness(0.1)';
		a3.style.color = 'var(--hover-three)';
			d = 1;
		if (d = 1) {
			text.classList.add('h3');
		} 
	}

	b3.onmouseleave = function() {
		i3.style.filter = '';
		a3.style.color = '';
		d = 0;
		text.classList.toggle('h3');
	}
	/// третий блок ↑↑↑



