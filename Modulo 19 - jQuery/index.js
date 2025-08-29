// queda rojo igualmente, porque esto es un inline style
$("h1").css("color", "red");

// mejor manera, para mantener separation of concerns:
$("h1").addClass("big-title");


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

console.log($("h1").hasClass("big-title"));