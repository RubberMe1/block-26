import { useState } from 'react'
import ContactList from './ContatcList';

function App() {
const [selectedContactId, setSelectedContactId] =useState(null)

  return (
    <>
    <ContactList/>
    </>
  );
}

export default App
