import React from 'react'
import StudyGroup from '../cards/StudyGroup'

const Activities = () => {
  const studyGroups = [
    {
      title: 'C e Linux',
      description:
        'Utilizando exemplos de código e jogos como Bandit, estudamos a línguagem C e exploramos o functionamento do Linux.',
      forBegginers: true,
      organizer: 'Gustavo Dutra',
      date: 'Terças 19h-22h',
      tags: ['c', 'linux', 'bandit'],
    },
    {
      title: 'Tarrafa WebDev',
      description: 'Trocamos conhecimentos sobre desenvolvimento web e Javascript',
      forBegginers: true,
      organizer: 'Marcelo "Mark" Kopmann',
      date: 'Quartas 19:30-21:30',
      tags: ['javascript', 'web development', 'vue', 'react'],
    },
    {
      title: 'Quintas dos pentestes',
      description: 'Estudamos segurança de software com plataformas como HackTheBoxEU e TryHackMe',
      organizer: 'Gustavo Dutra',
      date: 'Quintas 19h-22h',
      tags: ['cyber security', 'penetration testing'],
    },
  ]
  return (
    <article>
      <h1>Agenda do Tarrafa</h1>

      <h2>Grupos de estudos</h2>
      <p>Atualmente temos {studyGroups.length} grupos de estudo disponíveis:</p>
      <ul>
        {studyGroups.map(group => (
          <StudyGroup group={group} />
        ))}
      </ul>

      <h2>Agenda</h2>
      <iframe
        title="calendar"
        src="https://calendar.google.com/calendar/embed?src=p1u60bfuqm5joi5eau3l37003o%40group.calendar.google.com&ctz=America%2FSao_Paulo"
        width="800"
        height="600"
        scrolling="no"
      />
      <p>Estamos querendo a migrar a nossa agenda para alguma alternativa.</p>
      <p>
        Contribua com a discussão na <a href="https://lists.riseup.net/www/info/tarrafahackerclube">lista de email</a>{' '}
        do Tarrafa.
      </p>
    </article>
  )
}

export default Activities
