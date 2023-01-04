const horaCont = document.getElementById("hora-cont")
const minutoCont = document.getElementById("minuto-cont")
const segundoCont = document.getElementById("segundo-cont")

let ativeIntervalCont;

function startContador(){
    
    //Reseta o setInterval "ativeInterval" 
    if(localStorage.getItem("ativeIntervalCont") == 1){
        clearInterval(ativeIntervalCont)
        localStorage.setItem("ativeIntervalCont", 0)
    
    }

    ativeIntervalCont = setInterval(
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


    localStorage.setItem("ativeIntervalCont", 1)
}

function restartContador(){
    location.reload()
}