const random_color = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)] 
    }
    return color;
}


let body = document.querySelector('body')


document.querySelector('#start').addEventListener('click', ()=>{
    var int_id = setInterval(() => {
        let r_col = (random_color());
        console.log("ch");
        
        body.style = `background-color : ${r_col}`;
}, 1000);

document.querySelector('#stop').addEventListener('click', ()=>{
    clearInterval(int_id);
})

})
