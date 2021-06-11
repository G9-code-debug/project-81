var mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx =  canvas;
ctx.getContext("2d");
color = "black";
width = 2;
function mymousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown") {
        console.log(" current position of x and y coordinates = ");
        console.log(" x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linWidth = width;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,0 , 2*Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup() {
    mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(){
    mouseEvent = "mouseleave";
}
//Additional Activity//
function clearArea() {
    ctx.clearRect(0, 0, ctx.canavs.width, ctx.canvas.height);
}
