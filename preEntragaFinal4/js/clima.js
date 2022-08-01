const temperaturaValor = document.getElementById('temperatura-valor');  
const temperaturaDescripcion = document.getElementById('temperatura-descripcion');
const ubicacion = document.getElementById('ubicacion'); 

window.addEventListener('load', ()=> {
    let lon
    let lat



    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {

           lon = posicion.coords.longitude
           lat = posicion.coords.latitude

           const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&units=metric&appid=0a95948a1d14635df3fd80163aaf8d21`



           fetch(url)
            .then(( response) => response.json())
            .then((data) =>{
                
                
                let temp = Math.round(data.main.temp)
                

                temperaturaValor.textContent = `${temp} ° C`

                
                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()
                ubicacion.textContent = data.name
                


            })
            .catch( error => {
                console.log(error)
            })
       })
          
    }
})