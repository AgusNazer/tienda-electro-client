import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Notebooks",
    image: "https://www.notebookcheck.org/fileadmin/Notebooks/Apple/MacBook_Air_13_M3_10C_GPU/IMG_2758.JPG"
  },
  {
    name: "Computadoras",
    image: "https://www.infinit.com.uy/imgs/productos/productos3_19453.jpg"
  },
  {
    name: "Monitores/Tvs",
    image: "https://image.benq.com/is/image/benqco/thumbnail-show-mac-colors?$ResponsivePreset$"
  },
  {
    name: "Perifericos",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=500"
  },
    {
    name: "Otros",
    image: "https://i.blogs.es/f20bb7/portada-accesorios/450_1000.jpg"
  },

];

const Categoria = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Nuestras Categorías</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
<Link
  to={`/category/${encodeURIComponent(category.name)}`}
  key={index}
  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
>

            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-violet-700">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categoria;
