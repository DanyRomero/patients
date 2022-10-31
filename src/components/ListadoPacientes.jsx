import React from "react";
import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-10 font-bold text-center">
        Administra tus{" "}
        <span className="text-indigo-600">pacientes y citas</span>
      </p>
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  );
};

export default ListadoPacientes;
