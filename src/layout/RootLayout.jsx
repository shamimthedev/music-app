import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const RootLayout = () => {
    return (
        <main>
            <header>
                <Navbar />
            </header>
            <div><Outlet /></div>
        </main>
    )
}

export default RootLayout