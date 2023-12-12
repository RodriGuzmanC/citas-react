import React from 'react'
import { useState, useEffect } from 'react'
import Error from './Error'


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(()=>{
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // Validacion
        if ([nombre, propietario, email, fecha, sintomas ].includes('')) {
            setError(true)
        }
        else{
            setError(false)

            const objetoPaciente = {
                nombre, 
                propietario, 
                email, 
                fecha, 
                sintomas,
            }
            if (paciente.id) {
                // Editando el registro
                objetoPaciente.id = paciente.id

                const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

                setPacientes(pacientesActualizados)
                setPaciente({})
            }else{
                objetoPaciente.id = generarId()
                setPacientes([...pacientes, objetoPaciente])
            }
        }
        //Reinicia el formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }
    return (
        <div className='md:w-1/2 lg:w-2/5 mb-10 mr-5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento de pacientes</h2>
            <p className='font-black text-center mb-5'>Añade pacientes y administralos</p>

            <form action="" className='bg-slate-50 shadow-md rounded-lg py-10 px-5' onSubmit={handleSubmit}>

                {error && <Error mensaje='Todos los campos son requeridos'></Error>}

                <div className='mb-5'>
                    <label htmlFor="mascota" className='block text-gray-900 font-bold uppercase'>Nombre Mascota</label>
                    <input 
                        type="text" 
                        id='mascota' 
                        placeholder='Nombre de la mascota' 
                        className='border-2 w-full p-2 mt-2 rounded-md'
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="propietario" className='block text-gray-900 font-bold uppercase'>Nombre Propietario</label>
                    <input 
                        type="text" 
                        id='propietario' 
                        placeholder='Nombre del propietario' 
                        className='border-2 w-full p-2 mt-2 rounded-md'
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
                    />
                        
                </div>
                <div className='mb-5'>
                    <label htmlFor="email" className='block text-gray-900 font-bold uppercase'>Email</label>
                    <input 
                        type="email" 
                        id='email' 
                        placeholder='Correo' 
                        className='border-2 w-full p-2 mt-2 rounded-md'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="alta" className='block text-gray-900 font-bold uppercase'>Alta</label>
                    <input 
                        type="date" 
                        id='alta' 
                        className='border-2 w-full p-2 mt-2 rounded-md'
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />
                </div>
                <div className='mb-5'>
                    <label htmlFor="sintomas" className='block text-gray-900 font-bold uppercase'>sintomas</label>
                    <textarea 
                        name="sintomas" 
                        id="sintomas" 
                        placeholder='Describe los sintomas'
                        className='border-2 w-full p-2 mt-2 rounded-md'
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    ></textarea>
                </div>
                <input 
                    type="submit" 
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all' 
                    value={ paciente.id ? "Editar Paciente" : "Agregar Paciente"}/>
            </form>
        </div>
    )
}

export default Formulario
