$('.images > img:nth-child(1)').addClass('current')
$('.images > img:nth-child(2)').addClass('enter')
$('.images > img:nth-child(3)').addClass('enter')
$('.images > img:nth-child(4)').addClass('enter')
$('.images > img:nth-child(5)').addClass('enter')

let n = 1
setInterval(() => {
    $(`.images > img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
    .one('transitionend',(e)=>{
        $(e.currentTarget).removeClass('leave').addClass('enter')
    })
    $(`.images > img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current')
    n += 1
},3000)

var IMG = document.querySelectorAll('.images > img')
var p  = IMG.length

function x(n){
    if(n>p){
        n = n%p
        if(n===0){
            n=p
        }
    }
    return n
}