import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../services/Api'; // Importando tu API existente

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Banners para el slider
  const banners = [
    {
      title: "Tecnología de Vanguardia",
      subtitle: "Descubre lo último en computadoras y notebooks",
      cta: "Ver Catálogo",
      ctaLink: "/products",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200"
    },
    {
      title: "Accesorios Premium",
      subtitle: "Periféricos de alta gama para potenciar tu experiencia",
      cta: "Explorar",
      ctaLink: "/products",
      image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1200"
    },
    {
      title: "Soluciones Profesionales",
      subtitle: "Equipos diseñados para máximo rendimiento",
      cta: "Comprar Ahora",
      ctaLink: "/products",
      image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1200"
    }
  ];

  // Categorías
  const categories = [
    { name: "Notebooks", icon: "laptop", image: "https://www.notebookcheck.org/fileadmin/Notebooks/Apple/MacBook_Air_13_M3_10C_GPU/IMG_2758.JPG" },
    { name: "Computadoras", icon: "desktop", image: "https://www.infinit.com.uy/imgs/productos/productos3_19453.jpg" },
    { name: "Monitores", icon: "tv", image: "https://image.benq.com/is/image/benqco/thumbnail-show-mac-colors?$ResponsivePreset$" },
    { name: "Periféricos", icon: "mouse", image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=500" }
  ];

  // Obtener productos destacados desde tu API
  useEffect(() => {
    setIsLoading(true);
    getAllProducts()
      .then(data => {
        // Tomar los primeros 4 productos como destacados
        setFeaturedProducts(data.slice(0, 4));
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  }, []);

  // Efecto para cambiar el slide automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [banners.length]);

  // Función para cambiar el slide manualmente
  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Slider */}
      <div className="relative h-[70vh] overflow-hidden">
        {banners.map((banner, index) => (
          <div 
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${banner.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{banner.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{banner.subtitle}</p>
              <Link to={banner.ctaLink}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                  {banner.cta}
                </button>
              </Link>
            </div>
          </div>
        ))}
        
        {/* Slider controls */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link to="/products" key={index} className="group">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Ver Productos
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Productos Destacados</h2>
            <Link to="/all-products" className="text-blue-600 hover:text-blue-800 font-semibold">
  Ver Todos →
</Link>

          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map(product => (
                <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    {product.imageUrl ? (
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-2 line-clamp-2 h-12">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-blue-600">${product.price}</span>
                      <Link to={`/products/${product.id}`}>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                          Ver Detalles
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">¿Por Qué Elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Entrega Rápida</h3>
            <p className="text-gray-600">Recibe tus productos en tiempo récord con nuestro servicio de entrega express.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Garantía Extendida</h3>
            <p className="text-gray-600">Todos nuestros productos cuentan con garantía extendida y soporte técnico.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Mejores Precios</h3>
            <p className="text-gray-600">Garantizamos los mejores precios del mercado con nuestra política de igualación.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para mejorar tu tecnología?</h2>
          <p className="text-xl mb-8">Explora nuestra amplia selección de productos y encuentra exactamente lo que necesitas.</p>
          <Link to="/products">
            <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Ver Catálogo Completo
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}