import React from 'react'
import { render } from '@testing-library/react'
import Link from './Link'

test('renders link', () => {
  const note = { link: 'https://foo.com', title: 'Foo' }
  const { getByText } = render(<Link note={note} />)
  const linkElement = getByText('Foo')
  expect(linkElement).toBeInTheDocument()
  expect(linkElement).toHaveAttribute('href', 'https://foo.com')
})

test('renders link with description', () => {
  const note = { link: 'https://foo.com', title: 'Foo', note: 'A description' }
  const { getByText } = render(<Link note={note} />)
  const descriptionElement = getByText('A description')
  expect(descriptionElement).toBeInTheDocument()
})
