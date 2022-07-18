<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" id="btnFechar" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex flex-row flex-fill">
                        <img src="Images/EU.png" alt="my" class="rounded-circle" id="img-perfil">

                        <div class="largura">
                            <!--caixa de texto-->
                            <textarea class="largura" name="" id="edtTzeet" rows="5" placeholder="O que você está pensando?"></textarea>

                            <div>
                                <!--link globo-->
                                <a href="#" class="glob"><i class="bi bi-globe"></i><b>Everyone can replay</b></a><hr>
                            </div>
                        
                            <div class="d-flex flex-row justify-content-between">
                                <!--icones-->
                                <div>
                                    <a class="image" href="#"><i class="bi bi-card-image"></i></a><!--image-->
                                    <a class="gif" href="#"><i class="bi bi-filetype-gif"></i></a><!--gif-->
                                    <a class="emoji" href="#"><i class="bi bi-emoji-smile"></i></a><!--emoji-->
                                    <a class="grafico" href="#"><i class="bi bi-bar-chart"></i></a><!--grafico-->
                                    <a class="calendar" href="#"><i class="bi bi-calendar-event"></i></a><!--calendar-->
                                    <a class="localiza" href="#"><i class="bi bi-geo-alt"></i></a><!--localiza-->
                                </div>
                                <!--plus +-->
                                <!--botao enviar-->
                                <div>
                                    <span id="txtContador"></span>
                                    <span>|</span>
                                    <a class="plus" href="#"><i class= "bi bi-plus-circle"></i></a>
                                    <button class="btn btn-primary search-button" type="submit" id="botao">Enviar</button>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
import { mounted } from vue;
import FormTzeet from "./FromTzeet.vue"

mounted(() => {
    const exampleModal = document.getElementById("exampleModal");
    const btnFechar = document.getElementById("btnFechar"); 

    btnFechar.onclick = function(){
        exampleModal.style.display = "none";
    };
});

</script>