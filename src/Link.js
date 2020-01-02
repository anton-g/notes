import React from 'react'
import styled from 'styled-components'

const Link = ({ note }) => {
  return (
    <LinkWrapper>
      <a href={note.link}>{note.title}</a>
      {note.note && <p>{note.note}</p>}
    </LinkWrapper>
  )
}

export default Link

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
