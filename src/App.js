import React, { useState } from 'react'
import Save from './Save'
import List from './List'

function App() {
  const [store, setStore] = useState([])

  return (
    <div className="App">
      <Save onSave={note => setStore(prevStore => [...prevStore, note])}></Save>
      <List notes={store}></List>
    </div>
  )
}

export default App
