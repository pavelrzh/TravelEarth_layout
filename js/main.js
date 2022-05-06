const swiper1 = document.querySelector('.slider2'),
			swiper2 =document.querySelector('.slider1'),
			burger = document.querySelector('.checkboxburger'),
			menu = document.querySelector ('.menu'),
			close = document.querySelector('.menu__close'),
			playBtn1 = document.querySelectorAll('.swiper-slide__play'),
			playBtn2 = document.querySelectorAll('.slide-play');

// slider
let slider1 = new Swiper(swiper1, {
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	spaceBetween: 105,
	threshold: 7,
});
let slider2 = new Swiper(swiper2, {
	slidesPerView: 1,
	centeredSlides: true,
	loop: true,
	spaceBetween: 10,
	threshold: 7,
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	navigation: {
		nextEl: '.btn-right',
		prevEl: '.btn-left',
	},
});

// burger
burger.addEventListener('click', () => {
	menu.classList.toggle('menu--visible');
});

//slider1 video
playBtn1.forEach((el) => {
	el.addEventListener('click', (e) =>{
		let video = e.currentTarget.closest('.swiper-slide__media').querySelector('video');
		if (video.paused) {
			video.play();
			e.currentTarget.style.opacity = '0.5';
		} else {
			video.pause();
			e.currentTarget.style.opacity = '1';
		}
		//video.play();
		// e.currentTarget.style.display = 'block';
	});
});

slider2.on('transitionEnd', function () {
	let videos = document.querySelectorAll('.first__slider video');
	videos.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	playBtn1.forEach((el) => {
		el.style.opacity = '1';
	});
});

//slider2 video
playBtn2.forEach((el) => {
	el.addEventListener('click', (e) =>{
		let video = e.currentTarget.closest('.swiper-slide').querySelector('video');
		if (video.paused) {
			video.play();
			e.currentTarget.style.opacity = '0.5';
		} else {
			video.pause();
			e.currentTarget.style.opacity = '1';
		}
	});
});
slider1.on('transitionEnd', function () {
	let videos = document.querySelectorAll('.slider2 video');
	videos.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	playBtn2.forEach((el) => {
		el.style.opacity = '1';
	});
});


// inputMask
let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);


// validate forms
let validateForms = function(selector, rules) {

	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function (form, values, ajax) {
			let formData = new FormData(form);

			let xhr = new XMLHttpRequest();


			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {

					if (xhr.status === 200) {
						console.log('Отправлено!');
					} else {

					}
				}
			};

			// Add any event handlers here...
			xhr.open('POST', "mail.php", true);
            xhr.send(formData);

            form.reset();
		},
	});
};

validateForms('.newsletter__form', { email: { required: true, email: true }, tel: { required: true } });
validateForms('.subs-form', { email: { required: true, email: true } });
