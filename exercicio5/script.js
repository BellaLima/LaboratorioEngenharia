function conferePalavra(palavra){
	let reverse = palavra.split('').reverse().join('');
	if (palavra = reverse) {
		document.write('é um palíndromo')
	} else{
		document.write('não é um palíndromo')
	}
}
let palavra = document.getElementById('campoPalavra');
envioPalavra.addEventListener('click', conferirPalavra(palavra));

/* SPLIT divide a string em substring e coloca numa array e o retorna;
REVERSE inverte os itens de uma array
JOIN junta os elementos da array em uma stringe retorna essa string */