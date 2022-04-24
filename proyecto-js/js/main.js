$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1){
        
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1600,
            responsive: true
            // pager: false //puntos
          });

    }

    //  Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                tittle: 'Prueba de  titulo 1',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui quis consequatur quae perspiciatis ad molestias optio libero recusandae. Dignissimos ea tempora debitis assumenda voluptas corporis temporibus repudiandae rerum. Voluptate.'
            },
            {
                tittle: 'Prueba de  titulo 2',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui quis consequatur quae perspiciatis ad molestias optio libero recusandae. Dignissimos ea tempora debitis assumenda voluptas corporis temporibus repudiandae rerum. Voluptate.'
            },
            {
                tittle: 'Prueba de  titulo 3',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui quis consequatur quae perspiciatis ad molestias optio libero recusandae. Dignissimos ea tempora debitis assumenda voluptas corporis temporibus repudiandae rerum. Voluptate.'
            },
            {
                tittle: 'Prueba de  titulo 4',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui quis consequatur quae perspiciatis ad molestias optio libero recusandae. Dignissimos ea tempora debitis assumenda voluptas corporis temporibus repudiandae rerum. Voluptate.'
            },
            {
                tittle: 'Prueba de  titulo 5',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat qui quis consequatur quae perspiciatis ad molestias optio libero recusandae. Dignissimos ea tempora debitis assumenda voluptas corporis temporibus repudiandae rerum. Voluptate.'
            }
        ];
        posts.forEach((item, index) => {
            var post = `
            <article class="post">
                        <h2>${item.tittle}</h2>
                        <span class="date">${item.date}</span>
                        <p>
                            ${item.content}
                        </p>
                        <a href="#" class="button-more">Leer más</a>
                </article> 
            `;
            $("#posts").append(post);
        });
    }

    // Selector de tema
    var theme = $("#theme");
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });

    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0 //sube a lo alto de la página
        }, 500);
        return false;
    });

    // Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        
        localStorage.setItem("form_name", form_name);
    });
  
    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a  href='#' id='logout'>cerrar sesión</a>");
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeon 
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){
        
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000); 

    }

    // Validación
    //Ejecutamos las validaciones del plugin
    if(window.location.href.indexOf('contact') > -1){ //para que solo sirva en la página de contacto
        
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yyyy'
        });

        $.validate({
            lang: 'en',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });

    }
});