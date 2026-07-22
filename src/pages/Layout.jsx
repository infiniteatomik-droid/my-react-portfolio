import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
    return(
        <div className='min-h-screen bg-slate-50 flex flex-col'>
            <Header />

            <main className='flex-grow'>
                <Outlet />
            </main>
        </div>
    )
}