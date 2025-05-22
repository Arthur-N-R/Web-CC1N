function bananas() {
    var idade = parseInt(document.getElementById("idade").value)
    var resultado = document.getElementById("resultado")
if (idade < 0) 
    {
        resultado.textContent = "Idade Inválida!"
    }
else if (idade == 0)
    {
        resultado.textContent = "Você é Recém Nascido"
    }
else if (idade > 0 && idade < 10) 
    {
        resultado.textContent = "Você é Criança!"
    }
else if (idade >= 10 && idade < 16) 
    {
        resultado.textContent = "Você é Adolescente!"
    }
else if (idade >= 16  && idade < 25) 
    {
        resultado.textContent = "Você é Jovem!"
    }
else if (idade >= 25 && idade < 60)
    {
        resultado.textContent = "Você é Adulto!"
    }
else if (idade >= 60 && idade < 100)
    {
        resultado.textContent = "Você é Idoso!"
    }
else if (idade > 100)
    {
        resultado.textContent = "Você Está Morto."
    }
}