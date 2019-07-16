import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Bem vindo ao site do Tarrafa!</h2>
      <p>
        O Tarrafa possui um porteiro eletrônico, mas precisamos revisar ele pra
        fazer funcionar novamente :p
      </p>
      <p>
        Por enquanto você pode nos {<Link to="/about">conhecer</Link>} um pouco
        mais ou ver o que temos de {<Link to="/calendar">atividades</Link>}!
      </p>
      <h5>Teste do porteiro:</h5>
      <img
        alt="botabiarra"
        className="img-thumbnail rounded user-picture"
        src="https://raw.githubusercontent.com/tarrafahc/botaobiarra/master/status.png"
      />
    </div>
  );
};

export default Home;
