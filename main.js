let n

getInit()

setInterval(() => {
    makeLeave(getImage(n))
    .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
    n += 1
},3000)






// -----------------------

function x(n){
    var IMG = document.querySelectorAll('.images > img')
    var p  = IMG.length
    if(n>p){
        n = n%p
        if(n===0){
            n=p
        }
    }
    return n
}

function getInit(){
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}

function getImage(n){
    return $(`.images > img:nth-child(${x(n)})`)
}

function makeCurrent($node){
    return $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node){
    return $node.removeClass('enter current').addClass('leave')
}
function makeEnter($node){
    return $node.removeClass('leave current').addClass('enter')
}