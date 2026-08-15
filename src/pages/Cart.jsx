import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { decrementItemQuantity, addItem, removeItem, clearCart } from '../features/cart/CartSlice';

export default function Cart() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

const {cartItems, totalPrice, totalQuantity} = useSelector((state) => 
    state.cart
);

if(cartItems.length === 0) {
    return(
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
            <h2 className="text-2xl font-bold">Корзина пуста</h2>
            <h3 className="text-gray-500">
                Посмотрите каталог на главной странице, чтобы найти что-нибудь интересное
            </h3>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
             onClick={() => navigate('/')}>Вернуться в каталог
             </button>
        </div>
    )
}
return(
        <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex flex-col gap-4">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md border border-gray-100">
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-16 h-16 object-contain"
                        />

                        <div className="flex-grow ml-4">
                            <h3 className="font-bold text-gray-800">{item.title}</h3>
                            <p className="text-gray-500 text-sm">${item.price}</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button 
                                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-3 py-1 rounded-lg transition"
                                onClick={() => dispatch(decrementItemQuantity(item.id))}
                            >
                                -
                            </button>
                            <span className="font-bold min-w-[20px] text-center">{item.quantity}</span>
                            <button 
                                className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-3 py-1 rounded-lg transition"
                                onClick={() => dispatch(addItem(item))}
                            >
                                +
                            </button>
                        </div>

                        <button 
                            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm ml-4"
                            onClick={() => dispatch(removeItem(item.id))}
                        >
                            Удалить
                        </button>                    
                    </div>
                ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-fit sticky top-6">
                <p className="text-xl font-bold mb-2">Итого: ${totalPrice}</p>
                <p className="text-gray-600 mb-6">Товаров в заказе: {totalQuantity} шт.</p>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 text-sm mb-3">
                    Оформить заказ
                </button>
                
                <button 
                    className="w-full text-red-600 hover:text-red-700 font-medium py-2 text-sm border border-red-200 rounded-lg hover:bg-red-50 transition"
                    onClick={() => dispatch(clearCart())}
                >
                    Очистить корзину
                </button>
            </div>
        </div>
    );
}