$(document).ready(function(){
    //slider
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1200
      
    });
    //posts
    
    var posts = [
        {
            title: "Prueba de titulo 1",
            date: moment().format('MMMM Do YYYY'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec hendrerit diam, ut laoreet diam. Nulla id eros facilisis, ullamcorper est nec, aliquet purus. Fusce vitae est lacinia ipsum laoreet mattis vitae nec eros. Mauris mattis dolor a turpis tincidunt tempor at finibus metus. Nullam sed ullamcorper lorem, eget ornare dolor. Fusce varius luctus tellus, non molestie mi lacinia non. Cras imperdiet orci urna, sed efficitur augue pharetra non. Cras viverra diam augue, in semper mauris maximus a. Cras quis ante vitae nibh vehicula fermentum eu sit amet magna. Nullam at pharetra tellus, ac pretium tortor. Nunc venenatis lorem vitae lectus bibendum, sit amet mattis turpis aliquam."
        },
        {   title: "Prueba de titulo 2",
            date: moment().format('MMMM Do YYYY'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec hendrerit diam, ut laoreet diam. Nulla id eros facilisis, ullamcorper est nec, aliquet purus. Fusce vitae est lacinia ipsum laoreet mattis vitae nec eros. Mauris mattis dolor a turpis tincidunt tempor at finibus metus. Nullam sed ullamcorper lorem, eget ornare dolor. Fusce varius luctus tellus, non molestie mi lacinia non. Cras imperdiet orci urna, sed efficitur augue pharetra non. Cras viverra diam augue, in semper mauris maximus a. Cras quis ante vitae nibh vehicula fermentum eu sit amet magna. Nullam at pharetra tellus, ac pretium tortor. Nunc venenatis lorem vitae lectus bibendum, sit amet mattis turpis aliquam."
        },
        {
            title: "Prueba de titulo 3",
            date: moment().format('MMMM Do YYYY'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec hendrerit diam, ut laoreet diam. Nulla id eros facilisis, ullamcorper est nec, aliquet purus. Fusce vitae est lacinia ipsum laoreet mattis vitae nec eros. Mauris mattis dolor a turpis tincidunt tempor at finibus metus. Nullam sed ullamcorper lorem, eget ornare dolor. Fusce varius luctus tellus, non molestie mi lacinia non. Cras imperdiet orci urna, sed efficitur augue pharetra non. Cras viverra diam augue, in semper mauris maximus a. Cras quis ante vitae nibh vehicula fermentum eu sit amet magna. Nullam at pharetra tellus, ac pretium tortor. Nunc venenatis lorem vitae lectus bibendum, sit amet mattis turpis aliquam."
        },
        {   title: "Prueba de titulo 4",
            date: moment().format('MMMM Do YYYY'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec hendrerit diam, ut laoreet diam. Nulla id eros facilisis, ullamcorper est nec, aliquet purus. Fusce vitae est lacinia ipsum laoreet mattis vitae nec eros. Mauris mattis dolor a turpis tincidunt tempor at finibus metus. Nullam sed ullamcorper lorem, eget ornare dolor. Fusce varius luctus tellus, non molestie mi lacinia non. Cras imperdiet orci urna, sed efficitur augue pharetra non. Cras viverra diam augue, in semper mauris maximus a. Cras quis ante vitae nibh vehicula fermentum eu sit amet magna. Nullam at pharetra tellus, ac pretium tortor. Nunc venenatis lorem vitae lectus bibendum, sit amet mattis turpis aliquam."
        },
        {
            title: "Prueba de titulo 5",
            date: moment().format('MMMM Do YYYY'),
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec hendrerit diam, ut laoreet diam. Nulla id eros facilisis, ullamcorper est nec, aliquet purus. Fusce vitae est lacinia ipsum laoreet mattis vitae nec eros. Mauris mattis dolor a turpis tincidunt tempor at finibus metus. Nullam sed ullamcorper lorem, eget ornare dolor. Fusce varius luctus tellus, non molestie mi lacinia non. Cras imperdiet orci urna, sed efficitur augue pharetra non. Cras viverra diam augue, in semper mauris maximus a. Cras quis ante vitae nibh vehicula fermentum eu sit amet magna. Nullam at pharetra tellus, ac pretium tortor. Nunc venenatis lorem vitae lectus bibendum, sit amet mattis turpis aliquam."
        }
    ]
    posts.forEach((item, index)=>{
        var post =`
                    <article class="post">
                    <h2>${item.title}</h2>
                    <span class="fecha">Fecha: ${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer Más..</a>
                    </article>
            `
        $("#posts").append(post)
    })
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