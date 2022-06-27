function habitBotao(){

    const nomeInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const btnBotao = document.getElementById("botao");
    botao.disabled = true; // o botão começa desabilitado.
    
    document.addEventListener("keyup", () => {
        if(nomeInput.value.length > 0 && senhaInput.value.length > 0){
            btnBotao.disabled = false;  
        }
    })
}

habitBotao();



//Pegar o elemento input email
    //pegar o elemento input password
    //pegar o botao
    
    //ouvir o evento teclagem keyUp(){
        //verificar se o input.email.value.lenth
        //input.passward.value.lenth > 0
        //se for > 0 habita o botao
    //}