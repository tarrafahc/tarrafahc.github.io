import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Emoji from '../components/atoms/Emoji'

const Home = () => {
  return (
    <div className={styles.body}>

      <main className={styles.highlightedText}>
        <h2>
          <Emoji symbol="🐟" label="fish" /> Bem vindo ao site do Tarrafa!
        </h2>
        <p>O Tarrafa possui um porteiro eletrônico, mas precisamos revisar ele pra fazer funcionar novamente :p</p>
        <p>
          Por enquanto você pode nos {<Link href="/about"><a>conhecer</a></Link>} um pouco mais ou ver o que temos de{' '}
          {<Link href="/activities"><a> atividades</a></Link>}!
        </p>
        <p>
          Participe da nossa <a href="https://lists.riseup.net/www/info/tarrafahackerclube">lista de email</a>!
        </p>
        <h5>Teste do porteiro:</h5>
        <img
          alt="botabiarra"
          className="img-thumbnail rounded user-picture"
          src="https://raw.githubusercontent.com/tarrafahc/botaobiarra/master/status.png"
        />
      </main>
    </div>
  )
}

export default Home
