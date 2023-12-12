import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    
    return (
        
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Listas</span>
                    </p>

                    {pacientes.map( (paciente) => (
                        <Paciente 
                        paciente={paciente} 
                        key={paciente.id}
                        setPaciente={setPaciente}
                        eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">Aun no hay pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando paciente y {''}
                        <span className="text-indigo-600 font-bold">apareceran en este lugar</span>
                    </p>
                </>
            )}
            
        </div>
    );
};

export default ListadoPacientes
