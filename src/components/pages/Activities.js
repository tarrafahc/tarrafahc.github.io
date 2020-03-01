import React from 'react'
import StudyGroup from '../cards/StudyGroup'
import Emoji from '../Emoji'

const Activities = () => {
  const studyGroups = [
    {
      title: 'C e Linux',
      description:
        'Utilizando exemplos de código e jogos como Bandit, estudamos a línguagem C e exploramos o functionamento do Linux.',
      forBegginers: true,
      organizer: 'Gustavo Dutra',
      date: 'Terças das 19:00 às 22:00',
      tags: ['c', 'linux', 'bandit'],
    },
    {
      title: 'Tarrafa WebDev',
      description: 'Trocamos conhecimentos sobre desenvolvimento web e Javascript',
      forBegginers: true,
      organizer: 'Mark',
      date: 'Quartas das 19:30 às 21h:30',
      tags: ['javascript', 'web'],
      link: 'https://t.me/tarrafawebdev',
    },
    {
      title: 'Quintas dos pentestes',
      description: 'Estudamos segurança de software com plataformas como HackTheBoxEU e TryHackMe',
      organizer: 'Gustavo Dutra',
      date: 'Quintas das 19:00 às 22:00',
      tags: ['cyber security', 'pentest'],
    },
  ]
  const studyGroupCards = studyGroups.map(group => <StudyGroup group={group} />)
  return (
    <article>
      <h1>
        <Emoji symbol="📅" label="calendar" /> Agenda do Tarrafa
      </h1>

      <p>Grupos de estudos rolando:</p>
      <ul className="card-container">{studyGroupCards}</ul>
      <p>*Confirme na agenda abaixo os dias exatos dos encontros</p>

      <h2>Agenda</h2>
      <div id="calendar">
        <iframe
          title="calendar"
          src="https://calendar.google.com/calendar/embed?src=p1u60bfuqm5joi5eau3l37003o%40group.calendar.google.com&ctz=America%2FSao_Paulo"
          width="800"
          height="600"
          align="center"
        />
      </div>
      <p>Estamos querendo a migrar a nossa agenda para alguma alternativa.</p>
      <p>
        Contribua com a discussão na <a href="https://lists.riseup.net/www/info/tarrafahackerclube">lista de email</a>{' '}
        do Tarrafa.
      </p>
    </article>
  )
}

export default Activities
