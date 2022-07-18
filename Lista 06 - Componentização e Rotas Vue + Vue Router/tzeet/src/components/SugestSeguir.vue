<template>
    <div class="col-xl-3 col-lg-3 col-md-3 d-none d-sm-block d-sm-none d-md-block">
            <br><br>
            <div class="input-group d-flex align-self-center inp">
                <div class="input-group-prepend">
                    <div class="input-group-text rounded " id="btnGroupAddon"><i class="bi bi-search"></i></div>
                </div>
                
                <input  type="text" class="form-control bg-light search-button" placeholder="Username" label="" aria-describedby="btnGroupAddon">
            </div>
            
            <br>
            <div class="foloow">
                <div>
                    <b class="margin5">Talvez você curta</b>
                </div>
                <div class="d-flex flex-column justify-content-between">
                    <div class="fut_friends d-flex flex-row justify-content-between cady">
                        <img src="Images/Carlos.jpeg" alt="friend" class="rounded-circle margin3" width="48"> 
                        <a class="align-self-end flex-fill bd-highligh text-center margin" href="#">Carlos</a> 
                        <button class="btn btn-primary margin2" type="submit">Seguir</button>
                    </div>

                    <div class="fut_friends d-flex flex-row justify-content-between cady">
                        <img src="Images/Stef.jpeg" alt="friend" class="rounded-circle margin3" width="48">
                        <a class="align-self-end flex-fill bd-highlight text-center margin" href="#">Stef</a>
                        <button class="btn btn-primary margin2" type="submit">Seguir</button>
                    </div>
                    
                    <div class="fut_friends d-flex flex-row justify-content-between cady">
                        <img src="Images/Velton.jpeg" alt="friend" class="rounded-circle margin3" width="48">
                        <a class="align-self-end flex-fill bd-highlight text-center margin" href="#">Velton</a>
                        <button class="btn btn-primary margin2" type="submit">Seguir</button>
                    </div>
                </div>

                <div>
                    <a href="#" class="margin4">Mostrar mais</a>
                </div>
            </div>
        </div>
</template>

