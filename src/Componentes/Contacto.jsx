import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactoUs = () => {
  const refForm = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_2q7gbra";
    const templateId = "template_19700x8";
    const apiKey = "u2gjej6T3_WEtEQzD";

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((result) => console.log(result.text))
      .catch((error) => console.error(error));
      refForm.current.reset();
  };

  return (
<div className="bg-gray-800 h-screen flex flex-col items-center justify-center">
    <form
      className="bg-gray-900 p-8 rounded shadow-md w-full max-w-md"
      ref={refForm}
      action=""
      onSubmit={handleSubmit}
    >
      <div>
        <h2 className="text-white text-2xl font-bold mb-6 text-center">CONTACTO</h2>

        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-300 text-sm font-bold mb-2 ">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="username"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Ingrese su nombre"
            pattern="[A-Za-z]+"
            title="Ingrese solo letras"
            required
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
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="mensaje" className="block text-gray-300 text-sm font-bold mb-2">
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="message"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Escriba su mensaje"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-black w-full"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
  );
};

export default ContactoUs;