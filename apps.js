for(let i=1 ; i <= 10  ; i++){
    output.innerHTML += `<br>`

    for(let j=1 ; j <= 10 ; j++){
        output.innerHTML += `${i} x ${j} = ${i*j}<br/>`
   
} 
}
const p = document.getElementById("output")