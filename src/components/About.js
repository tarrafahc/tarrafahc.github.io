import React from "react";

const About = () => {
  return (
    <div>
      <h1>Sobre o Tarrafa</h1>
      <p>
        O #Tarrafa é um{" "}
        <a href="http://pt.wikipedia.org/wiki/Hackerspace">Hackerspace</a>{" "}
        situado em{" "}
        <a href="http://pt.wikipedia.org/Florian%C3%B3polis">Florianópolis</a>.
        Somos um laboratório comunitário, espaço onde pessoas com interesses em
        comum, frequentemente em tecnologia, ciência, arte digital e eletrônica,
        política, matemática, biologia, arquitetura, segurança, e qualquer área
        do conhecimento humano, podem se encontrar, compartilhar conhecimentos e
        colaborar em projetos conjuntos.
        <strong>
          {" "}
          Se você tem interesse no Tarrafa, sugerimos que entre em nossa{" "}
          <a href="https://lists.riseup.net/www/info/tarrafahackerclube">
            lista
          </a>
        </strong>{" "}
        (migramos para o RiseUp!). Também pedimos que ao entrar pra lista, você
        se apresente, diga seu nome, de onde é, quais seus interesses, se deseja
        participar do Tarrafa, o que gostaria de ver, que tipo de atividade
        gostaria de participar ou de propor no Tarrafa, enfim, fale um pouco
        sobre si.
      </p>
      <p>
        Participe também das reuniões mensais, que ocorrem sempre na última
        quarta-feira de cada mês. Se desejar ser membro, recomendamos fortemente
        a participação nas reuniões é um bom começo, a menos é claro que a
        distância seja muita e impossibilite sua participação. Caso contrário
        encorajamos muito a sua vinda ao Tarrafa, que atualmente localiza-se no{" "}
        <a href="https://www.google.com.br/maps/place/Pavilhinho,+Florian%C3%B3polis+-+SC/">
          Pavilhinho da ARQ
        </a>
        .
      </p>
      <p>
        <strong>
          <em>Happy hacking!</em>
        </strong>
      </p>
    </div>
  );
};

export default About;
