const edtTzeet = document.getElementById("edtTzeet")
const txtContador = document.getElementById("txtContador")
const botao = document.getElementById("botao")

//função para tratar eventos de mudança em um campo text
function onTextChange(event){
    const currentText = event.target.value // texto atual
    const charCount = currentText.length // tamanho do texto atual na caixa
    const missingCharCount = 140 - charCount // limite de letras restantes
    
    txtContador.innerText = (
        !charCount ? "":
        (missingCharCount > 0) ? 
        `Restam ${missingCharCount} letras` :
        `Ultrapassou ${Math.abs(missingCharCount)} letras`
    )
    txtContador.classList.remove("warning", "danger")

    botao.disabled = (charCount <= 0) ? true : false
        if(missingCharCount < 40){
            txtContador.classList.add("warning")//aviso//alerta
        }
        if(missingCharCount < 0){//se utrapassou o n° de letras o numero é negativo
            txtContador.classList.add("danger")
            botao.disabled = true
        }
}
botao.disabled = true // o botão já vai começar desabilitado
edtTzeet.onchange = onTextChange



