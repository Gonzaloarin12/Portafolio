import React from 'react'

    const Contacto = () => {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-800">
              <form className="bg-gray-900 p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-white text-2xl font-bold mb-6 text-center">CONTACTO</h2>
        
                <div className="mb-4">
                  <label htmlFor="nombre" className="block text-gray-300 text-sm font-bold mb-2 ">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Ingrese su nombre"
                  />
                </div>
        
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Ingrese su correo electrónico"
                  />
                </div>
        
                <div className="mb-6">
                  <label htmlFor="mensaje" className="block text-gray-300 text-sm font-bold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Escriba su mensaje"
                    rows="4"
                  ></textarea>
                </div>
        
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-black w-full"
                >
                  Enviar
                </button>
              </form>
            </div>
          );
    }

export default Contacto
