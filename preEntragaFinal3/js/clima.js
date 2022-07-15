window.addEventListener('load', ()=>{
    // creando varibles para tomar los datos del navigator
    let lon
    let lat
    // creando los enlaces con los div - modifcar doom

    const temperaturaValor = document.getElementById('temperatura-valor');
    const ubicacion = document.getElementById('ubicacion');


    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0a95948a1d14635df3fd80163aaf8d21`
        
            //console.log(url)
            fetch(url)
            .then( response => { return response.json()})
            .then( data2 => {
                //console.log(data.main.temp)
                let temp = Math.round(data2.main.temp)
                temperaturaValor.textContent = `${temp} ° C`

            })
            .catch(error => {
                console.log(error);
            })
        })
          
    }
})