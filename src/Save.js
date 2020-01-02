import React, { useState } from 'react'
import styled from 'styled-components'

const Save = ({ onSave }) => {
  const [link, setLink] = useState('')
  const [note, setNote] = useState('')

  return (
    <SaveWrapper>
      <SaveLabel>
        <span>Link</span>
        <input
          type="text"
          value={link}
          onChange={e => setLink(e.target.value)}
        ></input>
      </SaveLabel>
      <SaveLabel>
        <span>Note</span>
        <textarea
          value={note}
          onChange={e => setNote(e.target.value)}
        ></textarea>
      </SaveLabel>
      <SaveButton onClick={() => onSave({ link, note, date: new Date() })}>
        Save
      </SaveButton>
    </SaveWrapper>
  )
}

export default Save

const SaveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;

  *:not(:last-child) {
    margin-bottom: 8px;
  }
`

const SaveLabel = styled.label`
  display: flex;
  flex-direction: column;

  span {
    font-weight: bold;
  }

  textarea {
    height: 100px;
  }
`

const SaveButton = styled.button`
  align-self: flex-end;
`
