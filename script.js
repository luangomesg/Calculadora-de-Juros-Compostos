const btn = document.querySelector(".calculate");
const span = document.querySelector(".total")

btn.addEventListener("click", ()=>{
    const value = document.getElementById("value").value;
    const fee = (document.getElementById("fee").value) / 100;
    const time= document.getElementById("time"). value;

    span.innerHTML = "R$: ";
    
    let total = value * (1 + fee)**time;
    
    span.innerHTML += total.toFixed(2).replace(".", ",");
})