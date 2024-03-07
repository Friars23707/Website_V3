window.addEventListener('scroll', function() {
    var wScroll = window.pageYOffset;
    var img = document.querySelector('.parallax-slider');
    img.style.transform = 'translateY(' + wScroll / -2 + 'px)';
    console.log(wScroll);
    console.log(img);
});