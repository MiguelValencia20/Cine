function Drama(){
    let edad = document.getElementById('edad').value
    let recomendacion = document.getElementById('recomendacion')

    if (edad < 13){
        recomendacion.textContent = "El Rey Leon"
    }

    else if(edad >= 13 && edad < 18){
        recomendacion.textContent = "Crueles Intenciones"
    }
    else{
        recomendacion.textContent = "No hay recomendaciones para este genero"
    }
}

function Comedia(){
    let edad = document.getElementById('edad').value
    let recomendacion = document.getElementById('recomendacion')

    if (edad < 13){
        recomendacion.textContent = "Mi pobre angelito"
    }

    else if(edad >= 13 && edad < 18){
        recomendacion.textContent = "American Pie"
    }
    else{
        recomendacion.textContent = "Proyecto X"
    }
}

function Musical(){
    let edad = document.getElementById('edad').value
    let recomendacion = document.getElementById('recomendacion')

    if (edad < 13){
        recomendacion.textContent = "Mary Poppins"
    }

    else if(edad >= 13 && edad < 18){
        recomendacion.textContent = "Vaselina"
    }
    else{
        recomendacion.textContent = "Whiplash"
    }
}

function Crimen(){
    let edad = document.getElementById('edad').value
    let recomendacion = document.getElementById('recomendacion')

    if (edad < 13){
        recomendacion.textContent = "No hay recomendaciones para este genero"
    }

    else if(edad >= 13 && edad < 18){
        recomendacion.textContent = "El padrino"
    }
    else{
        recomendacion.textContent = "El perfecto asesino"
    }
}