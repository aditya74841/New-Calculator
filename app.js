
var element = document.getElementById("add");
element.addEventListener('click', add);
function add() {
    var a, b, c;
    a = Number(document.getElementById("First").value);
    b = Number(document.getElementById("Second").value);
    c = a + b;
    document.getElementById("Answer").value = c;
    document.getElementById("demo1").innerHTML = "Answer after adding is: " + c;
}




element = document.getElementById("sub");
element.addEventListener('click', substract);

function substract() {
    var a, b, c;
    a = Number(document.getElementById("First").value);
    b = Number(document.getElementById("Second").value);
    c = a - b;
    document.getElementById("Answer").value = c;
    document.getElementById("demo2").innerHTML = "Answer after substract is: " + c;
}





element = document.getElementById("mul");
element.addEventListener('click', () => {
    var a, b, c;
    a = Number(document.getElementById("First").value);
    b = Number(document.getElementById("Second").value);
    c = a * b;
    document.getElementById("Answer").value = c;
    document.getElementById("demo3").innerHTML = "Answer after multiply is: " + c;
})

element = document.getElementById("res");
element.addEventListener('click', () => {
    var a, b, c;
    a = 0;
    b = 0
    c = 0;
    document.getElementById("Answer").value = c;
    document.getElementById("First").value = a;
    document.getElementById("Second").value = b;

})



element = document.getElementById("div");
element.addEventListener('click', () => {
    var a, b, c;
    a = Number(document.getElementById("First").value);
    b = Number(document.getElementById("Second").value);
    c = a / b;
    document.getElementById("Answer").value = c;
    document.getElementById("demo4").innerHTML = "Answer after divide is: " + c;
})

