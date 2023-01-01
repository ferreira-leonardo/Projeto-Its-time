const horaCont = document.getElementById("hora-cont")
const minutoCont = document.getElementById("minuto-cont")
const segundoCont = document.getElementById("segundo-cont")

function startContador(){
    setInterval(
        function startContador(){
            segundoCont.innerHTML++

            if(segundoCont.innerHTML == 59){
                segundoCont.innerHTML = 0
                minutoCont.innerHTML++
            } 

            if(minutoCont.innerHTML == 59){
                minutoCont.innerHTML = 0
                horaCont.innerHTML++
            }
        }
    , 1000)

}

function restartContador(){
    location.reload()
}