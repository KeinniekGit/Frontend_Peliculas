let pagina = 1;

function btnSiguiente() {
    pagina += 1;
    cargarPeliculas()
    cargarSeries();
    console.log('Página actual:', pagina);
}

function btnAnterior() {
    if (pagina > 1) { 
        pagina -= 1;
        cargarPeliculas()
        cargarSeries();
        console.log('Página actual:', pagina);
    }
}


const cargarPeliculas= async () => {
    try{
    let respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=8b47248a58cda5780d139672d2213581&language=es-MX&page=${pagina}`)
    if(respuesta.status===200){
    respuesta = await respuesta.json()
    contenedor.innerHTML = '';
    for(i=0; i < respuesta.results.length; i++){
        document.getElementById("contenedor").innerHTML += 
        `<div>
        <img src="https://image.tmdb.org/t/p/w500${respuesta.results[i].poster_path}">   
        <h3>${respuesta.results[i].title}</h3>
        <h3>${respuesta.results[i].release_date}</h3>
        </div>`     
    }}else if(respuesta.status===401){
        console.log("Key invalida")
    }else if(respuesta.status===404){
        console.log("Pagina no encontrada")
    }}catch(Error){
        console.log ("Error")
    }
}
document.addEventListener('DOMContentLoaded', () => {
    cargarPeliculas();
});

const cargarSeries= async ()=>{
    try{
    let respuestaSerie = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=8b47248a58cda5780d139672d2213581&language=es-MX&page=${pagina}`)
    if(respuestaSerie.status===200){
        respuestaSerie = await respuestaSerie.json();
        document.getElementById("contenedorSeries").innerHTML = ''
        for(let i=0;i<respuestaSerie.results.length;i++){
        document.getElementById("contenedorSeries").innerHTML += `<div>
        <img src="https://image.tmdb.org/t/p/w500${respuestaSerie.results[i].poster_path}"> 
        <h3>${respuestaSerie.results[i].name}</h3>
        <h3>${respuestaSerie.results[i].first_air_date}</h3>
        </div>`
        console.log(respuestaSerie.results[i])}
    }else if(respuestaSerie.status===401){
    console.log("Key invalido")
    }else if(respuestaSerie.status===404){
    console.log("Pagina no encontrada")
    }}catch(error){
        console.log("Error al cargar las series:", error)
    }
}
document.addEventListener('DOMContentLoaded', () => {
    cargarSeries();
});

const formularioBtn = document.getElementById('formulario-btn');
formularioBtn.addEventListener('click', function() {
    window.location.href = 'form.html';
});