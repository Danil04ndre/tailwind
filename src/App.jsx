function App() {
  return (
    <>
      <div className="bg-cyan-400 py-5">
        <form
          action=""
          className="block w-80 mx-auto bg-white rounded-lg overflow-hidden p-5"
        >
          <input
            type="text"
            placeholder="Nombre"
            disabled
            className="block border border-gray-400 w-full px-3 py-1 mb-3 rounded outline-none disabled:bg-red-200"
          />
          <input
            type="email"
            placeholder="Correo"
            className="block border border-gray-400 w-full px-3 py-1 mb-3 rounded outline-none"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="block border border-gray-400 w-full px-3 py-1 mb-3 rounded outline-none"
          />
          <input
            type="submit"
            value="Ingresar"
            className="bg-azul-claro w-full text-center text-white py-2 rounded cursor-pointer hover:bg-azul-oscuro"
          />
        </form>

        
      </div>
      <section className="md:flex">
      <div className="border border-black w-80 mx-auto mt-5 p-5 lg:w-96">
          <h2 className="text-xl sm:text-2xl font-bold lg:text-3xl">Responsive Desing</h2>
          <p className="mt-2 md:text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint amet quasi magnam molestias vitae quibusdam vel officia reiciendis temporibus explicabo.</p>
      </div>
      <div className="border border-black w-80 mx-auto mt-5 p-5 lg:w-96">
          <h2 className="text-xl sm:text-2xl font-bold lg:text-3xl">Responsive Desing</h2>
          <p className="mt-2 md:text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint amet quasi magnam molestias vitae quibusdam vel officia reiciendis temporibus explicabo.</p>
      </div>
      <div className="border border-black w-80 mx-auto mt-5 p-5 lg:w-96">
          <h2 className="text-xl sm:text-2xl font-bold lg:text-3xl">Responsive Desing</h2>
          <p className="mt-2 md:text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint amet quasi magnam molestias vitae quibusdam vel officia reiciendis temporibus explicabo.</p>
      </div>
      </section>
    </>
  );
}

export default App;
