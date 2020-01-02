import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Save from './Save'

test('renders link input', () => {
  const { getByLabelText } = render(<Save />)
  const linkInputElement = getByLabelText('Link')
  expect(linkInputElement).toBeInTheDocument()
})

test('renders note input', () => {
  const { getByLabelText } = render(<Save />)
  const noteInputElement = getByLabelText('Note')
  expect(noteInputElement).toBeInTheDocument()
})

test('renders save button', () => {
  const { getByText } = render(<Save />)
  const saveButtonElement = getByText('Save')
  expect(saveButtonElement).toBeInTheDocument()
})

test('calls onSave on save button click', () => {
  const onSave = jest.fn()
  const { getByText, getByLabelText } = render(<Save onSave={onSave} />)

  fireEvent.change(getByLabelText('Link'), {
    target: { value: 'link-value' }
  })

  fireEvent.change(getByLabelText('Note'), {
    target: { value: 'note-value' }
  })

  fireEvent.click(getByText('Save'))

  expect(onSave).toHaveBeenCalledWith(
    expect.objectContaining({
      link: 'link-value',
      note: 'note-value',
      date: expect.any(Date)
    })
  )
})
