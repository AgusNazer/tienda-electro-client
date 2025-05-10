export default function Home() {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,store')" }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to Tienda Electro</h1>
        <p className="text-lg">Explore the best products just for you!</p>
      </div>
    </div>
  );
}
