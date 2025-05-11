import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    
    <div
      className="h-screen bg-cover bg-center flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "url(https://static.vecteezy.com/ti/fotos-gratis/t1/50532704-uma-loja-com-muitos-eletronico-dispositivos-em-exibicao-foto.jpg)",
        backgroundSize: 'cover',  // Asegura que la imagen cubra toda la pantalla
        backgroundPosition: 'center'  // Centra la imagen
      }}
    >
      {/* Fondo oscuro con opacidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Contenido de la página */}
      <div className="relative z-10 text-center text-white px-4">
        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">
          Bienvenido a Tienda Electro
        </h1>
        {/* Descripción */}
        <p className="text-xl md:text-2xl mb-8 text-shadow-lg">
          ¡Descubre los mejores productos tecnológicos solo para ti!
        </p>
        
        {/* Botón de llamada a la acción */}
        <div className="mt-6">
          <Link to="/home">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Ingresar
            </button>
          </Link>
        </div>
      </div>

      {/* Información adicional o características (Opcional) */}
      <div className="absolute bottom-5 w-full text-center text-white px-4">
        <p className="text-sm text-opacity-70">Tu tienda de tecnología confiable y accesible.</p>
      </div>
    </div>
  );
}
