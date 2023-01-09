const inicio = `
<div class="home borda">
    <h2 class="jargao">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam explicabo corrupti necessitatibus, vel et officiis. Natus
        aliquid a quidem molestiae tempore rerum dignissimos, fugiat eaque quisquam magni velit sit.
    </h2>

    <p class="texto-pequena-descricao">
        O projeto Rio em Forma é um programa de governo do município do Rio de Janeiro que visa promover a saúde e o bem-estar da população através
        de atividades físicas e esportivas. O projeto inclui uma série de atividades ao ar livre, como caminhadas, corridas, aulas de yoga e outros
        exercícios, que são realizadas em diferentes pontos da cidade, como parques, praças e outras áreas verdes. Além disso, o Rio em Forma também
        promove ações de conscientização sobre a importância de uma vida ativa e saudável, através de campanhas de mídia e eventos especiais. O
        projeto tem como objetivo aumentar a qualidade de vida da população e contribuir para a redução de doenças crônicas, como obesidade e
        diabetes, que são cada vez mais prevalentes na cidade.
    </p>
</div>`;

const sobreNos = `
<div class="sobre-nos borda">
  <h1> Sobre Nós</h1>
  <div class="sobre-local">
    <img src="./imagens/image_igreja.jpg" alt="" class="imagem-sobre" />
    <p class="texto-sobre">
      Basilica Imaculado coração de Maria é o local onde ocorre o projeto destacado por este site. O local de realização do projeto ocorre no pátio da
      igreja, que cede o espaço como um gesto de incentivo a saúde dos idosos.
    </p>
  </div>

  <div class="sobre-atividades borda">
  <p class="texto-sobre">
    As dinâmicas são acessíveis a todos e o próprio projeto possui alguns materiais para auxiliar, no entanto recomendamos a compra dos materiais mais
    apropriados e para uso pessoal.
  </p>
  <img src="./imagens/sobreNos_07.png" alt="" class="imagem-sobre" />
  </div>

  <div class="sobre-atividades-2">
    <img src="./imagens/sobreNos_05.png" alt="" class="imagem-sobre" />
    <p class="texto-sobre">
        Muitas dinâmicas utilizam o próprio corpo para focar em trazer consciência corporal, flexibilidade e bem estar para o dia a dia. Além disso, são
        acompanhados por uma profissional da área que orienta mediante a necessidade de cada um, em casos de problemas como articulação, postura ou demais
        questões fisicas.
    </p>
  </div>
</div>`;

const eventos = `
<div class="eventos borda">
    <h1>Sobre Nós</h1>
    <div>
        <img src="imagens/sobreNos_02.png" alt="" class="imagem-eventos" />
        <p class="texto-eventos">
            Um dos eventos que ocorre todo final do mês é o café da manhã coletivo. Onde cada um leva algo para compor o café coletivo, também ocorrem
            dinâmicas de dança para descontrair e manter a constância dos exercícios.
        </p>
    </div>
    <div>
        <p class="texto-eventos">Essa foi uma das aulas especiais feita em na piscina de uma academia local que cedeu espaço para o projeto.</p>
        <img src="imagens/evento_02.png" alt="" class="imagem-eventos" />
    </div>
    <div>
        <img src="imagens/evento_01.png" alt="" class="imagem-eventos" />
        <p class="texto-eventos">Essa foto mostra o primeiro evento de viagem do grupo. A viagem foi para um sitio chamado Jonosake</p>
    </div>
    <div>
        <p class="texto-eventos">Essa foi uma das dinâmicas de festas de final do mês que teve como tema festa junina.</p>
        <img src="imagens/evento_06.png" alt="" class="imagem-eventos" />
    </div>
</div>`;

const equipe = `
<div class="Equipe borda">
    <h1>Equipe</h1>
    <img src="./imagens/MicrosoftTeams-image.png" alt="" class="imagem-equipe borda" />
    <p class="descricao-profissional-equipe borda">
        Está é a professora Mácia. Formada em Educação Física, com grande experiência na área de musculação e aulas coletivas.
    </p>
    <p class="funcao-equipe borda">
        Dentro do projeto ela é a professora e instrutora fisica. Ela está responsável por organizar as dinâmicas e orientar um exercício mais
        adequado, diante da necessidade do aluno.
    </p>
</div>`;

const contato = `
<div class="contato borda">
    <h1>Contatos</h1>
    <img src="./imagens/evento_04.png" alt="" class="imagem-contato" />
    <ul>
        <li class="rede-social">
            <a href="#"><i scr="https://cdn-icons-png.flaticon.com/512/87/87390.png"></i></a>
        </li>
        <li class="rede-social">
            <a href="#"><i></i></a>
        </li>
        <li class="rede-social">
            <a href="#"><i></i></a>
        </li>
    </ul>    
</div>`;

const pages = {
  home: inicio,
  about: sobreNos,
  events: eventos,
  staff: equipe,
  contact: contato,
};

window.addEventListener("load", function () {
  const content = document.querySelector(".content");
  content.innerHTML = pages["home"];

  document.querySelector(".home").addEventListener("click", pageSelected);
  document.querySelector(".about").addEventListener("click", pageSelected);
  document.querySelector(".events").addEventListener("click", pageSelected);
  document.querySelector(".staff").addEventListener("click", pageSelected);
  document.querySelector(".contact").addEventListener("click", pageSelected);

  function pageSelected(e) {
    let currentPage = e.target.className;
    console.log(currentPage);
    content.innerHTML = pages[currentPage];
  }
});
