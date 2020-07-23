/*
var nome = "macarrao";
var numero = 10
var numero2 = 44
alert(numero + numero2);
console.log(nome);
console.log(numero + numero2);
*/

/*var lista = ["macarrao", "peixe", "linguado"];
//lista.pop()
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" ~~ "));
//lista.push("bee boo");
//console.log(lista.reverse());
//////////-''resverse'' é pra botar a lista em decrecente
//console.log(lista.length);
//////////-''lenght'' é pra monstrar quantos na lista
///alert(lista[1])
*/

/*
var misturas = [{nome:"camarao", cor:"rosa"},{nome:"humano", cor:"arco-iris"}]
console.log(misturas);
alert(misturas[1].cor);
*/

/*
var idade = prompt("quantos anos");
if (idade >= 18){
    alert("tu ta liberado");
}else{
    alert("nope, volte mais tarde bebe");
};
*/

/*
var count =0;
while (count <=5){
    console.log(count);
    count++;
};
*/

/*
var count;
for(count=1; count <=5; count++){
    alert(count);
}
*/

/*
var d = new Date();
alert(d.getHours());
/////////se tu apenas colocar alert(d); vai monstrar tudo sobre horario
*/

/*
function soma(n1, n2){
    return n1 + n2;
} 
function setreplace(frase, nome, new_nome){
    return frase.replace(nome, new_nome)
}
alert(soma(10, 80));
alert(setreplace("podemos comer", "EXPLOSAO"));
//////esse ultimo eu ainda nao sei por que que nao aparece "podemos comer EXPLOSAO"...
*/

/*function validade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("pegue a sua idade");
console.log(validade(idade));
*/

////agora monstrando isso de outra maneira
/*
var validar = 0

////se quiser colocar o "= 0" é claro

funcion validade(idade){
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

////isso faz o ''var validar'' ficar GLOBALMENTE 
*/

//////e assim q tiver um BOTAO...
function clicou(){
 //   alert("que coma mais peixes");
document.getElementById("agradecimento").innerHTML = "<b>que possa comer mais peixes</b>";
}

function redirencionar(){
//    window.open("file:///C:/Users/Daniel%20Filho/projeto-curso-git/index.html");
    window.location.href = "https://hsreplay.net/";
}
////agora eu posso redirencionar os sites tuudo

function trocar(elemento){
    /////se quiser botar as coisas com o mesmo ''elemento''
    //    document.getElementById("mousemove").innerHTML = "mi";
   elemento.innerHTML = "mi";
    //   alert("trocar texto");
}

function voltar(elemento){
    //    document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
   elemento.innerHTML = "passe o mouse aqui";
}

function load(){
 alert("carregando...");
}

function funcaochange(elemento){
    console.log(elemento.value);
}