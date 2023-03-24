import React, { useState, useEffect } from 'react';

import './style.css'

import { Card } from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({name: '', avatar: '' })

  // criando estudante
  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    // adicionando estudantes e guardando estado anterior
    setStudents(prevState => [...prevState, newStudent]);
  }

  useEffect(() => {
    fetch('https://api.github.com/users/alvescamila87')
    .then(response => response.json())
    .then(data => { 
      setUser({
        name: data.name,
        avatar: data.avatar_url,
      })
    })
    .catch(error => console.error(error))
  }, []);
 
  return (
    <div className='container'>
      <header>
        <h1>Lista de presença </h1>
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>

      </header>
      

      <input 
        type="text" 
        placeholder="Digite o nome..." 
        onChange={event => setStudentName(event.target.value)}
      />

      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      
      { 
      students.map(student => (
        <Card 
          key={student.time}
          name={student.name} 
          time={student.time} 
        />
      ))
      }
    </div>
  )
}


