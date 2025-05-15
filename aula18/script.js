function aula1(){


        document.write ("<h2> Olá Mundo!</h2> <br>");
        document.write ("<p>javascript é a melhor materia de todas</p>");
        window.alert("Mães Solteiras Na Sua Área");
        document.getElementById('subtitulo').innerHTML= 'O tal do ElementById';
        window.confirm("Está gostando do JS?");
        document.getElementById('resposta').innerHTML = window.confirm('Você está gostando do curso?');
        window.prompt('Qual é o seu nome?')
        document.getElementById('resposta').innerHTML = 'Seu nome:'+ window.prompt('Qual é o seu nome?');
}

        function exibenome() {
                window.alert("Nome digitado foi: " + document.getElementById
                ("nome").value);
                
        }


        function abrepagina() {
                window.open("aulajs2.html")
        }