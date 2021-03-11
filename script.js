
var addBtn = document.querySelector('#add-btn')
var box = document.querySelector('.box')
var box2 = document.querySelector('.box2')

var width1 = 1;
var width2 = 1;


document.body.addEventListener('keydown',function(event){
    if(event.key == 'w'){
        width1++
        box.style.left = `${width1}px`
    }
    else if(event.key == 'ArrowUp'){
        width2++
        box2.style.left = `${width2}px`
    }
})




