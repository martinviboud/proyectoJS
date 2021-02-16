$(document).ready(function(){
    //
    
    
    
    //selector de tema
    var theme = $("#theme")
    $("#togreen").click(function(){
        theme.attr("href", "estilos/green.css")
    })
    $("#tored").click(function(){
        theme.attr("href", "estilos/red.css")
    })
    $("#toblue").click(function(){
        theme.attr("href", "estilos/blue.css")
    })
    //scroll parriba
    $(".subir").click(function(e){
        e.preventDefault()

        $("html, body").animate({
            scrollTop: 0
        }, 500)
        return false;
    })
    //formulario
    $("#login form").submit(function(){
        var form_name = $("#form-name").val();
        localStorage.setItem("form-name", form_name)
    })
    var form_name = localStorage.getItem("form-name")
    if(form_name == null){
        return false
    }else if(form_name != null){
        
        $("#about p").html("Bienvenido: "+ form_name+"<br><a href'#' id='logout'>Cerrar Sesión</a>");
    }
    $("#logout").click(function(){
        localStorage.clear()
        location.reload();
    })
    
  });