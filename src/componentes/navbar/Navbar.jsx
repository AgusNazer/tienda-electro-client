import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-white shadow p-4 flex gap-4">
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-500 font-bold underline'
                        : 'text-gray-700 hover:text-blue-500'
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/products"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-500 font-bold underline'
                        : 'text-gray-700 hover:text-blue-500'
                }
            >
                Products
            </NavLink>
        </nav>
    );
}
