import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setSearch, setCategory, setSort } from '../features/products/productSlice';
import {addItem} from '../features/cart/CartSlice';
export default function Home() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const search = useSelector((state) => state.products.search);
  const category = useSelector((state) => state.products.category);
  const sort = useSelector((state) => state.products.sort);
  const { items, isLoading, error } = useSelector((state) => state.products);

  const fItems = useMemo(() => {let fItems = items.filter(product => 
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== 'All') {
    fItems = fItems.filter(product => product.category.toLowerCase() === category.toLowerCase());
  }

  if (sort === 'low-to-high') {
    fItems = [...fItems].sort((a, b) => a.price - b.price);
  } else if (sort === 'high-to-low') {
    fItems = [...fItems].sort((a, b) => b.price - a.price);
  }
  console.log("У товаров в базе вот такие категории:", [...new Set(items.map(p => p.category))]);

  return fItems;
}, [items, search, category, sort]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sort]);

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;

const currentItems = fItems.slice(indexOfFirstItem, indexOfLastItem);

const totalPages = Math.ceil(fItems.length / itemsPerPage);


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

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Каталог смартфонов</h1>
      
      {/* ПАНЕЛЬ ФИЛЬТРОВ */}
      <div className='flex flex-col gap-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100 mb-8'> 
        <div className='flex flex-col md:flex-row gap-4 w-full'>
          <input 
            className='flex-1 px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all' 
            type="text" 
            placeholder="Поиск гаджетов..." 
            value={search}
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
          <select
            value={sort}
            className='px-4 py-2.5 border border-gray-300 rounded-lg bg-white outline-none focus:ring-2 focus:ring-blue-500'
            onChange={(e) => dispatch(setSort(e.target.value))}
          >
            <option value="default">По умолчанию</option>
            <option value="low-to-high">Сначала дешевые</option>
            <option value="high-to-low">Сначала дорогие</option>
          </select>
        </div>
        <div className='flex flex-wrap gap-2'>
            {['All', 'beauty', 'fragrances', 'furniture', 'groceries'].map((i) => (
            <button 
              key={i}
              onClick={() => dispatch(setCategory(i))}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                category === i ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {i.charAt(0).toUpperCase() + i.slice(1)}                    
            </button>
          ))}
        </div>
      </div>

      {/* СЕТКА ТОВАРОВ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {fItems.length === 0 ? (
          <div className="text-center py-12 text-gray-500 col-span-full">
            <p className="text-xl font-medium">Товары не найдены 🔍</p>
            <p className="text-sm mt-1">Попробуйте изменить параметры поиска или фильтр</p>
          </div>
        ) : (
          currentItems.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                <img 
                  src={product.thumbnail} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">{product.brand}</span>
                <h2 className="text-lg font-bold text-gray-800 line-clamp-1 mb-2">{product.title}</h2>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">{product.description}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-black text-gray-900">${product.price}</span>
                  <button 
                    onClick={() => dispatch(addItem(product))}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                  >
                    В корзину
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {/* БЛОК ПАГИНАЦИИ */}
      {totalPages > 1 && (
        <div className='flex justify-center items-center gap-2 mt-8'>
          <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => prev - 1)}
          className='px-4 py-2 border rounded-lg bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition'
            >
              Назад
            </button>
            {Array.from({length: totalPages}, (_, index) => {
              const pageNumber = index + 1;
              return(
                <button
                onClick={() => setCurrentPage(pageNumber)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                  currentPage === pageNumber 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                  : 'bg-white border text-gray-600 hover:bg-gray-50'
                }`}>
                  {pageNumber}
                </button>
              );
            })}
            <button disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className='px-4 py-2 border rounded-lg bg-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition'
            >
              Вперед
            </button>
        </div>
      )}
    </div>
  );
}
