// queda rojo igualmente, porque esto es un inline style
$("h1").css("color", "red");
titulo = $("h1")

// mejor manera, para mantener separation of concerns:
titulo.addClass("big-title");

titulo.click(() => console.log("h1 was clicked"));

// Todos los bottones pasan a tener eventListener para click :D
$("button").on(
    "click", 
    () => {
        $("h1").toggle(500);
    }
);

// espero un ratito y saco la clase
setTimeout(
    () => $("h1").removeClass("big-title"),
    3000
);

setTimeout(
    () => $("h1").addClass("medium-title margin-50"),
    6000
);

setTimeout(
    () => $("h1").text("bye bye!"),
    9000
);

setTimeout(
    () => $("button").html("<em>Click me!!</em>"),
    12000
);

$("a").attr("href","https://www.google.com")

$("input").on(
    "keypress",
    function (event) {
        $("h1").text(event.key);
    }
);

// agrego contenido dinamicamente
$("h1").before("<button>new button</button>");

// quito contenido dinamicamente
setTimeout(
    () => $("button").remove(),
    15000
);

console.log($("h1").hasClass("big-title"));