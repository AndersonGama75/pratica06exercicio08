function listar () {
	var vetor = [];
	
	vetor[0] = document.getElementById("num1").value;
	vetor[1] = document.getElementById("num2").value;
	vetor[2] = document.getElementById("num3").value;
	vetor[3] = document.getElementById("num4").value;
	vetor[4] = document.getElementById("num5").value;

	vetor[0] = parseInt(vetor[0]);
	vetor[1] = parseInt(vetor[1]);
	vetor[2] = parseInt(vetor[2]);
	vetor[3] = parseInt(vetor[3]);
	vetor[4] = parseInt(vetor[4]);



	var n1 = 0;
	
	for (var i = 0; i < vetor.length; i++) {
		n1 += vetor[i];
		if (isNaN(vetor[i])) {
			alert('Você deve digitar somente valores numéricos!');
		}
				
	}

	var n2 = n1 / 5;
	//var n3 = n2.toFixed(1);   // Limitando o número de casas decimais para 1.
	document.getElementById("resposta").innerHTML += 'A média aritmética dos valores informados equivale a: ' + n2;
	
}