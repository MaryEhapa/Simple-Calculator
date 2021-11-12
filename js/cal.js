// clear
document.querySelector("#clear").addEventListener("click", ()=>{
    document.querySelector("#display").value ="";
})

function nvalue (number){
    document.getElementById("display").value+=number
}
function equals (){
    let x = document.getElementById ("display").value
    let y = eval(x)
    document.getElementById("display").value=y
}




