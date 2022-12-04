
// lista de cartas
var carta1 = {
    nome: "Tiranossauro Rex",
    imagem: "https://www.imagemhost.com.br/images/2022/03/19/card-1.png",
    atributos: {
      ataque: 10,
      defesa: 8,
      velocidade: 7
    }
  }

  var carta2 = {
    nome: "Velociraptores",
    imagem: "https://www.imagemhost.com.br/images/2022/03/19/card-2.png",
    atributos: {
      ataque: 10,
      defesa: 9,
      velocidade: 10
    }
  }

  var carta3 = {
    nome: "Pteranodonte",
    imagem: "https://www.imagemhost.com.br/images/2022/03/19/card-3.png",
    atributos: {
      ataque: 7,
      defesa: 10,
      velocidade: 9
    }
  }

  var carta4 = {
    nome: "Braquiossauro",
    imagem: "https://www.imagemhost.com.br/images/2022/03/19/card-4.png",
    atributos: {
      ataque: 6,
      defesa: 6,
      velocidade: 5
    }
  }

  var carta5 = {
    nome: "Indominus Rex",
    imagem: "https://www.imagemhost.com.br/images/2022/03/19/card-5.png",
    atributos: {
      ataque: 10,
      defesa: 8,
      velocidade: 9
    }
  }

  var carta6 = {
    nome: "Mosassauro",
    imagem: "https://www.imagemhost.com.br/images/2022/03/19/card-6.png",
    atributos: {
      ataque: 8,
      defesa: 9,
      velocidade: 8
    }
  }
  
  
  var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
  var cartaMaquina;
  var cartaJogador;
  
  // função de sortear
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 6)
    cartaMaquina = cartas[numeroCartaMaquina]
    console.log(cartaMaquina)
  
    var numeroCartaJogador = parseInt(Math.random() * 6)
    while (numeroCartaMaquina == numeroCartaJogador) {
      var numeroCartaJogador = parseInt(Math.random() * 6)
    }
    cartaJogador = cartas[numeroCartaJogador]
  
    // habilitar e desabilitar os botões
    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false
    exibirOpcoes();
    exibirCartaJogador()
    exibirCartaMaquina()
    new Audio('https://s19.aconvert.com/convert/p3r68-cdx67/x3jtz-be8lz.mp3').play();
  }
  // exibir atributos
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'checked >" + atributo
      opcoes.innerHTML = opcoesTexto
    }
    // style dos atributos
    document.getElementById("opcoes").style.backgroundColor = '#3e4e3f';
    document.getElementById("opcoes").style.border = '2px solid #000';
  }
  
  // função para pegar o atributo selecionado no radio 
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value
      }
    }
  }
  // função do botão jogar
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    var divResultado = document.getElementById("resultado")
    exibirCartaMaquina()
    if (valorCartaJogador > valorCartaMaquina) {
      htmlResultado = "Você venceu."
    } else if (valorCartaMaquina > valorCartaJogador) {
      htmlResultado = "Você perdeu. Escolha melhor da proxima vez."
    } else {
      htmlResultado = "Empate :P"
    }
    divResultado.innerHTML = htmlResultado
    // habilitar e desabilitar os botões
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnSortear").disabled = false
    document.getElementById("link").disabled = false
  
  }
  
  
  // função para exibir a carta do jogador
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.innerHTML = "<img src='" + cartaJogador.imagem + "'>"
  }
  // função para exibir a carta da Máquina
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.innerHTML = "<img src='" + cartaMaquina.imagem + "'>"
  }
  
  // função para mostrar a carta da máquina apenas quando o
  // atributo for selecionado e o jogador clicar em Jogar 
  const botao = document.querySelector(".botao");
  function mostrar() {
    const cartaMaquina = document.querySelector(".none");
    cartaMaquina.classList.toggle('ativar');
  }
  botao.addEventListener('click', mostrar);
  