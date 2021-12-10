function validacion_campos_vacios(var_campo){
    if (var_campo == ""){
        return true;
    }
}

$("#formulario_1").submit(function(e){

    let var_nombre = $("#nombre").val();
    let var_apellido = $("#apellido").val();
    
    //console.log("nombre: " + var_nombre);
    //console.log("apellido: " + var_apellido);

    let var_check_nombre = validacion_campos_vacios(var_nombre);
    let var_check_apellido = validacion_campos_vacios(var_apellido);

    console.log("var_check_nombre: " + var_check_nombre);
    console.log("var_check_apellido: " + var_check_apellido);

    if (var_check_nombre){
        $("#nombre_cliente").css("color","red");
        console.log("nombre vacio");
    }

    if (var_check_apellido){
        $("#apellido_cliente").css("color","red");
        console.log("apellido vacio");
    }

    if (var_check_nombre|| var_check_apellido){
        event.preventDefault();
    }
});

$("#nombre").on("input",function(e){

    console.log($("#nombre").val());
    $("#nombre_cliente").css("color","black");

});

$("#apellido").on("input",function(e){
    console.log($("#apellido").val());
    $("#apellido_cliente").css("color","black");

});