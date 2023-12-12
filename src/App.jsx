import { useState, useEffect } from 'react'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'
import Formulario from './components/Formulario'

function App() {
  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})
  // Coloca los registros del localstorage en el listado de pacientes
  useEffect(()=>{
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS)
    }
    obtenerLS();
  },[])
  // Modifica el state de Pacientes en el localstorage
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))
  },[pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  
  return (
    <div className='container mt-20 mx-auto'>
      <Header></Header>
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes} 
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        ></Formulario>
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        ></ListadoPacientes>
      </div>
    </div>
  )
}

export default App
