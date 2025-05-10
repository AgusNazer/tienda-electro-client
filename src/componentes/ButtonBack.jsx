import { useNavigate } from "react-router-dom"

const ButtonBack = () => {

    const navigate = useNavigate();
  return (
     <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
      >
        ← Volver
      </button>
  )
}

export default ButtonBack