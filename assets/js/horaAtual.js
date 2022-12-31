const horas = document.getElementById('hora')
const minutos = document.getElementById('minuto')
const segundos = document.getElementById('segundo')

const relogio = setInterval( function time(){
    let timeToday = new Date()
    let horaAtual = timeToday.getHours()
    let minAtual = timeToday.getMinutes()
    let segAtual = timeToday.getSeconds()

    horas.innerHTML = horaAtual
    minutos.innerHTML = minAtual
    segundos.innerHTML = segAtual

    if(horaAtual < 10){
        horas.innerHTML = "0" + horaAtual
    }

    if(minAtual < 10){
        minutos.innerHTML = "0" + minAtual
    }

    if(segAtual < 10){
        segundos.innerHTML = "0" + segAtual
    }
})