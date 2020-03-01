import React from 'react'
import Emoji from '../Emoji'

const AboutHack = () => {
  return (
    <div>
      <h1>
        <Emoji symbol="💾" label="floppy disk" /> Sobre a Cultura Hacker
      </h1>
      <p>
        {' '}
        Esta cultura teve origem na busca incansável por aprendizado e entendimento da relação dos computadores com as
        pessoas, e como essa relação poderia afetar o mundo, até mesmo o nosso mundo particular. O principio da cultura
        hacker e sua filosofia originaram-se no Instituto de Tecnologia de Massachusetts como apresentado no início
        desta postagem. Uma cultura de certa forma acaba tendo um “modus operandi” e uma filosofia essencial embutida em
        suas práticas e comportamento, nascendo daí uma ética. No caso dos hackers foi atribuído o termo Ética Hacker
        pelo jornalista Steven Levy, descrito em seu livro{' '}
        <a href="http://www.stevenlevy.com/index.php/books/hackers" target="_blank" rel="noopener noreferrer">
          Hackers: Heroes of the Computer Revolution
        </a>{' '}
        publicado em 1984 e neste{' '}
        <a href="https://www.youtube.com/watch?v=w_jwcCseDk0" target="_blank" rel="noopener noreferrer">
          vídeo
        </a>
        . O ponto chave da ética é o livre acesso a informação e melhoria da qualidade de vida. Alguns princípios já
        tinham sido descritos em 1974 por Theodor Nelson, mas aparentemente foi Levy o primeiro a documentar a filosofia
        e seus fundadores. Estes princípios foram os primeiros a serem debatidos, mas ainda até hoje vem sendo
        discutidos, rebatidos, afirmados, reafirmados, comparados, enfim, está em constante evolução, pois a essência é
        o ser humano, que chega a ser “subjetivo”, e não a máquina.
      </p>
      <strong>Os 7 princípios descritos por Levy:</strong>
      <ul>
        <li>O acesso aos computadores deve ser total e ilimitado;</li>
        <li>Toda a informação deve ser livre e utilizada por qualquer pessoa;</li>
        <li>Todo o hacker tem o dever de partilhar o seu conhecimento com a comunidade e fora dela;</li>
        <li>As economias devem ser descentralizadas e as autoridades devem ser desacreditadas;</li>
        <li>
          Os hackers devem ser julgados pelas suas capacidade de hacking e não por qualquer outro tipo de critérios
          discriminatórios;
        </li>
        <li>Pode criar-se arte e beleza através de um computador;</li>
        <li>Os computadores podem mudar a vida para melhor.</li>
      </ul>
      <p>
        A Cultura Hacker transcendeu e vai para muito além da semântica. Não fica restrita apenas ao ambiente da
        tecnologia ou dos computadores. Posso arriscar que tudo que envolve busca do conhecimento para entender o
        propósito de algo e depois modificar e/ou melhorar para aplicá-lo, buscando um resultado melhor, seja com
        perspectivas pessoais ou coletivas é um hack, portanto quem o faz é um hacker.
      </p>
      Trecho retirado de{' '}
      <a href="https://www.foxlab.com.br/a-cultura-hacker/">https://www.foxlab.com.br/a-cultura-hacker/</a>
    </div>
  )
}

export default AboutHack
