

const Paciente = () => {
  return (
    <div className="m-3 px-5 py-10 rounded-xl bg-white shadow-md">
        <p className="font-bold mb-3 uppercase text-gray-700">
          Nombre: <span className="font-normal normal-case">Hook</span>
        </p>
        <p className="font-bold mb-3 uppercase text-gray-700">
          Propietario: <span className="font-normal normal-case">Juan</span>
        </p>
        <p className="font-bold mb-3 uppercase text-gray-700">
          Email: <span className="font-normal normal-case">correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 uppercase text-gray-700">
          Fecha Alta: <span className="font-normal normal-case">10 diciembre 2022</span>
        </p>
        <p className="font-bold mb-3 uppercase text-gray-700">
          Síntomas: <span className="font-normal normal-case">Lorem ipsum</span>
        </p>
      </div>
  )
}

export default Paciente