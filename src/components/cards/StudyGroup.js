import React from 'react'

const StudyGroup = props => {
  const { title, description, organizer, forBegginers, date, tags } = props.group
  return (
    <li className="group">
      <h3>{title}</h3>
      <h4>{date}</h4>
      <p>{description}</p>
      <p>{forBegginers && 'Iniciantes são bem vindos.'}</p>
      <p>Organizado por {organizer}</p>
      {tags && <p className="tags">Tags: {tags.join(' | ')}</p>}
    </li>
  )
}

export default StudyGroup
