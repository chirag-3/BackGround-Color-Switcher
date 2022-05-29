
let e1 = document.getElementById('yellow');
let e2 = document.getElementById('orange');
let e3 = document.getElementById('blue');
let e4 = document.getElementById('green');

e1.addEventListener('click',changeColor);
e2.addEventListener('click',changeColor);
e3.addEventListener('click',changeColor);
e4.addEventListener('click',changeColor);

function changeColor(){
    let current_id = this.id;
    document.getElementsByTagName('body')[0].style.cssText += "background-color:"+current_id;
}