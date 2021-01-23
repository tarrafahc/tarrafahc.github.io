import React from 'react'

const StudyGroup = props => {
  const { title, description, organizer, forBegginers, date, tags, link } = props.group
  const tagsElements = tags.map(tag => <p className="tag">{tag}</p>)
  const joinButton = link && (
    <a href={link} className="join-button">
      Saiba mais
    </a>
  )
  return (
    <li className="card">
      <h1>{title}</h1>
      <p>
        <strong>{date}</strong>
      </p>
      <div className="card-content">
        <p>{description}</p>
        {joinButton}
        <p>{forBegginers && 'Iniciantes são bem vindos.'}</p>
        <p>Organizado por {organizer}</p>
      </div>
      <div className="tag-container">{tagsElements}</div>
    </li>
  )
}

export default StudyGroup
