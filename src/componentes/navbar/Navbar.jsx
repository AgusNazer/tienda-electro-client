import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-white shadow p-4 flex gap-4 items-center justify-between">
            <div className="flex gap-4">
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-500 font-bold underline'
                            : 'text-gray-700 hover:text-blue-500'
                    }
                >
                    Welcome
                </NavLink>
                <NavLink
                    to="/home"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-500 font-bold underline'
                            : 'text-gray-700 hover:text-blue-500'
                    }
                >
                    Home
                </NavLink>
            </div>

            <div>
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-500 font-bold underline flex items-center'
                            : 'text-gray-700 hover:text-blue-500 flex items-center'
                    }
                >
                    🛒 <span className="ml-1">Cart</span>
                </NavLink>
            </div>
        </nav>
    );
}
