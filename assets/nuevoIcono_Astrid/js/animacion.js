var animacion = lottie.loadAnimation({
    container:document.getElementById('icon'),
    renderer:'svg',
    loop:'true',
    autoplay:true,
    path:'animacion/data.json',
});

let button = document.getElementById('icon');
button.addEventListener('click',()=>{
    animacion.play();
})