import React, { useRef } from "react";
import YouTube from "react-youtube";
import foto from './assets/foto.jpg'
import lua from './assets/lua.svg'
import js from './assets/js.png'
import html from './assets/html.png'
import css from './assets/css.png'
import insta from './assets/insta.png'
import react from './assets/react.png'
import linkeding from './assets/linkedin.png'
import discord from './assets/discord.png'
import youtube from './assets/youtube.png'
import colegio from './assets/star.png'
import faculdade from './assets/faculdade.png'
import './App.css'

function App() {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const inicio = useRef(null);
  const sobre = useRef(null);
  const formacao = useRef(null);
  const projetos = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header>
        <div className='espaco'>
          <img className='foto' src={foto} alt="" />
          <div className='infos'>
            <div>Fabrício Peres</div>
            <div>20 Anos</div>
            <div>Osasco - SP</div>
            <div className='email' onClick={() => openInNewTab("https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTfrJdcqWjtDQmppDpcGPwrxVnblVSWlDClZJMFSbSDxQSXlHNFztZpzzqkhqxdrKqLNB")}>fabricioperesdsantos@gmail.com</div>
          </div>
        </div>

        <div className="options">
          <div className="options2">
            <div onClick={() => scrollToSection(inicio)}>Inicio</div>
          </div>
          <div className="options2">
            <div onClick={() => scrollToSection(sobre)}>Sobre mim</div>
          </div>
          <div className="options2">
            <div onClick={() => scrollToSection(formacao)}>Formação</div>
          </div>
          <div className="options2">
            <div onClick={() => scrollToSection(projetos)}>Projetos</div>
          </div>
        </div>
      </header>

      <div className='pagina'>
        <div className='pro' ref={inicio}>
          <div className='cards'>
            <div className='tituloCards'>
              <img className='logoCards' src={lua} alt=""/>
              <div className='nomeLinguagem'>Lingaguem Lua</div>
            </div>

            <div className='textoCards'>
              A Linguagem Lua aprendi a mais de 3 anos. Utilizo ela para programar Scripts para cidades de FIVEM ou GTA RolePlay, com isso adquiri experiências de lógica de programação, além de habilidades para programar em Lua. Realizo serviços para cidades de FIVEM à 2 anos, criando diversos scripts sendo Lua Back-End e de interface utilizo html, css e javascript. Tenho um amplo conhecimento de lua aplicavel dentro do FIVEM e também um conhecimento de programação Lua fora do FIVEM.
            </div>
          </div>
          <div className='cards'>
          <div className='tituloCards'>
              <img className='logoCards' src={js} alt=""/>
              <div className='nomeLinguagem'>Lingaguem Javascript</div>
            </div>

            <div className='textoCards'>
              A Linguagem JavaScript aprendi à mais de 1 ano atrás. Utilizo ela para a criação da lógica e integração dos sistemas do html, como troca de abas e inserção de dados vindo da back-end. Um dos projetos realizados com javascript foi a criação front-end para o FIVEM como sistema de inventário (mochila) do jogador, com draggable para movimentação de itens e também utilizo para requisitar e receber informações da back-end para alterar a front-end para cada pessoa conforme o que ela possui pelos metodos post.
            </div>
          </div>
          <div className='cards'>
          <div className='tituloCards'>
              <img className='logoCards' src={react} alt=""/>
              <div className='nomeLinguagem'>Bibioteca React</div>
            </div>

            <div className='textoCards'>
              A Biblioteca do React é um dos meus novos estudos sendo realizados. Utilizando ele a mais de 1 mês, aprendi com ele a facilidade e rapidez para criação de front-end. Utilizei o mesmo para a criação de um site de demonstração de produtos e também a criação deste site. Estou iniciando estudos para a utilização dele com uma back-end para utilização de banco de dados para criação de um sistema de loja com criação e adição de itens, adição de estoque, verificação do estoque e compra do item.
            </div>
          </div>
        </div>

        <div className='sobreMim' ref={sobre}>
          <div className='sobreMimCard'>
            <img className='fotoSobreMim' src={foto} alt="" />
            <div className='descSobreMim'>
              <div className='tituloSobreMim'>Sobre Mim</div>
              <div className='textoSobreMim'>Com experiência em atendimento ao cliente virtual desde os 15 anos, desenvolvi fortes habilidades de comunicação e resolução de problemas. Aos 17 anos, iniciei minha jornada na programação, especializando-me em Lua, JavaScript e SQL. Atualmente, trabalho como programador freelancer, utilizando essas linguagens para desenvolver soluções personalizadas. Também possuo conhecimentos em Python e Java, embora minha experiência prática seja maior em Lua, JavaScript e SQL. Ao longo de 2 anos de atuação profissional, adquiri sólida experiência em desenvolvimento de sistemas e gestão de bancos de dados.</div>
            </div>
          </div>
        </div>

        <div className="formacao" ref={formacao}>
          <div className="formacaCard" onClick={() => openInNewTab("https://www.colegiostarmax.com.br")}>
            <div className="tituloFormacao">
              <img className="fotoFormacao" src={colegio} alt="" />
              <div className="tituloText">Ensino Médio</div>
            </div>

            <div className="textoFormacao">Com ínicio no ano de 2019, estudei o ensino médio no colégio star max, que estudei do 1° ano ao 3° ano. Finalizei os estudos no colégio star max em 2021. Dentro do raking das escolas de Osasco, ela esta em 4° lugar e também foi 2° lugar no ranking. Com ensino focado para FUVEST, ela possui uma taxa alta de aprovação dos seus alunos em faculdades.</div>
          </div>
          <div className="formacaCard" onClick={() => openInNewTab("https://www.usjt.br")}>
            <div className="tituloFormacao">
              <img className="fotoFormacao" src={faculdade} alt="" />
              <div className="tituloText">Ensino Superior</div>
            </div>

            <div className="textoFormacao">Com ínicio no ano de 2022 e finalização em 2025, estudei matérias como: Modelagem de Software, Analise de Dados e Big Data, Inteligencia Artificial, Gestão e Qualidade de Software, Modelos, Métodos e Técnicas da engenharia de Software entre outras. Com isso aprendi lógica de programação tanto em java quanto em python. Aprendi a criação utilizando o banco de MySQL, criação das tabelas e como utiliza-lás. Também aprendi como devemos iniciar e desenvolver um software, seguindo o padrão para que o software saia o melhor possível e com a menor quantidade de bugs possíveis.</div>
          </div>
        </div>

        <div className="projetos" ref={projetos}>
          <div className="projetosCard">
            <div className="tituloProjeto">Inventário</div>
            <div className="textoProjeto">Sistema de Inventário criado para visualização dos itens dos jogadores. É requisitado via post para a back-end (lua) os itens do jogador e posteriormente pelo javascript, ocorre a adição de uma linha no html com as informações recebida. Também é Utilizado draggable para que o jogador possa visualizar quando estiver mexendo com o item.</div>
            <YouTube className="videoProjeto" videoId={"F0nvAkWIkDY"} />
          </div>
          <div className="projetosCard">
          <div className="tituloProjeto">Tablet Policial</div>
            <div className="textoProjeto">Sistema de Tablet Policial criado para facilitar os oficiais em suas ações. No sistema utiliza Multi Select onde é possível escolher mais de uma opção como os oficiais envolvidos, podendo deixar mais completo as escolhas e mais ageis. Também possui sistema básico de crop em área definida, que será melhorado para que o usuário possa editar o tamanho.</div>
            <YouTube className="videoProjeto" videoId={"tprUTCMIjB8"} />
          </div>
        </div>
      </div>
      
      <footer>
        <div className='redes'>
          <div className='textos' onClick={() => openInNewTab("https://www.instagram.com/fah.peres/")}> 
            <img className='fotoRedes' src={insta} alt=""/> <div>Instagram</div>
          </div>
          <div className='textos' onClick={() => openInNewTab("www.linkedin.com/in/devperes")}>
            <img className='fotoRedes' src={linkeding} alt=""/><div>Linkedin</div>
          </div>
          <div className='textos' onClick={() => openInNewTab("https://discord.gg/maze-store-2k-937899788735746129")}>
            <img className='fotoRedes' src={discord} alt=""/><div>#PeresDev</div>
          </div>
          <div className='textos' onClick={() => openInNewTab("https://www.youtube.com/channel/UCE1aRatx6tBbKGN7oO2F8qw")}>
            <img className='fotoRedes' src={youtube} alt=""/><div>Youtube</div>
          </div>
        </div>

        <div className='Linguagens'>
          <img className='fotoLinguagens' src={lua} alt="" />
          <img className='fotoLinguagens' src={js} alt="" />
          <img className='fotoLinguagens' src={html} alt="" />
          <img className='fotoLinguagens' src={css} alt="" />
        </div>
      </footer>
    </>
  )
}

export default App
