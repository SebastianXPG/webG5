let urlApi = "https://g477aee5b0e16e9-dbgrupog5.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room"

function PeticionGet(){
    $.ajax({
        url: urlApi,
        type:'GET',
        dataType: 'json',
        success: function(data){
            console.log(data)

        },
     error: function(xhr, status){
            console.log("Ha sudedido un problema al consumir la Api " + xhr,status + " " + status)
        },
        complete: function(xhr, status){
            console.log("Peticion Realizada Con Exito!!")
        }
    });

}

function PeticionPost(idi,raam,startes,categoria,descripcion){
    $.ajax({
        url: urlApi,
        type:'POST',
        dataType: 'json',
        data:{
            ID: idi,
            ROOM:raam ,
            STARS: startes ,
            CATEGORY_ID: categoria,
            DESCRIPTION: descripcion
            
        },
        success: function(data){
            console.log("Registro guardado con Exito!!")
           

        },
     error: function(xhr, status){
            console.log("Ha sudedido un problema al consumir la Api " + xhr,status + " " + status)
        },
        complete: function(xhr, status){
            console.log("Peticion Realizada Con Exito!!")
        }
    });
}

