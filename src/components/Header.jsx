import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
    // Забираем общее количество товаров из стора
    const { totalQuantity } = useSelector((state) => state.cart);

    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <Link to="/" className="font-bold text-lg">Шапка магазина</Link>
            
            {/* Ссылка на корзину со счетчиком */}
            <Link to="/cart" className="bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                🛒 Корзина ({totalQuantity})
            </Link>
        </header>
    );
}
