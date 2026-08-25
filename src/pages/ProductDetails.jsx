import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProductsById } from '../features/products/productSlice';
import { addItem } from '../features/cart/CartSlice';

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentProduct, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsById(id));
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 font-semibold p-4 bg-red-50 rounded-lg">
        Ошибка: {error}
      </div>
    );
  }

  if (currentProduct) {
    return (
      <div className="p-4">
        <div className="bg-white rounded-xl shadow-md p-6 max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Левая колонка: Картинка */}
          <div className="md:w-1/2 flex items-center justify-center bg-gray-50 rounded-xl p-4">
            <img 
              src={currentProduct.thumbnail} 
              alt={currentProduct.title} 
              className="max-h-96 object-contain"
            />
          </div>
          
          {/* Правая колонка: Информация и кнопка */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase text-blue-600">{currentProduct.brand}</span>
              <h1 className="text-3xl font-bold text-gray-800 my-2">{currentProduct.title}</h1>
              <p className="text-gray-500 text-base my-4">{currentProduct.description}</p>
            </div>
            
            <div className="flex items-center justify-between mt-6">
              <span className="text-2xl font-black text-gray-900">${currentProduct.price}</span>
              <button 
                onClick={() => dispatch(addItem(currentProduct))}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 text-sm shadow-md shadow-blue-100"
              >
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}