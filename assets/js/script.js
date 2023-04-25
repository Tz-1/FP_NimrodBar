$(document).ready(function(){
    
    $("#tocomu").click(function(){
        $("#comu").removeClass("d-none d-sm-none d-md-none");
    })

    $("#torese").click(function(){
        $("#rese").removeClass("d-none d-sm-none d-md-none");
    })

    $("#button1").click(function(){
        var namu = $("#formNameInput").val()
        var emairu = $("#forminputEmail").val()

        if(namu == ""){
            alert("El campo Nombre es obligatorio")
        } else if (emairu == ""){
                alert("El campo Correo es obligatorio")
                } else alert("Muchas gracias " + namu + " hemos recibido su sugerencia y enviaremos una pronta respuesta al correo " + emairu)
    
    })

    $("#button2").click(function(){
        var namu2 = $("#formNameInput2").val()
        var emairu2 = $("#forminputEmail2").val()
        var assist2 = $("#typeNumber").val()

        if(namu2 == ""){
            alert("El campo Nombre es obligatorio")
        } else if (emairu2 == ""){
                alert("El campo Correo es obligatorio")
                } else alert("Estimada: " + namu2 + " agradecemos por reservar con nosotros. Hemos registrado " + assist2 + " asistentes. Se ha enviado el codigo de confirmacion al correo " + emairu2 + " Gracias por preferirnos")
    })

    

});


