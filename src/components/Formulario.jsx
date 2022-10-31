import {useState, useEffect} from 'react'

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10 font-bold">Añade Pacientes y <span className="text-indigo-600">Administralos</span></p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5">
        <div className="mb-3">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre de la mascota" id="mascota"/>
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre propietario</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="text" placeholder="Nombre del propietario" id="propietario"/>
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="email" placeholder="Email" id="email"/>
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>
          <input className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" type="date" placeholder="Fecha de Alta" id="alta"/>
        </div>
        <div className="mb-3">
          <label className="block text-gray-700 uppercase font-bold" htmlFor="sintomas">Síntomas</label>
          <textarea className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" id="sintomas" placeholder="Describe los síntomas"/>
        </div>
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Agregar Paciente"/>
      </form>
    </div>
  )
}

export default Formulario