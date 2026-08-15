import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

export default function App() {
    return(
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
            {<Header />}
            <main className="flex-grow container mx-auto px-4 py-8">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </main>
            {<Footer />}
        </div>
    )
}

