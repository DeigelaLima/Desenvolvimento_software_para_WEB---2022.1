<template>
    <div class="col-9 main col-xl-6 col-lg-7 col-md-8 col-sm-9">
        <h5>Home</h5>
        <div class="d-flex flex-row">

            <img src="Images/EU.png" alt="my" class="rounded-circle" id="img-perfil">

            <div class="d-flex flex-column flex-fill">
                <!--caixa de texto-->
                <textarea name="" id="edtTzeeter" rows="5" placeholder="O que você está pensando?"></textarea>
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
                        <span id="txtContadoor"></span>
                        <span>|</span>
                        <a class="plus" href="#"><i class= "bi bi-plus-circle"></i></a>
                        <button class="btn btn-primary search-button" type="submit" id="botaao">Enviar</button>
                    </div>  
                </div>
            </div>
        </div> 
    </div> 
</template>

<script>
import FromTzeet  from "@/components/FormTzeet.vue";

</script>