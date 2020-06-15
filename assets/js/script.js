function mult(a,b){
    return a*b;
}

function calcula(){
    let multi = document.getElementsByClassName('valor');
    let resultados = [];

    for(let item of multi){
        let valores = item.innerHTML.split("x");
        resultados.push(mult(valores[0], valores[1]));
    }

    for(let item of resultados){
        console.log(item);
    }

    for(let i = 0; i < document.getElementsByClassName('result').length; i++){
        document.getElementsByClassName('result')[i].innerHTML = resultados[i];
    }
}

function start() {
    let resultados = document.getElementsByClassName('result');
    
    for(let item of resultados){
        console.log(item.innerHTML);
    }

    calcula();
}

start();