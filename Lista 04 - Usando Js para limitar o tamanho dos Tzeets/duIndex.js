function duOnTextChange(){
    const edtTzeeter = document.getElementById("edtTzeeter")
    const txtContadoor = document.getElementById("txtContadoor")
    const botaao = document.getElementById("botaao")

    
    document.addEventListener('keyup', function(){
        const currentText = edtTzeeter.value // texto atual
        const charCount = currentText.length // tamanho do texto atual na caixa
        const missingCharCount = 140 - charCount // limite de letras restantes

        console.log(charCount)
        edtTzeeter.style.height = "auto"
        edtTzeeter.style.height = (edtTzeeter.scrollHeight) + "px" //flexibilizar a caixa de texto 
        
        txtContadoor.innerText = (
            !charCount ? "":
            (missingCharCount > 0) ? 
            `${missingCharCount}` :
            `${missingCharCount}`
        )
        txtContadoor.classList.remove("warning", "danger")

        botaao.disabled = (charCount <= 0) ? true : false
            if(missingCharCount < 40){
                txtContadoor.classList.add("warning")//aviso//alerta
            }
            if(missingCharCount < 0){//se utrapassou o n° de letras o numero é negativo
                txtContadoor.classList.add("danger")
                botaao.disabled = true
            }
    })
    botaao.disabled = true // o botão já vai começar desabilitado
    edtTzeeter.onkeyup = onTextChange
}

duOnTextChange()