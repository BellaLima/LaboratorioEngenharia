document.querySelector("#envioPalavra").addEventListener('click', function(e){

    let palavra = document.querySelector("#campoPalavra").value;

    let palavrasemespaco = palavra.replace(/\s+/g, '').toLowerCase();

    let palavrainvertida = Reverse_String(palavrasemespaco);

    if(palavrasemespaco == palavrainvertida){
        alert(`A palvra/frase: (${palavra}) é um Palindromo`);
    }else{
        alert(`A palvra/frase: (${palavra}) NÃO é um Palindromo`);
    }

})

function Reverse_String(str){
    
    let toarray = str.split("");

    let reverseArray = toarray.reverse();

    let tostring = reverseArray.join("");

    return tostring;
}