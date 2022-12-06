var animation = lottie.loadAnimation({
    container:document.getElementById('icon'),
    renderer:'svg',
    loop:true,
    autoplay:true,
    path:'assets/animation/data.json',
});

animation.play();
