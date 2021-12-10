function validacion_nombre(){
    let campoNombre=document.getElementById("nombre");
    if (campoNombre.value == ""){
        return true;
    }
}

function validacion_apellido(){
    let campoApellido=document.getElementById("apellido");
    if (campoApellido.value == ""){
        return true;
    }
}

document.getElementById("formulario_1").addEventListener("submit",
    function(event){
        if (validacion_nombre()){
            document.getElementById("nombre_cliente").style.color ="red";
        }

        if (validacion_apellido()){
        document.getElementById("apellido_cliente").style.color ="red";
        }

        if (validacion_nombre() || validacion_apellido()){
            event.preventDefault();
        }
    }
);
