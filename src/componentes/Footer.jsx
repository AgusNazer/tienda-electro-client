import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 via-violet-700 to-purple-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Redes sociales */}
        <div className="flex items-center gap-8 mb-6 md:mb-0">
          <a href="https://www.linkedin.com/in/agustinnazer" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaLinkedin className="text-2xl md:text-3xl text-white hover:text-blue-300" />
          </a>
          <a href="https://github.com/AgusNazer" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <FaGithub className="text-2xl md:text-3xl text-white hover:text-gray-300" />
          </a>
          <a href="mailto:agustin.nazer@hotmail.com" className="hover:scale-110 transition-transform">
            <FaEnvelope className="text-2xl md:text-3xl text-white hover:text-pink-300" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-base md:text-lg text-gray-200 text-center md:text-right">
          © {new Date().getFullYear()} Agustín Nazer — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
