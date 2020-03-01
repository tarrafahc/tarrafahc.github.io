import React from 'react'

const StudyGroup = props => {
  const { title, description, organizer, forBegginers, date, tags } = props.group
  const tagsElements = tags.map(tag => <p className="tag">{tag}</p>)
  return (
    <li className="card">
      <h3>{title}</h3>
      <h4>{date}</h4>
      <p>{description}</p>
      <p>{forBegginers && 'Iniciantes são bem vindos.'}</p>
      <p>Organizado por {organizer}</p>
      <div className="tag-container">{tagsElements}</div>
    </li>
  )
}

export default StudyGroup
